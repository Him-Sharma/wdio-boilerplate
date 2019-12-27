import HomePage from '../../../page/home.page';
import SearchResultsPage from '../../../page/searchResults.page';

describe('Customer', () => {
    it('should be able to search for items', () => {
        HomePage.open().searchFor('dress');
        expect(SearchResultsPage.productCount).to.have.string('7');
    });
});