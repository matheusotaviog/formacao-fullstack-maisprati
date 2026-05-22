/*
1. Escreva um programa que pergunte a nota de um aluno (de 0 a 10). Exiba se o aluno foi Aprovado (nota maior ou igual a 7), em Recuperação (nota entre 5 e 6.9) ou Reprovado (nota menor que 5).
*/

const prompt = require('prompt-sync')()

let nota = Number(prompt('Informe a nota do aluno (0 a 10): '))

if (isNaN(nota) || nota === undefined || nota === null || nota < 0)
    console.log('Não foi informado uma nota de 0 a 10.')

if (nota >= 7) {
    console.log('Aluno aprovado!')
} else if (nota >= 5 && nota <= 6.9) {
    console.log('Aluno de recuperação.')
} else {
    console.log('Aluno reprovado...')
}

/*
2. Crie um programa que pergunte o ano de nascimento de uma pessoa e calcule sua idade. Com base na idade, exiba se ela é criança (até 12 anos), adolescente (de 13 a 17 anos), adulta (de 18 a 59 anos) ou idosa (60 anos ou mais).
*/

const prompt = require('prompt-sync')()

let anoNascimento = Number(prompt('Informe um ano de nascimento: '))
const ANO_ATUAL = 2026

if (isNaN(anoNascimento) || anoNascimento === undefined || anoNascimento === null || anoNascimento < 0 || anoNascimento > ANO_ATUAL)
    console.log('Não foi informado um ano de nascimento válido.')

let idade = ANO_ATUAL - anoNascimento
console.log(idade)
if (idade <= 12) {
    console.log('Criança')
} else if (idade >= 13 && idade <= 17) {
    console.log('Adolescente')
} else if (idade >= 18 && idade <= 59) {
    console.log('Adulta')
} else if (idade > 59) {
    console.log('Idosa')
}

/*
3. Escreva um programa que pergunte o salário mensal de um funcionário e o percentual de aumento concedido pela empresa. Caso o salário seja menor que R$ 1.500,00, o percentual de aumento deve ser dobrado automaticamente. Exiba o novo salário do funcionário.
*/

const prompt = require('prompt-sync')()

let salarioMensal = Number(prompt('Salário mensal: '))
let percentualAumento = Number(prompt('Percentual aumento salário: '))
let calculoPermitido = true

if (isNaN(salarioMensal) || salarioMensal === undefined || salarioMensal === null || salarioMensal < 0) {
    console.log('Salário fornecido não esta de acordo.')
    calculoPermitido = false
}

if (isNaN(percentualAumento) || percentualAumento === undefined || percentualAumento === null || percentualAumento < 0) {
    console.log('Percentual fornecido não esta de acordo.')
    calculoPermitido = false
}

if (calculoPermitido) {
    //Remove de percentual
    if (salarioMensal < 1500) percentualAumento *= 2
    let multiplicadorAumento = percentualAumento / 100 + 1
    
    let novoSalario = salarioMensal * multiplicadorAumento
    console.log(`Novo salário: R$${novoSalario.toFixed(2)}`)
}

/*
4. Crie um programa que leia três números inteiros e exiba o maior deles, sem utilizar funções prontas como Math.max().
*/

const prompt = require('prompt-sync')()

let numeros = []

let n1 = Number(prompt('Informe o primeiro número: '))
let maiorNumero = n1

let n2 = Number(prompt('Informe o segundo número: '))
if (n2 > maiorNumero) maiorNumero = n2

let n3 = Number(prompt('Informe o terceiro número: '))
if (n3 > maiorNumero) maiorNumero = n3

console.log('Números informados: ', n1, n2, n3)
console.log('Maior número: ', maiorNumero)

/*
5. Uma loja oferece desconto progressivo conforme o valor da compra. Faça um programa que leia o valor total de uma compra e aplique as seguintes regras: compras abaixo de R$ 100,00 não têm desconto; compras entre R$ 100,00 e R$ 299,99 recebem 10% de desconto; compras entre R$ 300,00 e R$ 499,99 recebem 15% de desconto; compras acima de R$ 500,00 recebem 20% de desconto. Exiba o valor original, o desconto aplicado e o valor final a pagar.
*/

const prompt = require('prompt-sync')()

let valorCompra = Number(prompt('Informe o valor da compra: '))

if (isNaN(valorCompra) || valorCompra === undefined || valorCompra === null || valorCompra < 0)
    console.log('Valor da compra não é válido.')

let desconto = 0

if(valorCompra >= 100 && valorCompra <= 299.99) {
    desconto = 0.1
} else if (valorCompra >= 300 && valorCompra <= 499.99) {
    desconto = .15
} else if (valorCompra >= 500) {
    desconto = 0.2
}

let percentualDesconto = desconto * 100
let valorFinalPagar = valorCompra  - (valorCompra * desconto)

console.log(`\nValor compra: R$${valorCompra.toFixed(2)}`)
console.log(`Percentual desconto: ${percentualDesconto}%`)
console.log(`Valor final a pagar: R$${valorFinalPagar.toFixed(2)}`)

/*
6. Crie um programa de caixa eletrônico simplificado. O usuário informa o valor que deseja sacar (múltiplo de 10). O programa deve calcular e exibir a menor quantidade possível de cédulas de R$ 100, R$ 50, R$ 20 e R$ 10 necessárias para compor o saque.
*/

const prompt = require('prompt-sync')()

let valorSacar = Number(prompt('Informe o valor a sacar: '))
let permiteSaque = true

if (isNaN(valorSacar) || valorSacar === undefined || valorSacar === null || valorSacar < 0) {
    console.log('Valor de saque informado não esta de acordo.')
    permiteSaque = false
}

if (valorSacar % 10 != 0) {
    console.log('Valor a sacar deve ser múltiplo de 10.')
    permiteSaque = false
}

if (permiteSaque) {
    let restante = valorSacar
    let notasCem = 0
    let notasCinquenta = 0
    let notasVinte = 0
    let notasDez = 0

    notasCem = Math.floor(restante / 100)
    restante %= 100

    notasCinquenta = Math.floor(restante / 50)
    restante %= 50

    notasVinte = Math.floor(restante / 20)
    restante %= 20

    notasDez = Math.floor(restante / 10)
    restante %= 10

    console.log(`\nValor a sacar: R$${valorSacar.toFixed(2)}`)
    console.log('Notas cem: ', notasCem)
    console.log('Notas cinquenta: ', notasCinquenta)
    console.log('Notas vinte: ', notasVinte)
    console.log('Notas dez: ', notasDez)
}

/*
7. Faça um programa que funcione como uma calculadora básica. Leia dois números e uma operação desejada (+, -, *, /). Usando switch case, realize a operação correspondente e exiba o resultado. Trate o caso de divisão por zero e de operação inválida.
*/

const prompt = require('prompt-sync')()

let n1 = Number(prompt('Primeiro número: '))
let n2 = Number(prompt('Segundo número: '))
let permiteCalcular = true

if (isNaN(n1) || n1 === undefined || n1 === null) {
    console.log('Primeiro número não esta de acordo.')
    permiteCalcular = false
}

if (isNaN(n2) || n2 === undefined || n2 === null) {
    console.log('Segundo número não esta de acordo.')
    permiteCalcular = false
}

if (permiteCalcular) {

    console.log('1. Adição  | ', '2. Subtração  | ', '3. Divisão  | ', '4. Multiplicação  ')

    let opcao = Number(prompt('Informe a opção: '))

    switch (opcao) {
        case 1:
            console.log(`${n1} + ${n2} = ${n1 + n2}`)
            break
        case 2:
            console.log(`${n1} - ${n2} = ${n1 - n2}`)
            break
        case 3:
            console.log(`${n1} / ${n2} = ${n1 / n2}`)
            break
        case 4:
            console.log(`${n1} x ${n2} = ${n1 * n2}`)
            break
        default:
            console.log('Opção inexistente.')
    }

}

/*
8. Uma pizzaria cobra por tamanho e tipo de borda. Faça um programa que leia o tamanho da pizza (P, M ou G) e o tipo de borda (tradicional ou recheada) usando switch case. Os preços base são: P = R$ 25,00, M = R$ 35,00, G = R$ 45,00. A borda recheada acrescenta R$ 8,00 em qualquer tamanho. Exiba o valor total do pedido.
*/

const prompt = require('prompt-sync')()

let tamanhoPizza = Number(prompt('Informe o tamanho da pizza (1 - P, 2 - M, 3 - G): '))
let tipoBorda = Number(prompt('Tipo da borda ( 1- tradicional ou 2 - recheada): '))
let permiteContinuar = true

if (isNaN(tamanhoPizza) || tamanhoPizza === undefined || tamanhoPizza === null) {
    console.log('Opção de tamanho de pizza não de acordo.')
    permiteContinuar = true
}

if (isNaN(tipoBorda) || tipoBorda === undefined || tipoBorda === null) {
    console.log('Opção de tipo de borda não de acordo.')
    permiteContinuar = true
}

if(permiteContinuar) {

    let precoTamanhoPizza = 0
    let precoTipoBorda = 0
    
    switch (tamanhoPizza) {
        case 1:
            precoTamanhoPizza = 25
            break
        case 2:
            precoTamanhoPizza = 35
            break
        case 3:
            precoTamanhoPizza = 45
            break
        default:
            console.log('Tamanho da pizza não fornecido.')
    }

    switch (tipoBorda) {
        case 1:
            precoTipoBorda = 0
            break
        case 2:
            precoTipoBorda = 8
            break
        default:
            console.log('Tipo da borda da pizza não fornecido.')
    }

    let valorTotal = precoTamanhoPizza + precoTipoBorda
    console.log(`Valor total pedido: R$${valorTotal.toFixed(2)}`)
}

/*
9. Crie um programa que leia o número do mês (1 a 12) e, usando switch case, exiba o nome do mês correspondente e quantos dias ele possui. Para fevereiro, pergunte ao usuário se o ano é bissexto e ajuste a quantidade de dias para 29 caso seja.
*/

const prompt = require('prompt-sync')()

let numMes = Number(prompt('Informe o número correspondente ao mês, para saber o número de dias (1 a 12): '))

let anoBissexto = Number(prompt('Ano bissexto? (1 - Sim, 2 - Não): '))

let permiteContinuar = true

if (isNaN(numMes) || numMes === undefined || numMes === null) {
    console.log('Número do mês não esta de acordo.')
    permiteContinuar = false
}

if (isNaN(anoBissexto) || anoBissexto === undefined || anoBissexto === null) {
    console.log('Ano bissexto não fornecido corretamente.')
    permiteContinuar = false
}

let boolAnoBissexto = anoBissexto == 1 ? true : false

if(permiteContinuar) {

    switch(numMes) {
        case 1:
            console.log('Janeiro, 31 dias.')
            break
        case 2:
            console.log(`Fevereiro, ${boolAnoBissexto ? '29 dias (bissexto)' : '28 dias'}`)
            break
        case 3:
            console.log('Março, 31 dias.')
            break
        case 4:
            console.log('Abril, 30 dias.')
            break
        case 5:
            console.log('Maio, 31 dias.')
            break
        case 6:
            console.log('Junho, 30 dias.')
            break
        case 7:
            console.log('Julho, 31 dias.')
            break
        case 8:
            console.log('Agosto, 31 dias.')
            break
        case 9:
            console.log('Setembro, 30 dias.')
            break
        case 10:
            console.log('Outubro, 31 dias.')
            break
        case 11:
            console.log('Novembro, 30 dias.')
            break
        case 12:
            console.log('Dezembro, 31 dias.')
            break
        default:
            console.log('Mês não informado corretamente.')
    }
}

/*
10. Um estacionamento cobra por faixas de tempo. Faça um programa que leia quantas horas um veículo ficou estacionado e, usando switch case com intervalos, calcule o valor a pagar conforme a tabela: 1ª hora = R$ 8,00; 2ª hora = R$ 6,00; 3ª hora = R$ 4,00; acima de 3 horas = R$ 4,00 pelas primeiras 3 horas mais R$ 2,00 por hora adicional. Exiba o tempo total e o valor cobrado
*/

const prompt = require('prompt-sync')()

let horasEstacionado = Number(prompt('Informe quantas horas ficou estacionado: '))
let permiteCalcular = true

if (isNaN(horasEstacionado) || horasEstacionado === undefined || horasEstacionado === null || horasEstacionado < 0) {
    console.log('Tempo de estacionamento fornecido não está de acordo.')
    permiteCalcular = false
}

if (permiteCalcular) {
    let horasArredondadas = Math.ceil(horasEstacionado)
    let valorTotal = 0

    switch (horasArredondadas) {
        case 0:
            valorTotal = 0
            break
        case 1:
            valorTotal = 8
            break
        case 2:
            valorTotal = 8 + 6
            break
        case 3:
            valorTotal = 8 + 6 + 4
            break
        default:
            let horasAdicionais = horasArredondadas - 3
            valorTotal = 18.00 + (horasAdicionais * 2.00)
    }

    console.log(`\nTempo total: ${horasEstacionado}h`)
    console.log(`Valor cobrado: R$${valorTotal.toFixed(2)}`)
}