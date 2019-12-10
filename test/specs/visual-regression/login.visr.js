import LoginPage from '../../../page/login.page';

describe('Acme customer', () => {
    it('should be able to login with valid credentials', () => {
        LoginPage.open().loginAs('test', 'test');
        assert.equal(browser.checkScreen('HomePage', {}), 0);     
    });
    it('should see an error if tries to login without username', () => {
        LoginPage.open();
        assert.equal(browser.checkScreen('LoginPage', {}), 0);
        LoginPage.loginAs('', 'test');
        assert.equal(browser.checkScreen('LoginFailedPage', {}), 0);
    });
});