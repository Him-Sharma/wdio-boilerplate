import HomePage from '../../page/home.page';

describe('Performance score should be below benchmark', () => {
  before(() => {
    browser.enablePerformanceAudits();
  });
  it('for home page', () => {
    HomePage.open();
    expect(browser.getPerformanceScore()).toBeLessThanOrEqual(0.99);
  });
  after(() => {
    browser.disablePerformanceAudits();
  });
});
