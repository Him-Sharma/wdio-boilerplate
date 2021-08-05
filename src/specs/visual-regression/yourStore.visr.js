import HomePage from '../../page/home.page';
import SearchResultsPage from '../../page/searchResults.page';

describe('Visual regression', () => {
  it('should pass for home page', () => {
    HomePage.open();
    expect(browser.compare('HomePage', {})).toBe(0);
  });
  it('should pass for search results page', () => {
    HomePage.searchFor('dress');
    SearchResultsPage.productCountLabel.waitForDisplayed();
    expect(browser.compare('SearchResultsPage', {})).toBe(0);
  });
});
