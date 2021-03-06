/**
 * Aula 01: Olá Javascript
 */
var welcome = 'Hello Javascript - Automação QA Ninja'
document.getElementById('welcome').append(welcome)
console.log(welcome)

/**
 * Aula 02: Variáveis
 * 
 */
var number = 10
console.log(number)

// typeof: Retorna o tipo da variável
var nome = 'Kleber'
console.log(typeof number)
console.log(typeof nome)

var numeroUm = 10
var numeroDois = 9
var soma = numeroUm + numeroDois
console.log(soma)

/**
 * Aula 03: Operadores
 */

// Aritimeticos
console.log('Adição: ' + 2 + 2)
console.log('Subtração: ' + 2 - 2)
console.log('Divisão: ' + 2 / 2)
console.log('Multiplicação: ' + 2 * 2)

// Comparação - Verdadeiros
console.log(2 == 2)
console.log(2 >= 2)
console.log(2 > 1)

// Comparação - Falsos
console.log(2 >= 3)
console.log(2 == 3)

/**
 * Aula 04: Controles de Fluxo
 */
if (true) {
    console.log('Condição verdadeira.')
}
if (false) {
    console.log('Condição falsa. Não aparece.')
}

var idade = prompt('Qual é a sua idade?')
if (idade >= 18) {
    console.log('Posso ir no show do Iron Maiden')
} else if (idade >= 12) {
    console.log('Vou ao show acompanhado.')
} else {
    console.log('Não foi ao show')
}

var ingresso = prompt('Qual seu ingresso')

switch (ingresso) {
    case 'vip':
        console.log('Irei ficar no camarote')
        break;
    case 'premium':
        console.log('Irei ficar na pista premium')
        break;
    case 'comum':
        console.log('Irei ficar na arquibancada')
        break;
    default:
        console.log('Ingresso invalido')
        break;
}

/**
 * Aula 05: Loops
 */

for (var a = 0; a <= 10; a++) {
    console.log(`a = ${a}`)
}

for (var b = 10; b >= 0; b--) {
    console.log(`b = ${b}`)
}

var valor = 0
while (valor < 10) {
    console.log(`valor = ${valor}`)
    valor++
}

var avengers = ['spiderman', 'Black Window']
avengers.forEach(function (value, key) {
    console.log(`${value} na posição: ${key}`)
})

/**
  * Aula 06: Arrays
*/

// Declarações
var avengers = new Array()
var avengers2 = ['Homem de Ferro', 'Feiticeira']
console.table(avengers2)
avengers2.push('Hulk')
console.table(avengers2)
avengers2.push('Thor')
console.table(avengers2)

// Removendo o ultimo registro
avengers2.pop()
console.table(avengers2)

// Removendo o primeiro registro
avengers2.shift()
console.table(avengers2)

// Removendo um registro especifico
var indice = avengers2.indexOf('Feiticeira')
avengers2.splice(indice)
console.table(avengers2)

/**
  * Aula 07: Funções
*/

function somar(n1, n2){
    console.log(n1 + n2)
}
somar(10,10)

function imprimirTexto(texto) {
    console.log(texto)
}
imprimirTexto('Kleber')

/**
  * Aula 08: Objeto
*/
var album = {
    title: 'Black',
    released: 1991,
    showInfo: function(){
        console.log(`Titulo do Album: ${this.title}, lançado em ${this.released}`)
    }
}
album.showInfo()
console.log(typeof album)
console.log(album.title)