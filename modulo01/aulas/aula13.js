
/*
Tirando dúvidas, exercício 10, lista_exercicios01
*/

/*Estudo implementação linked list*/

    /*Node*/
class No {

    constructor(valor, proximo) {
        this.valor = valor
        this.proximo = proximo
    }
    
}

     /*LinkedList*/
class ListaVinculada {

    constructor(comeco, tamanho) {
        this.comeco = comecoo
        this.tamanho = tamanho
    }

    inserirPrimeiro(valor) {
        let no = new No(valor)
        no.proximoNo = this.cabeca
        this.cabeca = no

        this.tamanho++
    }

    inserirFinal(valor) {
        let no = new No(valor)

        if (this.cabeca === null)  this.cabeca = no

        let buscar = this.cabeca
        while(buscar.proximoNo) {
            buscar = buscar.proximoNo
        }

        let penultimo = buscar
        penultimo.proximoNo = no

        this.tamanho++
    }

}