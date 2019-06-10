const { addToDB, process, convertJiraData } = require('../jiraUtils');
const { resp } = require('../data');

describe('Data Conversion', () => {
    it('Should convert', () => {
        const c = convertJiraData(process(resp));
        console.log(c);
        expect(2 + 2).toBe(4);
    });
});

describe.only('Save', () => {
    it('Save', () => {
        addToDB("test");
        expect(2 + 2).toBe(4);
    });
});