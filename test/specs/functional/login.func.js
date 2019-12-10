import LoginPage from '../../../page/login.page';

describe('Acme customer', () => {
    it('should be able to login with valid credentials', () => {
        expect(LoginPage.open().loginAs('test', 'test').getLoggedInUserName()).to.equal('Jack Gomez');
    });
    it('should see an error if tries to login without username', () => {
        LoginPage.open().loginAs('', 'test');
        expect(LoginPage.getErrorMessage()).to.equal('Username must be present');
    });
});