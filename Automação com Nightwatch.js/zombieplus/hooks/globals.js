module.exports = {
    beforeEach: (browser, done) => {
        browser.resizeWindow(1300, 800)
        done()
    },

    beforeEach: (browser, done) => {
        browser.end()
        done()
    }
}