import HeaderPage from './header.page';
import SearchResultsPage from './searchResults.page';

const SELECTORS = {
  SEARCH_INPUT: '#search_query_top',
  SEARCH_BUTTON: '#searchbox > button',
  NEWSLETTER_INPUT: '#newsletter-input',
  SUBMIT_NEWSLETTER_BUTTON: '#newsletter_block_left button',
  SUCCESS_ALERT_LABEL: '#columns > p'
};
class HomePage extends HeaderPage {
  get searchInput () {
    return $(SELECTORS.SEARCH_INPUT);
  }

  get searchButton () {
    return $(SELECTORS.SEARCH_BUTTON);
  }

  get newsletterInput () {
    return $(SELECTORS.NEWSLETTER_INPUT);
  }

  get submitNewsletterButton () {
    return $(SELECTORS.SUBMIT_NEWSLETTER_BUTTON);
  }

  get successAlertLabel () {
    return $(SELECTORS.SUCCESS_ALERT_LABEL);
  }

  open () {
    super.open();
    return this;
  }

  searchFor (searchText) {
    this.searchInput.setValue(searchText);
    this.searchButton.click();
    return SearchResultsPage;
  }

  subscribeToNewsletter (emailAddress) {
    this.newsletterInput.scrollIntoView();
    this.newsletterInput.setValue(emailAddress);
    this.submitNewsletterButton.click();
  }

  newsLetterSubscriptionAlert () {
    this.successAlertLabel.waitForDisplayed();
    this.successAlertLabel.scrollIntoView();
    return this.successAlertLabel.getText();
  }
}

export default new HomePage();
