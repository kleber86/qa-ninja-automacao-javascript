module.exports = {

    before: (browser) => {
        browser.resizeWindow(1600, 900)
    },

    after: (browser) => {
        browser.end();
    },

    'email não informado': (browser) => {
        let alertInfo = '.alert-info'
        browser
            .url('http://zombie-web:5000/login')
            .waitForElementVisible('.card-login')
            .setValue('#emailId', '')
            .setValue('#passId', 'pwd123')
            .click('.login-button')
            .assert.containsText(alertInfo, 'Opps. Cadê o email?')
    },
    'senha não informada': (browser) => {
        let alertInfo = '.alert-info'
        browser
            .url('http://zombie-web:5000/login')
            .waitForElementVisible('.card-login')
            .setValue('#emailId', 'zumbi@dospalmares.com.br')
            .setValue('#passId', '')
            .click('.login-button')
            .assert.containsText(alertInfo, 'Opps. Cadê a senha?')
    },
    'email invalido': (browser) => {
        let alertDanger = '.alert-danger'
        browser
            .url('http://zombie-web:5000/login')
            .waitForElementVisible('.card-login')
            .setValue('#emailId', '404@hotmail.com')
            .setValue('#passId', 'pwd123')
            .click('.login-button')
            .assert.containsText(alertDanger, 'Usuário e/ou senha inválidos')
    },
    'senha invalida': (browser) => {
        let alertDanger = '.alert-danger'
        browser
            .url('http://localhost:5000/login')
            .waitForElementVisible('.card-login')
            .setValue('#emailId', 'zumbi@dospalmares.com.br')
            .setValue('#passId', '123')
            .click('.login-button')
            .assert.containsText(alertDanger, 'Usuário e/ou senha inválidos')
    }
}