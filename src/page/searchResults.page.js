import Page from './page';

const SELECTORS = {
  PRODUCT_COUNT_LABEL: 'div.product-count'
};
class SearchResultsPage extends Page {
  get productCountLabel () {
    return $(SELECTORS.PRODUCT_COUNT_LABEL);
  }
}

export default new SearchResultsPage();
