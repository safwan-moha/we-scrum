const { get, orderBy } = require('lodash');
const fs = require('fs');

const process = (resp) => {
  if (resp) {
    const tickets = resp.issues.map(t => {
      const parent = get(t, 'fields.parent.key', null)
      return {
        parent: parent ? parent : t.key,
        num: parent ? '' : t.key,
        assignee: get(t, 'fields.assignee.name', ''),
        status: get(t, 'fields.status.name', ''),
        summary: get(t, 'fields.summary', '')
      }
    })

    return orderBy(tickets, ['parent', 'num'], ['desc', 'desc']);
  }
  return [];
}

const convertJiraData = (tickets, title, email) => {
  if (tickets) {
    const ticketsArray = tickets.map(t => ([t.num, t.summary, t.assignee, t.status]))
    return {
      title,
      email,
      range: 'A1:D' + (tickets.length + 1),
      rows: tickets.length,
      values: [['NUMBER', 'SUMMARY', 'ASSIGNEE', 'STATUS'], ...ticketsArray]
    }
  }
  return ({})
}

const addToDB = (data) => {
  const DB_PATH = './app/utils/dataStore.json';
  fs.readFile(DB_PATH, (err, content) => {
    if (err) return console.error(err);
    const json = JSON.parse(content);
    json.push(data);
    fs.writeFile(DB_PATH, JSON.stringify(json), (err) => {
      if (err) return console.error(err);
      console.log('Link stored to', DB_PATH);
    });
  });
}

const readDB = ({ username, sprint }) => new Promise((resolve, reject) => {
  const DB_PATH = './app/utils/dataStore.json';
  fs.readFile(DB_PATH, (err, content) => {
    if (err) return reject(err);
    const json = JSON.parse(content);

    const matches = json.filter(t => t.username === username && t.title === sprint);
    if (matches)
      if (matches.length > 0)
        return resolve(matches[matches.length - 1]);
    return resolve({});
  });
});

module.exports = { readDB, addToDB, process, convertJiraData }