describe('Thoughtworks homepage', () => {
    it('should match baseline by hiding elements', () => {        
        browser.url('https://www.thoughtworks.com');
        var videoBanner = $('.new-video-banner');
        assert.equal(browser.checkScreen('Hide-ThoughtworksHomePage', {
            hideElements: [videoBanner]
        }), 0);
    });
    it('should match baseline by removing elements', () => {
        browser.url('https://www.thoughtworks.com');
        var videoBanner = $('.new-video-banner');
        assert.equal(browser.checkScreen('Remove-ThoughtworksHomePage', {
            removeElements: [videoBanner]
        }), 0);
    });   
});