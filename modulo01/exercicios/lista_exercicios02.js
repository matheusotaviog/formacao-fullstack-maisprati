
/*------------------------------------------------------------------------------------------------------------
1. Peça ao usuário um número e exiba sua tabuada completa (de 1 a 10) usando um laço for. Em seguida, pergunte se ele deseja ver outra tabuada e repita enquanto a resposta for "sim".
*/

const prompt = require('prompt-sync')()

let calcular
let numero

do {

    calcular = Number(prompt('Deseja exibir uma tabuada completa (de 1 a 10)? [ 1 - Sim / 0 - Não]: '))

    if(calcular === 1) {

        numero = Number(prompt('Entre com um número: '))

        for (let i = 1; i <= 10; i++) {
            console.log(`${numero} x ${i} = ${i*numero}`)
        }

    }

} while (calcular === 1)


/*------------------------------------------------------------------------------------------------------------
2. Leia um número inteiro positivo e, usando um laço while, calcule e exiba quantos dígitos ele possui. Trate o caso do número zero (que possui 1 dígito).
*/

const prompt = require('prompt-sync')()

let numero = Number(prompt('Informe um número inteiro, para saber quantos dígitos ele possui: '))

if(!(isNaN(numero) || numero <= 0)) {

    let conversao = numero.toString().replace('.','').replace(',','')
    console.log(`\nA quantidade de dígitos do número ${numero} é: ${conversao.length}`)

}

/*------------------------------------------------------------------------------------------------------------
3. Peça ao usuário quantos termos da sequência de Fibonacci deseja ver e exiba-os usando um laço for. Exemplo: 1, 1, 2, 3, 5, 8, 13...
*/

const prompt = require('prompt-sync')()

let qtdTermos = Number(prompt('Quantos termos da sequência de Fibonacci deseja ver? '))

if(!(isNaN(qtdTermos) || qtdTermos <= 0)) {

    let proximo = 0
    let anterior = 1
    let fibonacci = []

    for(let i = 0; i < qtdTermos; i++) {
        proximo += anterior
        anterior = proximo - anterior
        fibonacci.push(proximo)
    }

    console.log(fibonacci)

}

/*------------------------------------------------------------------------------------------------------------
4. Defina uma senha fixa no código. Peça ao usuário que a digite e, usando um laço do...while, permita no máximo 3 tentativas. Exiba se ele acertou ou se esgotou as tentativas.
*/

const prompt = require('prompt-sync')()

const SENHA_FIXA = 'MatheusDev'
const MAXIMO_TENTATIVAS = 3

let tentativaAtual = 0
let senhaCorreta = false

while(tentativaAtual < MAXIMO_TENTATIVAS && senhaCorreta === false) {

    let senhaTentativa = prompt(`Informe sua senha (tentativa ${tentativaAtual+1} de ${MAXIMO_TENTATIVAS}): `)
    tentativaAtual++

    if (senhaTentativa === SENHA_FIXA) senhaCorreta = true

    if (tentativaAtual == MAXIMO_TENTATIVAS && senhaCorreta === false) {
        
        let tentarNovamente = prompt('Tentativas finalizadas. Deseja tentar novamente? "S" ou "N": ')
        if(tentarNovamente === "S") tentativaAtual = 0

    }
}

if (senhaCorreta) {
    console.log('\nUsuário Desbloqueado.')
} else {
    console.log('\nUsuário Bloqueado.')
}

/*------------------------------------------------------------------------------------------------------------
5. Leia um número N e exiba todos os números primos entre 2 e N usando laços aninhados (for dentro de for). Exiba também a quantidade total de primos encontrados.
*/

const PROMPT = require('prompt-sync')()

let numero = Number(PROMPT('Informe um número e veja todo número primo entre 2 e ele mesmo: '))

let primos = []

for (let i = 2; i <= numero; i++) {

    let ehPrimo = true
    for (let j = 2; j < i; j++) {

        if(i % j === 0) ehPrimo = false /* Acredito que colocar um break aqui tornaria mais rápido, porém ainda não foi utilizado em aula. */

    }

    if (ehPrimo) primos.push(i)
}

console.log('Total Números Primos:', primos.length)
console.log('Listagem Números Primos: ',primos)


/*------------------------------------------------------------------------------------------------------------
6. Crie um array e leia via laço o nome e a nota de 5 alunos. Ao final, exiba: a média da turma, o nome do aluno com maior nota e o nome do aluno com menor nota. Não use funções prontas como Math.max().
*/

const PROMPT = require('prompt-sync')()

let count = 0
let maiorNota = 0
let menorNota = 10
let somaNotas = 0
let nomeMaiorNota = ''
let nomeMenorNota = ''

let alunos = []
let notas = []

while(count < 5) {
    
    let nome = PROMPT(`\nInforme o nome do aluno ${count+1}: `)
    let nota = Number(PROMPT(`Informe a nota do aluno ${count+1} (de 0 a 10): `))

    if (!isNaN(nota) && nota >= 0 && nota <= 10) {
        alunos.push(nome)
        notas.push(nota)
        somaNotas += nota

        if (nota > maiorNota) {
            maiorNota = nota
            nomeMaiorNota = nome
        }

        if (nota < menorNota) {
            menorNota = nota
            nomeMenorNota = nome
        }
    } else {
        console.log('Nota inválida. Por favor, informe uma nota entre 0 e 10.')
    }

    count++
}

console.log('Média da turma:', (somaNotas/alunos.length).toFixed(1))
console.log('Aluno com maior nota:', nomeMaiorNota, '- Nota:', maiorNota)
console.log('Aluno com menor nota:', nomeMenorNota, '- Nota:', menorNota)

/*------------------------------------------------------------------------------------------------------------
7. Simule um carrinho de compras: leia nomes e preços de produtos em um laço até o usuário digitar "sair". Armazene em arrays. Ao final, liste todos os itens, exiba o subtotal, aplique 10% de desconto se houver mais de 3 itens e mostre o total a pagar.
*/

const PROMPT = require('prompt-sync')()

let produtos = []
let precos = []
let subtotal = 0

while (true) {
    let nomeProduto = PROMPT('Informe o nome do produto (ou "sair" para finalizar): ')
    if (nomeProduto.toLowerCase() === 'sair') break //break para sair do whiles

    let precoProduto = Number(PROMPT('Informe o preço do produto: '))
    if (!isNaN(precoProduto) && precoProduto >= 0) {
        produtos.push(nomeProduto)
        precos.push(precoProduto)
        subtotal += precoProduto
    } else {
        console.log('Preço inválido. Por favor, informe um valor (preço) positivo.')
    }
}

console.log('\nItens no carrinho:')
for (let i = 0; i < produtos.length; i++) {
    console.log(`${produtos[i]} - R$ ${precos[i].toFixed(2)}`)
}

console.log('\nSubtotal: R$', subtotal.toFixed(2))

let desconto = 0
if (produtos.length > 3) {
    desconto = subtotal * 0.10
    console.log('Desconto aplicado: R$', desconto.toFixed(2))
}

let total = subtotal - desconto
console.log('Total a pagar: R$', total.toFixed(2))

/*------------------------------------------------------------------------------------------------------------
8. Leia uma palavra, armazene seus caracteres em um array e, percorrendo-o de trás para frente com um laço for, monte a palavra invertida. Exiba a palavra original, a invertida e informe se ela é um palíndromo.
*/

const PROMPT = require('prompt-sync')()

let palavra = PROMPT('Informe uma palavra: ')

let palavraArray = []

for (let i = 0; i < palavra.length; i++) {
    palavraArray.push(palavra[i])
}

let palavraArrayInvertida = []

for (let i = palavraArray.length-1; i >= 0; i--) {
    palavraArrayInvertida.push(palavraArray[i])
}

let palindromo = true

for (let i = 0; i < palavraArray.length; i++) {
    if (palavraArray[i].toString().toUpperCase() != palavraArrayInvertida[i].toString().toUpperCase()) palindromo = false
}

if (palindromo) console.log('\n É um Palíndromo!!!!')
/* Pesquisado forma de transformar arrey de strings em caracteres, encontrado o .join("") */
console.log('Original:',palavraArray.join(""))
console.log('Invertida:',palavraArrayInvertida.join(""))

/*------------------------------------------------------------------------------------------------------------
9. Sorteie um número entre 1 e 100 com Math.random(). Usando um laço do...while, peça ao usuário para adivinhar; a cada tentativa, diga se o número é maior ou menor. Registre as tentativas em um array e, ao acertar, exiba o histórico e quantas tentativas foram necessárias.
*/

const PROMPT = require('prompt-sync')()

const NUMERO_ALEATORIO = Math.floor(Math.random() * 100)
console.log(NUMERO_ALEATORIO)

let tentativa
let historicoTentativas = []

console.log('Adivinhe o número entre 1 e 100')
do {

    tentativa = Number(PROMPT('Sua tentativa: '))
    if (!isNaN(tentativa)) historicoTentativas.push(tentativa)

    if (NUMERO_ALEATORIO > tentativa) console.log('Número sorteado é MAIOR que a tentativa')
    if (NUMERO_ALEATORIO < tentativa) console.log('Número sorteado é MENOR que a tentativa')
    
} while (NUMERO_ALEATORIO !== tentativa)

console.log('O número sorteado foi:', NUMERO_ALEATORIO)
console.log('Suas tentativas: ', historicoTentativas)
console.log('Número de tentativas: ', historicoTentativas.length)

/*------------------------------------------------------------------------------------------------------------
10. Crie uma matriz 3×4 (3 alunos, 4 notas cada). Leia os valores via laços aninhados. Calcule e exiba a média de cada aluno, a média geral da turma e qual aluno teve o melhor desempenho.
*/

const PROMPT = require('prompt-sync')()

let matriz = []

let somaNotasTurma = 0
let melhorDesempenho = 0
let nomeMelhorDesempenho = ''

for (let i = 0; i < 3; i++) { //ALUNO
    let notasAluno = []
    let somaNotasAluno = 0

    let nomeAluno = PROMPT(`Informe o nome do aluno ${i+1}: `)

    for (let j = 0; j < 4; j++) { //NOTAS ALUNO
        let nota = Number(PROMPT(`Informe a nota ${j+1} do aluno ${nomeAluno}: `))
        if (!isNaN(nota) && nota >= 0 && nota <= 10) {
            notasAluno.push(nota)
            somaNotasAluno += nota
        }
    }

    matriz.push(notasAluno)
    somaNotasTurma += somaNotasAluno

    let mediaAluno = somaNotasAluno / notasAluno.length
    if (mediaAluno > melhorDesempenho) {
        melhorDesempenho = mediaAluno
        nomeMelhorDesempenho = nomeAluno
    }

    console.log(`Média do aluno ${nomeAluno}: ${mediaAluno.toFixed(2)}`)
}

let mediaGeralTurma = somaNotasTurma / (matriz.length * 4) //Considera 4 notas por aluno
console.log(`Média geral da turma: ${mediaGeralTurma.toFixed(2)}`)
console.log(`Melhor desempenho: ${nomeMelhorDesempenho} com média ${melhorDesempenho.toFixed(2)}`)
