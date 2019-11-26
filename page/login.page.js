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
    get errorMessage(){
        return $('.alert-warning');
    }

    open() {
        super.open();
        return this;
    }

    getErrorMessage(){
        return this.errorMessage.getText();
    }
    loginAs(username, password) {
        this.username.setValue(username);
        this.password.setValue(password);
        this.loginButton.click();
        return HomePage;
    }
}

export default new LoginPage();