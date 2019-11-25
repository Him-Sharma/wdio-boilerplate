describe('Image comparison', () => {
    it('should match fullscreen baseline with hidden elements', () => {
        browser.url('https://www.thoughtworks.com');
        var videoBanner = $('.new-video-banner');
        assert.equal(browser.checkFullPageScreen('Full-ThoughtworksHomePage', {
            hideElements: [videoBanner]
        }), 0);
    });
    it('should hide elements after first scroll for fullpage screen', () => {
        browser.url('https://webdriver.io/');
        var header = $('.fixedHeaderContainer');
        assert.equal(browser.checkFullPageScreen('Full-WebdriverioHomePage', {
            hideAfterFirstScroll: [header]
        }), 0);
    });
});