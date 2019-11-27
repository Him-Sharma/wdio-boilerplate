import LoginPage from '../../../page/login.page';

describe('Hackthon user', () => {
    it('should be able to login with valid credentials', () => {
        expect(LoginPage.open().loginAs('test', 'test').getLoggedInUserName()).to.equal('Jack Gomez');
        assert.equal(browser.checkScreen('applitools/HomePage', {}), 0);
    });
    it('should see an error if tries to login without username', () => {
        LoginPage.open();
        assert.equal(browser.checkScreen('applitools/LoginPage', {}), 0);
        LoginPage.loginAs('', 'test');
        expect(LoginPage.getErrorMessage()).to.equal('Username must be present');
        assert.equal(browser.checkScreen('applitools/FailedLoginPage', {}), 0);
    });
});