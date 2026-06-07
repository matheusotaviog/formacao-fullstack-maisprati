/*1. Crie um objeto representando um produto com as propriedades: nome, preço, categoria e quantidade em estoque. Use for...in para percorrer e exibir todas as propriedades e seus valores. Em seguida, adicione uma nova propriedade desconto ao objeto e exiba o preço final calculado.*/

// let produto = {
//     nome: 'Camiseta',
//     preco: 59.90,
//     categoria: 'Roupas',
//     estoque: 98
// }

// for (const chave in produto) {
//     console.log(chave + ': ' + produto[chave])
// }

// produto.desconto = 0.3 // 30% de desconto
// let precoFinalProduto = produto.preco * (1 - produto.desconto)
// console.log('Preço final com desconto: R$ ' + precoFinalProduto.toFixed(2))

/*2. Crie dois objetos representando personagens de um jogo, cada um com as propriedades: nome, vida, ataque e defesa. Use for...in para exibir os atributos de cada personagem lado a lado e determine qual deles tem maior poder total (soma de vida + ataque + defesa).*/

// class Personagem {
//     constructor(nome, vida, ataque, defesa) {
//         this.nome = nome
//         this.vida = vida
//         this.ataque = ataque
//         this.defesa = defesa
//     }

//     poderTotal() {
//         return this.vida + this.ataque + this.defesa
//     }
// }

// let personagem1 = new Personagem('Bardo', 200, 45, 45)
// let personagem2 = new Personagem('Mago', 150, 120, 30)

// for (const chave in personagem1) {
//     console.log(chave + ': ' + personagem1[chave] + ' | ' + personagem2[chave])
// }

// let poderPersonagem1 = personagem1.poderTotal()
// let poderPersonagem2 = personagem2.poderTotal()

// if (poderPersonagem1 > poderPersonagem2) {
//     console.log(personagem1.nome + ' tem maior poder total: ' + poderPersonagem1)
// } else if (poderPersonagem2 > poderPersonagem1) {
//     console.log(personagem2.nome + ' tem maior poder total: ' + poderPersonagem2)
// } else {
//     console.log('Ambos os personagens têm o mesmo poder total: ' + poderPersonagem1)
// }

/*3. Crie um objeto representando um funcionário com nome, cargo, salário e anos de experiência. Use for...in para listar todos os dados. Com base nos anos de experiência, calcule e exiba o bônus anual: até 2 anos = 5% do salário, de 3 a 5 anos = 10%, acima de 5 anos = 15%.*/

// class Funcionario {
//     constructor(nome, cargo, salario, anosExperiencia) {
//         this.nome = nome
//         this.cargo = cargo
//         this.salario = salario
//         this.anosExperiencia = anosExperiencia
//     }

//     calculaBonusAnual() {
//         let percentualBonus = 0.05 // ATÉ DOIS ANOS. ENTÃO DURANTE OS DOIS PRIMEIROS ANOS (DE 0 A 2 ANOS E 11 MESES), GANHA 5%
//         if (this.anosExperiencia > 5) percentualBonus = 0.15
//         if (this.anosExperiencia >= 3 && this.anosExperiencia < 5) percentualBonus = 0.10

//         return this.salario * percentualBonus
//     }
// }

// let funcionario1 = new Funcionario('Matheus', 'SWE', '20000', 3)

// for (const chave in funcionario1) {
//     console.log(chave + ': ' + funcionario1[chave])
// }

// console.log('Bonus Anual: R$' + funcionario1.calculaBonusAnual().toFixed(2))

/*4. Crie um objeto onde cada chave é o nome de um item e o valor é a quantidade no inventário do jogador (ex: { espada: 1, poção: 5, escudo: 2 }). Use for...in para listar o inventário completo. Permita que o usuário informe um item para usar: reduza a quantidade em 1 ou exiba "item esgotado" se for zero.*/


/*5. Crie um objeto representando o orçamento mensal de uma pessoa, com categorias como alimentação, transporte, lazer e saúde, cada uma com valor planejado e valor gasto. Use for...in para percorrer as categorias e exibir se cada uma ficou dentro ou acima do orçamento, e calcule o saldo geral do mês.*/

/*6. Crie um array de objetos representando músicas, cada uma com título, artista e duração em segundos. Use for...of para exibir cada música no formato "Artista — Título (mm:ss)". Ao final, use forEach para somar a duração total e exiba-a no mesmo formato.*/

/*7. Crie um array de objetos com nome e nota de 6 alunos. Use for...of para classificar cada aluno (Aprovado, Recuperação ou Reprovado) e exibir o resultado. Use forEach para calcular e exibir separadamente a média dos aprovados e a média dos reprovados.*/

/*8. Crie um array de objetos representando produtos com nome, preço e quantidade. Use forEach para calcular o valor total em estoque de cada produto (preço × quantidade) e exibir um relatório. Ao final, exiba o valor total geral de todo o estoque.*/

/*9. Crie um array de objetos onde cada objeto representa um contato com nome, telefone e e-mail. Use forEach para listar todos os contatos formatados. Permita buscar um contato pelo nome usando for...of e exiba os dados encontrados ou uma mensagem de "não encontrado".*/

/*10. Implemente uma pilha usando um array para simular o histórico de um navegador. Crie as funções visitar(pagina) (push), voltar() (pop) e paginaAtual() (peek). Simule uma sessão: visite 4 páginas, volte 2 vezes e exiba a página atual a cada operação.*/

/*11. Implemente uma fila usando um array para simular o atendimento de uma clínica. Crie as funções chegarPaciente(nome) (enqueue), chamarProximo() (dequeue) e exibirFila(). Simule a chegada de 5 pacientes e o atendimento de 3, exibindo o estado da fila a cada operação.*/

/*12. Implemente uma lista ligada simples usando nós ({ valor, proximo }). Crie as funções adicionar(tarefa), remover(tarefa) e exibir() que percorre todos os nós. Simule um gerenciador de tarefas: adicione 4 tarefas, remova uma pelo nome e exiba a lista antes e depois.*/
