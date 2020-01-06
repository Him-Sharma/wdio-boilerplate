import HeaderPage from './header.page';

const SELECTORS = {
    CONTACT_US_HEADER: '#center_column > h1',
    SUBJECT_HEADING_DROPDOWN: '#id_contact',
    EMAIL_INPUT: '#email',
    ORDER_REFERENCE_INPUT: '#id_order',
    SUBMIT_BUTTON: '#submitMessage',
    MESSAGE_INPUT: '#message',
    SUCCESS_MESSAGE: '#center_column > p'
};
class ContactUsPage extends HeaderPage {
    get contactUsHeader() {
        return $(SELECTORS.CONTACT_US_HEADER);
    }
    get subjectHeadingDropdown() {
        return $(SELECTORS.SUBJECT_HEADING_DROPDOWN);
    }
    get emailInput() {
        return $(SELECTORS.EMAIL_INPUT);
    }
    get orderReferenceInput() {
        return $(SELECTORS.ORDER_REFERENCE_INPUT);
    }
    get messageInput() {
        return $(SELECTORS.MESSAGE_INPUT);
    }
    get submitButton() {
        return $(SELECTORS.SUBMIT_BUTTON);
    }
    get successMessageAlert() {
        return $(SELECTORS.SUCCESS_MESSAGE);
    }

    contactCustomerService() {
        super.contactUsLink.waitForDisplayed();
        super.contactUsLink.click();
        return this;
    }
    open(){
        super.open();
        return this;
    }
    sendMessage(subjectHeading, emailAddress, orderReference, message) {
        this.subjectHeadingDropdown.selectByVisibleText(subjectHeading);
        this.emailInput.setValue(emailAddress);
        this.orderReferenceInput.setValue(orderReference);
        this.messageInput.setValue(message);
        this.submitButton.click();
        return this;
    }

    successMessage() {
        this.successMessageAlert.waitForDisplayed();
        return this.successMessageAlert.getText();
    }

}

export default new ContactUsPage();