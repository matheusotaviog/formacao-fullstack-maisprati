//=============================
// function soma(a, b) {
//     return a + b
// }

// let a = 10
// let b = 20

// let resulado = soma(a, b)
// console.log(resulado)

//=============================

//    EM JAVA SCRIPT, A REFERÊNCIA SÓ VEMOS EM OBJETOS.
// let usuario = { nome: 'Matheus' }

// function alterarNome(usuario) {
//     usuario.nome = 'Cecília'
// }

// console.log(usuario)

//=============================

let pistache = [10, 5, 39, 29, 11, 2]

function dadosArray(array = []) {

    let soma = 0;
    let media = 0;
    let maiorValor = array[0];
    let menorValor = array[0];

    for(let i = 0; i < array.length; i++) {
        soma += array[i]
        if(array[i] > maiorValor) maiorValor = array[i]
        if(array[i] < menorValor) menorValor = array[i]
    }

    media = soma / array.length

    return 'Soma: ' + soma + '; Media: ' + media + '; Maior Valor: ' + maiorValor + '; Menor Valor: ' + menorValor
}

console.log(dadosArray(pistache))