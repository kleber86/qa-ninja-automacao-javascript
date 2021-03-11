let createActions = {
    createForm: function () {
        return this
            .click('@addButton')
            .waitForElementVisible('@movieForm', 3000)
    },
    selectStatus: function (status) {
        return this
            .click('@statusSelect')
            .useXpath() // Habilita a utilização do xpath
            .waitForElementVisible(`//li//span[contains(text(),"${status}")]`, 2000)
            .click(`//li//span[contains(text(),"${status}")]`)
            .useCss() // Habilita a utilização do CSS Selector
    }
}

module.exports = {
    commands: [createActions],
    elements: {
        addButton: '.movie-add',
        movieForm: '#movie-form',
        titleInput: 'input[name=title]',
        statusSelect: 'input[placeholder=Status]',
        yearInput: 'input[name=year]',
        dateInput: 'input[name=releaseDate]',
        castInput: '.cast',
        plotInput: 'textarea[name=overview]',
        createButton: '#create-movie'
    }
}