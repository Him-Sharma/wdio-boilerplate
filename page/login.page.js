import Page from './page';
import HomePage from './home.page';

class LoginPage extends Page {
    super() {}

    get username() {
        return $('#username');
    }
    get password() {
        return $('#password');
    }
    get loginButton() {
        return $('#log-in');
    }
    get loginHeader() {
        return $('.auth-header');
    }

    open() {
        super.open();
        return this;
    }

    loginAs(username, password) {
        this.username.setValue(username);
        this.password.setValue(password);
        this.loginButton.click();
        return HomePage;
    }
}

export default new LoginPage();