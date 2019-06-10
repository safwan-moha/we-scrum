const express = require('express');
const bodyParser = require('body-parser');
const { appParams } = require('./app/utils/config');
const jiraRouter = require('./app/routers/jiraRouter');
const excelRouter = require('./app/routers/excelRouter');
const cors = require('cors');

const app = express();

const allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}
app.use(allowCrossDomain);
app.use(bodyParser.json());
app.options('*', cors())

app.get('/', (req, res) => res.send('WeScrum API 1.1v'))
app.get('/health', (req, res) => res.send('Health-check: API 1.1v ' + Math.random()))

app.use('/jira', jiraRouter);
app.use('/excel', excelRouter);

const port = appParams.port;
app.listen(port, () => console.log(`API listening on port ${port}!`))