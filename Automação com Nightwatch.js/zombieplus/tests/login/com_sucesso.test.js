module.exports = {
    '@disabled': true,
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
    }
}