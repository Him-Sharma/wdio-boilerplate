const assert = require('assert');
const TimelineReporter = require('wdio-timeline-reporter').default;


describe('webdriver.io page', () => {
    it('should have the right title', () => {
        browser.url('https://www.thoughtworks.com');
        var title = browser.getTitle();
        browser.checkScreen('webdriverHomePage').should.be.equal(0);
        TimelineReporter.addContext({
            title: 'image for diff',
            value: '<a href="../../.result/diff/*.js">Some important link related to test</a>'
          });
        });
});