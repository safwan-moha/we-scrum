const fs = require('fs');
const readline = require('readline');
const { google } = require('googleapis');

const SCOPES = ['https://www.googleapis.com/auth/spreadsheets', 'https://www.googleapis.com/auth/drive'];
const TOKEN_PATH = 'token.json';

const createExcel = (jiraData) => new Promise((resolve, reject) => {
  fs.readFile('./app/utils/credentials.json', (err, content) => {
    if (err) return console.log('Error loading client secret file:', err);
    return authorize(JSON.parse(content), jiraData, create, resolve, reject);
  });
});


function authorize(credentials, jiraData, callback, resolve, reject) {
  const { client_secret, client_id, redirect_uris } = credentials.installed;
  const oAuth2Client = new google.auth.OAuth2(
    client_id, client_secret, redirect_uris[0]);

  fs.readFile(TOKEN_PATH, (err, token) => {
    if (err) return getNewToken(oAuth2Client, jiraData, callback);
    oAuth2Client.setCredentials(JSON.parse(token));
    return callback(oAuth2Client, jiraData, resolve, reject);
  });
}

function getNewToken(oAuth2Client, jiraData, callback) {
  const authUrl = oAuth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: SCOPES,
  });
  console.log('Authorize this app by visiting this url:', authUrl);
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.question('Enter the code from that page here: ', (code) => {
    rl.close();
    oAuth2Client.getToken(code, (err, token) => {
      if (err) return console.error('Error while trying to retrieve access token', err);
      oAuth2Client.setCredentials(token);

      fs.writeFile(TOKEN_PATH, JSON.stringify(token), (err) => {
        if (err) return console.error(err);
        console.log('Token stored to', TOKEN_PATH);
      });
      callback(oAuth2Client, jiraData);
    });
  });
}

function create(auth, jiraData, resolve, reject) {
  const sheets = google.sheets({ version: 'v4', auth });
  const drive = google.drive({ version: 'v3', auth });
  const resource = {
    properties: {
      title: jiraData.title,
    },
  };
  sheets.spreadsheets.create({
    resource,
    fields: 'spreadsheetId',
  }, (err, res) => {
    if (err) return console.log('The API returned an error: ' + err);
    console.log(`Spreadsheet ID: ${res.data.spreadsheetId}`, jiraData.range);
    sheets.spreadsheets.values.update({
      spreadsheetId: res.data.spreadsheetId,
      range: jiraData.range,
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: jiraData.values,
      },
    });
    const requests = [{
      addConditionalFormatRule: {
        rule: {
          ranges: {
            sheetId: 0,
            startRowIndex: 2,
            endRowIndex: jiraData.rows,
            startColumnIndex: 0,
            endColumnIndex: 4,
          },
          booleanRule: {
            condition: {
              type: 'TEXT_CONTAINS',
              values: [{ userEnteredValue: '="Dev Complete"' }],
            },
            format: {
              backgroundColor: { green: 0.8, alpha: 0.8 },
            },
          },
        },
        index: 0,
      },
    },
    {
      addConditionalFormatRule: {
        rule: {
          ranges: {
            sheetId: 0,
            startRowIndex: 2,
            endRowIndex: jiraData.rows,
            startColumnIndex: 0,
            endColumnIndex: 4,
          },
          booleanRule: {
            condition: {
              type: 'TEXT_CONTAINS',
              values: [{ userEnteredValue: '="Resolved"' }],
            },
            format: {
              backgroundColor: { green: 0.8, alpha: 0.8 },
            },
          },
        },
        index: 0,
      },
    }];
    sheets.spreadsheets.batchUpdate({
      spreadsheetId: res.data.spreadsheetId,
      resource: { requests }
    });
    drive.permissions.create({
      resource: {
        'type': 'user',
        'role': 'writer',
        'emailAddress': jiraData.email
      },
      fileId: res.data.spreadsheetId,
      fields: 'id',
    }, (err, res) => {
      if (err) {
        console.error(err);
      } else {
        console.log('Permission ID: ', res.id)
      }
    });
    return resolve('https://docs.google.com/spreadsheets/d/' + res.data.spreadsheetId);
  });

}

module.exports = { createExcel }