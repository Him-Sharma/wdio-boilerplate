import HomePage from '../../page/home.page';
import SearchResultsPage from '../../page/searchResults.page';
import ContactUsPage from '../../page/contactUs.page';
import * as faker from 'faker';

describe('Customer', () => {
  it('should be able to search for items', () => {
    HomePage.open().searchFor('dress');
    expect(SearchResultsPage.productCountLabel).toHaveText('Showing 1 - 7 of 7 items');
  });
  it('should be able to send message to customer service without attachment', () => {
    ContactUsPage.open()
      .contactCustomerService()
      .sendMessage(
        'Customer service',
        'abc@abc.com',
        '1231',
        'Order is not delivered'
      );
    expect(ContactUsPage.successMessageAlert).toHaveText(
      'Your message has been successfully sent to our team.'
    );
  });
  it('should be able to subscribe to newsletter', () => {
    HomePage.open().subscribeToNewsletter(faker.internet.email());
    expect(HomePage.successAlertLabel).toHaveText(
      'Newsletter : You have successfully subscribed to this newsletter.'
    );
  });
});
