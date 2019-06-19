const express = require('express');
const puppeteer = require('puppeteer');
const { process, readDB } = require('../utils/jiraUtils');
// debugging
// const { resp } = require('../utils/data');

const jiraRouter = express.Router()

jiraRouter.post('/getSprint', (req, res) => {
    const { username, password, sprint } = req.body;
    console.log('getSprint req: ', username, sprint);
    (async () => {
        // debugging: { headless: false }
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto('https://jira.leapset.com/secure/Dashboard.jspa', {waitUntil: 'networkidle2'});
        await page.type('#login-form-username', username);
        await page.type('#login-form-password', password);
        await page.click('#login');
        await page.waitFor('#create_link');        
        await page.goto(`https://jira.leapset.com/rest/api/2/search?jql=sprint='${sprint}'`, {waitUntil: 'networkidle2'});
        const element = await page.$("body");
        const respRaw = await page.evaluate(element => element.textContent, element);
        const resp = JSON.parse(respRaw);
        await browser.close();
        
        const linkObj = await readDB({ username, sprint });
        const payload = {
            link: linkObj.link,
            jira: process(resp)
        }
        console.log('getSprint res: ', linkObj.link);
        res.send(JSON.stringify(payload));
    })();
})

module.exports = jiraRouter;