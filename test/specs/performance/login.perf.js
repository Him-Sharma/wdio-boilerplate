import LoginPage from '../../../page/login.page';

describe('Performance metrics should be below benchmark', () => {
    beforeEach(() => {
        browser.enablePerformanceAudits({
            networkThrottling: 'online'
        });
    });
    it('for login page', () => {
        LoginPage.open();
        expect(browser.getPerformanceScore()).to.be.below(0.99);
    });
    afterEach(() => {
        browser.disablePerformanceAudits();
    });
});