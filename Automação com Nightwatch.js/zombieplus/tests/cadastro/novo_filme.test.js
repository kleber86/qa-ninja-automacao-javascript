
let movieData = {}

module.exports = {
    /**
     * No curso foi orientado a utilização do before, porém ao rodar os testes
     * apresentavam problemas.
     */
    beforeEach: function(browser) {
        movieData = {
            title: 'Resident Evil',
            status: 'Disponível',
            year: 2002,
            releaseDate: '01/02/2002',
            cast: ['Milla Jovovick', 'Ali Larter', 'Iam Glen', 'Shawn Roberts'],
            cover: 'resident-evil-2001.jpg',
            plot: 'Um terrível vírus é criminosamente solto nas dependências da Umbrella Corporation, a mais poderosa empresa do mundo, que secretamente desenvolve pesquisas biológicas. Infectados, seus funcionários são transformados em zumbis, e Alice é chamada para averiguar os acontecimentos.'
        }
        let login = browser.page.login()
        let sidebar = browser.page.sidebar()

        login.com('zumbi@dospalmares.com.br', 'pwd123')
        sidebar.esperaUsuarioLogado('Quilombo')
    },

    'quando eu faço o cadastro do filme': function(browser) {
        let movie = browser.page.movie()

        movie
            .click('@addButton')
            .waitForElementVisible('@movieForm', 3000)
            .setValue('@titleInput', movieData.title)
            .pause(5000)
    }
}