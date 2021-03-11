module.exports = {
    beforeEach: (browser, done) => {
        browser.resizeWindow(1400, 900)
        done()
    },

    afterEach: (browser, done) => {
        browser.end()
        done()
    }
}