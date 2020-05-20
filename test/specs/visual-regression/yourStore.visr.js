import HomePage from '../../../src/page/home.page';
import SearchResultsPage from '../../../src/page/searchResults.page';

describe('Visual regression', () => {
  it('should pass for home page', () => {
    HomePage.open();
    assert.equal(browser.compare('HomePage', {}), 0);
  });
  it('should pass for search results page', () => {
    HomePage.searchFor('dress');
    SearchResultsPage.productCountLabel.waitForDisplayed();
    assert.equal(browser.compare('SearchResultsPage', {}), 0);
  });
});
