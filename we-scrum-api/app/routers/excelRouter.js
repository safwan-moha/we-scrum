const express = require('express');
const { createExcel } = require('../utils/excelUtils');
const { convertJiraData, addToDB } = require('../utils/jiraUtils');

const excelRouter = express.Router()

excelRouter.post('/createSheet', (req, res) => {
    const { title, username, email, data } = req.body;
    console.log('createSheet req: ', username, title);

    const jiraData = convertJiraData(data, title, email);

    (async () => {
        const link = await createExcel(jiraData);

        addToDB({ title, username, link });
        console.log('createSheet req: ', link);
        res.send(JSON.stringify({ link }));
    })();
})

module.exports = excelRouter;