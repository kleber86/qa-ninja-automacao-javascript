module.exports = {
    'login com sucesso': (browser) => {
        browser
        .resizeWindow('1300', '700')
        .url('http://zombie-web:5000/login')
        .waitForElementVisible('.card-login', 3000)
        .setValue('input[name=email]', 'zumbi@dospalmares.com.br')
        .setValue('#passId', 'pwd123')
        .click('.login-button')

        .waitForElementVisible('.user .info span', 3000)
        .assert.containsText('.user .info span', 'Quilombo')
        .end();
    },

    'login com sucesso refatorado': (browser) => {
        let userInfo = '.user .info span'
        browser
        .resizeWindow('1300', '700')
        .url('http://zombie-web:5000/login')
        .waitForElementVisible('.card-login', 3000)
        .setValue('input[name=email]', 'zumbi@dospalmares.com.br')
        .setValue('#passId', 'pwd123')
        .click('.login-button')

        .waitForElementVisible(userInfo, 3000)
        .assert.containsText(userInfo, 'Quilombo')
        .end();
    },
    
    'dado que eu acesso a pagina de login': (browser) => {
        browser
        .resizeWindow('1900', '1080')
        .url('http://zombie-web:5000/login')
        .waitForElementVisible('.card-login', 3000)
    },

    'quando eu faço login com sucesso': (browser) => {
        browser
        .setValue('input[name=email]', 'zumbi@dospalmares.com.br')
        .setValue('input[name=password]', 'pwd123')
        .click('.login-button')
    },

    'então devo ver o meu nome na area logada': (browser) => {
        let userInfo = '.user .info span'

        browser
        .waitForElementVisible(userInfo, 3000)
        .assert.containsText(userInfo, 'Quilombo')
        .end();
    }
}