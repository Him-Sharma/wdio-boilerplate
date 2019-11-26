import LoginPage from '../../../page/login.page';

describe('Hackthon user', () => {
    it('should be able to login with valid credentials', () => {
        expect(LoginPage.open().loginAs('test', 'test').getLoggedInUserName()).to.equal('Jack Gomez');
        assert.equal(browser.checkScreen('HomePage', {}), 0);
    });
    it('should see an error if tries to login without username', () => {
        LoginPage.open();
        assert.equal(browser.checkScreen('LoginPage', {}), 0);
        LoginPage.loginAs('', 'test');
        expect(LoginPage.getErrorMessage()).to.equal('Username must be present');
        assert.equal(browser.checkScreen('FailedLoginPage', {}), 0);
    });
    it('should see an error if tries to login without username and password', () => {
        LoginPage.open().loginAs('', '');
        expect(LoginPage.getErrorMessage()).to.equal('Both Username and Password must be present');
    });
    it('should see an error if tries to login without password', () => {
        LoginPage.open().loginAs('test', '');
        expect(LoginPage.getErrorMessage()).to.equal('Password must be present');
    });
});