import HomePage from '../../../page/home.page';

describe('Visual regression', () => {
    it('should pass for home page', () => {
        HomePage.open();
        assert.equal(browser.checkScreen('HomePage', {}), 0);     
    });
    it('should pass for search results page', () => {
        HomePage.open().searchFor('dress');
        assert.equal(browser.checkScreen('SearchResultsPage', {}), 0);
    });
});