import HomePage from '../../../page/home.page';
import SearchResultsPage from '../../../page/searchResults.page';

describe('Visual regression', () => {
    it('should pass for home page', () => {
        HomePage.open();
        assert.equal(browser.checkScreen('HomePage', {}), 0);     
    });
    it('should pass for search results page', () => {
        HomePage.searchFor('dress');
        SearchResultsPage.productCountLabel.waitForDisplayed();
        assert.equal(browser.checkScreen('SearchResultsPage', {}), 0);
    });
});