import HomePage from '../../../page/home.page';

describe('Performance metrics should be below benchmark', () => {
    beforeEach(() => {
        browser.enablePerformanceAudits({
            networkThrottling: 'online'
        });
    });
    it('for home page', () => {
        HomePage.open();
        expect(browser.getPerformanceScore()).to.be.below(0.99);
    });
    afterEach(() => {
        browser.disablePerformanceAudits();
    });
});