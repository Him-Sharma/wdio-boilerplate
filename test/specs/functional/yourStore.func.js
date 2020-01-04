import HomePage from '../../../page/home.page';
import SearchResultsPage from '../../../page/searchResults.page';
import HeaderPage from '../../../page/header.page';
import ContactUsPage from '../../../page/contactUs.page';

describe('Customer', () => {
    it('should be able to search for items', () => {
        HomePage.searchFor('dress');
        expect(SearchResultsPage.productCount).to.have.string('7');
    });
    it('should be able to send message to customer service without attachment', () => {
        ContactUsPage.contactCustomerService()
            .sendMessage('Customer service', 'abc@abc.com', '1231', 'Order is not delivered');
        expect(ContactUsPage.successMessage()).to.be.equal('Your message has been successfully sent to our team.');
    });
});