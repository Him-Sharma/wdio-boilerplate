import HomePage from '../../../src/page/home.page';

describe('Performance metrics should be below benchmark', () => {
  beforeEach(() => {
    browser.enablePerformanceAudits({
      networkThrottling: 'online'
    });
  });
  it.skip('for home page', () => {
    HomePage.open();
    expect(browser.browser.getMetrics().speedIndex).to.be.below(0.99);
  });
  afterEach(() => {
    browser.disablePerformanceAudits();
  });
});
