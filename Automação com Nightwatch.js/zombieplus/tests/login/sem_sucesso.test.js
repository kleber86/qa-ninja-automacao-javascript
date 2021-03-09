module.exports = {

    before: (browser) => {
        browser.resizeWindow(1600, 900)
    },

    after: (browser) => {
        browser.end();
    },
    //'@disabled': true,
    'email não informado': (browser) => {
        let login = browser.page.login()

        login
            .navigate()
            .waitForElementVisible('@form', 3000)
            .setValue('@emailInput', '')
            .setValue('@passInput', 'pwd123')
            .click('@loginButton')
            .assert.containsText('@alertInfo', 'Opps. Cadê o email?')
    },
    'senha não informada': (browser) => {
        let login = browser.page.login()

        login
            .navigate()
            .waitForElementVisible('@form', 3000)
            .setValue('@emailInput', 'zumbi@dospalmares.com.br')
            .setValue('@passInput', '')
            .click('@loginButton')
            .assert.containsText('@alertInfo', 'Opps. Cadê a senha?')
    },
    'email invalido': (browser) => {
        let login = browser.page.login()
        login
            .navigate()
            .waitForElementVisible('@form', 3000)
            .setValue('@emailInput', '404@hotmail.com')
            .setValue('@passInput', 'pwd123')
            .click('@loginButton')
            .assert.containsText('@alertDanger', 'Usuário e/ou senha inválidos')
    },
    'senha invalida': (browser) => {
        let login = browser.page.login()
        login
            .navigate()
            .waitForElementVisible('@form', 3000)
            .setValue('@emailInput', 'zumbi@dospalmares.com.br')
            .setValue('@passInput', '123')
            .click('@loginButton')
            .assert.containsText('@alertDanger', 'Usuário e/ou senha inválidos')
    }
}