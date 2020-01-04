import Page from './page';

const SELECTORS = {
  PRODUCT_COUNT_LABEL: 'div.product-count',
};
class SearchResultsPage extends Page {
  static get productCountLabel() {
    return $(SELECTORS.PRODUCT_COUNT_LABEL);
  }

  get productCount() {
    return this.productCountLabel.getText();
  }
}

export default new SearchResultsPage();
