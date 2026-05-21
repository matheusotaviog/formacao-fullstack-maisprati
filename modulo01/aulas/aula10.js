
// let livro = {
//     titulo: "A Montanha Mágina",
//     autor: "Thomas Mann",
//     tema: "Clássico"
// }

// for (const chave in livro) {
//     console.log(livro)
//     console.log(chave)
// }
//==========================================================================================

// let livros = [
//     { titulo: 'O Hobbit', autor: 'J. R. R. Tolkien' },
//     { titulo: '1984', autor: 'George Orwell' },
//     { titulo: 'Pequeno Príncipe', autor: 'Saint Exuperie' },
//     { titulo: 'Nárnia', autor: 'C. S. Lewis' },
//     { titulo: 'Drácula', autor: 'Bram Stoker' },
// ]

// for(const { titulo, autor } of livros) {
//     console.log(titulo, autor)
// }

// for(const i of livros) {
//     console.log(i.autor)
// }

// for(const i in livros) {
//     console.log(i)
// }

//==========================================================================================

// const notas = [9, 4.5, 2, 6.9, 10]

// notas.forEach((valor, indice, array) => {
//     console.log(valor, indice, array)
// })

//==========================================================================================

// let carro = {
//     marca: 'Fiat',
//     ano: '2019',
//     cor: 'Vermelho',
//     kmsRodados: 23900
// }

// for(const chave in carro) {
//     console.log(chave + ': ' + carro[chave])
// }

//==========================================================================================

// let cidades = ['Orlândia', 'São Paulo', 'Guarulhos', 'Salvador']

// for (const cidade of cidades) {
//     if (cidade[0] === 'S') console.log(cidade)
// }

//==========================================================================================

// let numeros = [9, 4.5, 2, 6.9, 10, 93.2, 23]
// let soma = 0

// numeros.forEach((valor) => {
//     soma += valor
// })

// console.log(soma)

//==========================================================================================

// const turma = [
//   { nome: 'Alice',   nota: 9.0 },
//   { nome: 'Bruno',   nota: 5.5 },
//   { nome: 'Carla',   nota: 7.0 },
//   { nome: 'Daniel',  nota: 3.8 },
//   { nome: 'Elisa',   nota: 8.2 },
// ]

// let aprovados = []
// let reprovados = []
// let media = 0

// for(const i in turma) {
//     aluno = turma[i]

//     media += aluno.nota
//     if(aluno.nota < 6) reprovados.push(aluno.nome)
//     if(aluno.nota >= 6) aprovados.push(aluno.nome)
// }

// console.log('Média: ', media)
// console.log('Aprovados: ', aprovados)
// console.log('Reprovados:', reprovados)

//==========================================================================================

const turma = [
  { nome: 'Alice',   nota: 9.0 },
  { nome: 'Bruno',   nota: 5.5 },
  { nome: 'Carla',   nota: 7.0 },
  { nome: 'Daniel',  nota: 3.8 },
  { nome: 'Elisa',   nota: 8.2 },
]

let aprovados = []
let reprovados = []
let soma = 0

turma.forEach(({nome, nota}) => {
    soma += nota
    if(nota < 6) reprovados.push(nome)
    if(nota >= 6) aprovados.push(nome) 
})

let media = soma / turma.length

console.log('Média: ', media)
console.log('Aprovados: ', aprovados)
console.log('Reprovados:', reprovados)
