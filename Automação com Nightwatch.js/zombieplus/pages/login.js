let loginActions = {
    com: function(email, senha){
        return this
            .navigate()
            .waitForElementVisible('@form', 3000)
            .setValue('@emailInput', email)
            .setValue('@passInput', senha)
            .click('@loginButton')
    }
}

module.exports = {
    url: 'http://zombie-web:5000/login',
    commands: [loginActions],
    elements: {
        form: '.card-login',
        emailInput: 'input[name=email]',
        passInput: 'input[name=password]',
        loginButton: '.login-button',
        alertInfo: '.alert-info',
        alertDanger: '.alert-danger'
    }
}