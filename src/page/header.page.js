import Page from './page';

const SELECTORS = {
    CONTACT_US_LINK: '#contact-link'
};
class HeaderPage extends Page {
    get contactUsLink() {
        return $(SELECTORS.CONTACT_US_LINK);
    }
}

export default HeaderPage;