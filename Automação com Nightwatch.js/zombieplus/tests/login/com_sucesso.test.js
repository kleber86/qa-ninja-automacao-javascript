module.exports = {
    //'@disabled': true,
    'login com sucesso refatorado': (browser) => {
        
        let login = browser.page.login()
        let sidebar = browser.page.sidebar()

        login
            .navigate()
            .resizeWindow('1300', '700')
            .waitForElementVisible('@form', 3000)
            .setValue('@emailInput', 'zumbi@dospalmares.com.br')
            .setValue('@passInput', 'pwd123')
            .click('@loginButton')

        sidebar
            .waitForElementVisible('@userInfo', 3000)
            .assert.containsText('@userInfo', 'Quilombo')
            .end();
    }
}