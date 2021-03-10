
let movieData = {}

module.exports = {
    'dado que eu tenho um novo filme': function(browser){
        movieData = {
            title: 'Resident Evil',
            status: 'Disponível',
            year: 2002,
            releaseDate: '01/02/2002',
            cast: ['Milla Jovovick', 'Ali Larter', 'Iam Glen', 'Shawn Roberts'],
            cover: 'resident-evil-2001.jpg',
            plot: 'Um terrível vírus é criminosamente solto nas dependências da Umbrella Corporation, a mais poderosa empresa do mundo, que secretamente desenvolve pesquisas biológicas. Infectados, seus funcionários são transformados em zumbis, e Alice é chamada para averiguar os acontecimentos.'
        }
    },
    'quando eu faço o cadastro do filme': function(browser) {
        console.log(movieData)
    }
}