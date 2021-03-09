module.exports = {
    //'@disabled': true,
    'login com sucesso refatorado': (browser) => {
        
        let login = browser.page.login()
        let sidebar = browser.page.sidebar()

        login.com('zumbi@dospalmares.com.br', 'pwd123')

        sidebar
            .waitForElementVisible('@userInfo', 3000)
            .assert.containsText('@userInfo', 'Quilombo')
    }
}