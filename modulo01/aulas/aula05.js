
// const prompt = require('prompt-sync')()

// let index = 0
// let num = Number(prompt('Informe seu número: '))

// while(index < 10) {
//     index++
//     console.log(num * index)
// }

const prompt = require('prompt-sync')()

let numero
let soma = 0

do {
    numero = Number(prompt('Informe um número: '))
    console.log(`Numero: ${numero}`)
    soma += numero
} while(numero != 0)

console.log('Sua soma:', soma)