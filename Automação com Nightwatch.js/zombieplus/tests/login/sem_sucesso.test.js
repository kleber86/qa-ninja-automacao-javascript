module.exports = {
    //'@disabled': true,
    'email não informado': (browser) => {
        let login = browser.page.login()

        login
            .com('', '123456')
            .mensagemInfo('Opps. Cadê o email?')
    },
    'senha não informada': (browser) => {
        let login = browser.page.login()

        login
            .com('zumbi@dospalmares.com.br', '')
            .mensagemInfo('Opps. Cadê a senha?')
    },
    'email invalido': (browser) => {
        let login = browser.page.login()

        login
            .com('404@hotmail.com', 'pwd123')
            .mensagemErro('Usuário e/ou senha inválidos')
    },
    'senha invalida': (browser) => {
        let login = browser.page.login()
        
        login
            .com('zumbi@dospalmares@com.br', '123456')
            .mensagemErro('Usuário e/ou senha inválidos')
    }
}