import Page from './page';

class HomePage extends Page {

    get loggedInUserName() {
        return $('.logged-user-name');
    }

    getLoggedInUserName() {
        return this.loggedInUserName.getText();
    }
}

export default new HomePage();