import LoginPage from '../../../page/login.page';

describe('Hackthon user', () => {
    it('should be able to login with valid credentials', () => {
        expect(LoginPage.open().loginAs('test', 'test').getLoggedInUserName()).to.equal('Jack Gomez');
    });
});