const assert = require('assert');

describe('Thoughtworks homepage', () => {
    it('should match baseline', () => {
        browser.url('https://www.thoughtworks.com');
        var title = browser.getTitle();
        browser.checkScreen('ThoughtworksHomePage').should.be.equal(0);
        });
});