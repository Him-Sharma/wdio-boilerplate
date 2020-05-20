import HomePage from '../../../src/page/home.page';
import SearchResultsPage from '../../../src/page/searchResults.page';
import ContactUsPage from '../../../src/page/contactUs.page';
import * as faker from 'faker';

describe('Customer', () => {
  it('should be able to search for items', () => {
    HomePage.open().searchFor('dress');
    expect(SearchResultsPage.productCount).to.have.string('7');
  });
  it('should be able to send message to customer service without attachment', () => {
    ContactUsPage.open().contactCustomerService()
      .sendMessage('Customer service', 'abc@abc.com', '1231', 'Order is not delivered');
    expect(ContactUsPage.successMessage()).to.be.equal('Your message has been successfully sent to our team.');
  });
  it('should be able to subscribe to newsletter', () => {
    HomePage.open().subscribeToNewsletter(faker.internet.email());
    expect(HomePage.newsLetterSubscriptionAlert()).to.have.string('Newsletter : You have successfully subscribed to this newsletter.');
  });
});
