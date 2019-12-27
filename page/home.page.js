import Page from './page';
import SearchResultsPage from './searchResults.page';

const SELECTORS = {
    SEARCH_INPUT: '#search_query_top',
    SEARCH_BUTTON: '#searchbox > button'
}
class HomePage extends Page {

    open(){
        super.open();
        return this;
    }
    get searchInput() {
        return $(SELECTORS.SEARCH_INPUT);
    }
    get searchButton(){
        return $(SELECTORS.SEARCH_BUTTON);
    }

    searchFor(searchText) {
        this.searchInput.setValue(searchText);
        this.searchButton.click();
        return SearchResultsPage;
    }
}

export default new HomePage();