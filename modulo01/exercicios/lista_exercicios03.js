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

// const PROMPT = require('prompt-sync')()

// let inventario = {
//     espada: 1,
//     pocao: 5,
//     escudo: 2,
//     cajado: 0
// }

// for (const item in inventario) {
//     console.log(item + ': ' + inventario[item])
// }


// let opcao = ''

// while (opcao !== '0') {
//     opcao = PROMPT('Digite o nome do item que deseja usar (0 para sair): ')
//     console.log('\n\n')
//     for (const item in inventario) {
//         if (item === opcao) {
//             if (inventario[item] > 0) {
//                 inventario[item] -= 1
//                 console.log('[Você usou um ' + item + '. Quantidade restante]: ' + inventario[item])
//             } else {
//                 console.log('[Item esgotado]: ' + item)
//             }
//         }
//         console.log(item + ': ' + inventario[item])
//     }
// }

/*5. Crie um objeto representando o orçamento mensal de uma pessoa, com categorias como alimentação, transporte, lazer e saúde, cada uma com valor planejado e valor gasto. Use for...in para percorrer as categorias e exibir se cada uma ficou dentro ou acima do orçamento, e calcule o saldo geral do mês.*/

// class Meta {
//     constructor(planejado, gasto) {
//         this.planejado = planejado
//         this.gasto = gasto
//     }
// }

// let orcamentoMensal = {
//     alimentacao: new Meta(1500, 1200),
//     transporte: new Meta(500, 600),
//     lazer: new Meta(250, 300),
//     saude: new Meta(500, 450)
// }

// let saldoGeralMes = 0

// for (const categoria in orcamentoMensal) {
//     let meta = orcamentoMensal[categoria]
//     let saldoCategoria = meta.planejado - meta.gasto
//     saldoGeralMes += saldoCategoria

//     if (saldoCategoria >= 0) {
//         console.log(categoria + ': Dentro do orçamento. Saldo: R$ ' + saldoCategoria.toFixed(2))
//     } else {
//         console.log(categoria + ': Acima do orçamento. Saldo: R$ ' + saldoCategoria.toFixed(2))
//     }
// }

// console.log('\nSaldo geral do mês: R$ ' + saldoGeralMes.toFixed(2))

/*6. Crie um array de objetos representando músicas, cada uma com título, artista e duração em segundos. Use for...of para exibir cada música no formato "Artista — Título (mm:ss)". Ao final, use forEach para somar a duração total e exiba-a no mesmo formato.*/

// class Musica {
//     constructor(titulo, artista, duracaoSegudos) {
//         this.titulo = titulo,
//         this.artista = artista,
//         this.duracaoSegudos = duracaoSegudos
//     }
// }

// let arrayMusicas = []
// musica1 = new Musica('Between Angels And Insects', 'Papa Roach', 244)
// arrayMusicas.push(musica1)
// musica2 = new Musica('Bodies', 'Drowning Pool', 112)
// arrayMusicas.push(musica2)
// musica3 = new Musica('Decode', 'Paramore', 261)
// arrayMusicas.push(musica3)

// let duracaoTotalSegundosMusicas = 0
// for (const musica of arrayMusicas) {
//     /*
//     Caso funções já estivessem sido vistas, criaria uma função para converter para mm:ss

//     Pesquisei e utilizei o Math.trunc() para retornar apenas o decimal exato, que são os minutos

//     Pesquisei sobre o padStart, para deixar a formatação de minutos correta
//     */
//     console.log(`${musica.artista} - ${musica.titulo} (${Math.trunc(musica.duracaoSegudos / 60)}:${(musica.duracaoSegudos % 60).toString().padStart(2, '0')})`)
//     duracaoTotalMusicas += musica.duracaoSegudos
// }

// console.log(`Duração Total Músicas: ${Math.trunc(duracaoTotalMusicas / 60)}:${(duracaoTotalMusicas % 60).toString().padStart(2, '0')}`)

/*7. Crie um array de objetos com nome e nota de 6 alunos. Use for...of para classificar cada aluno (Aprovado, Recuperação ou Reprovado) e exibir o resultado. Use forEach para calcular e exibir separadamente a média dos aprovados e a média dos reprovados.*/

// class Aluno {
//     constructor(nome, nota) {
//         this.nome = nome,
//         this.nota = nota
//     }
// }

// let arrayAlunos = []

// aluno1 = new Aluno('Matheus', 9.9); arrayAlunos.push(aluno1)
// aluno2 = new Aluno('Cecília', 10.0); arrayAlunos.push(aluno2)
// aluno3 = new Aluno('Carlos', 7.9); arrayAlunos.push(aluno3)
// aluno4 = new Aluno('Roberta', 5.9); arrayAlunos.push(aluno4)
// aluno5 = new Aluno('Vinícius', 4.4); arrayAlunos.push(aluno5)
// aluno6 = new Aluno('Alice', 5.3); arrayAlunos.push(aluno6)

// let qtdAprovados = 0
// let qtdReprovados = 0
// let notaAprovados = 0.0
// let notaReprovados = 0.0

// for (const aluno of arrayAlunos) {

//     let mensagem = ''
//     if (aluno.nota < 5) {
//         mensagem = 'reprovado'
//         qtdReprovados += 1
//         notaReprovados += aluno.nota
//     } else if (aluno.nota >= 5 && aluno.nota < 6) {
//         mensagem = 'recuperação'
//     } else {
//         mensagem = 'aprovado'
//         qtdAprovados += 1
//         notaAprovados += aluno.nota
//     }

//     console.log(`Situação do aluno ${aluno.nome}: ${mensagem} | Nota: ${aluno.nota.toFixed(1)}`)
// }

// let mediaAprovados = qtdAprovados > 0 ? (notaAprovados / qtdAprovados).toFixed(2) : 0;
// let mediaReprovados = qtdReprovados > 0 ? (notaReprovados / qtdReprovados).toFixed(2) : 0;

// console.log('\nQuantidade de aluno aprovados:', qtdAprovados, '\nMédia dos alunos aprovados:', mediaAprovados)
// console.log('\n\nQuantidade de aluno reprovados:', qtdReprovados, '\nMédia dos alunos reprovados:', mediaReprovados)

/*8. Crie um array de objetos representando produtos com nome, preço e quantidade. Use forEach para calcular o valor total em estoque de cada produto (preço × quantidade) e exibir um relatório. Ao final, exiba o valor total geral de todo o estoque.*/

// class Produto {
//     constructor(nome, preco, quantidade) {
//         this.nome = nome,
//         this.preco = preco,
//         this.quantidade = quantidade
//     }
// }

// let arrayProdutos = [
//     new Produto('Camiseta', 59.90, 98),
//     new Produto('Calça Jeans', 120.00, 50),
//     new Produto('Tênis', 200.00, 30),
//     new Produto('Jaqueta', 150.00, 20)
// ]

// let valorTotalGeralEstoque = 0
// for (const produto of arrayProdutos) {
//     let valorTotalProduto = produto.preco * produto.quantidade
//     valorTotalGeralEstoque += valorTotalProduto
//     console.log(`Produto: ${produto.nome} | Preço: R$ ${produto.preco.toFixed(2)} | Quantidade: ${produto.quantidade} | Valor Total em Estoque: R$ ${valorTotalProduto.toFixed(2)}`)
// }
// console.log(`Valor Total Geral em Estoque: R$ ${valorTotalGeralEstoque.toFixed(2)}`)


/*9. Crie um array de objetos onde cada objeto representa um contato com nome, telefone e e-mail. Use forEach para listar todos os contatos formatados. Permita buscar um contato pelo nome usando for...of e exiba os dados encontrados ou uma mensagem de "não encontrado".*/

class Contato {
    constructor(nome, telefone, email) {
        this.nome = nome,
        this.telefone = telefone,
        this.email = email
    }
}

let arrayContatos = [
    new Contato('Matheus', '16992384129', 'matheus@gmail.com'),
    new Contato('Cecília', '16992834928', 'cecilia@gmail.com'),
    new Contato('Carlos', '16992384756', 'carlos.silva@outlook.com'),
    new Contato('Roberta', '16992384756', 'Roberta@hotmail.com'),
    new Contato('Matheus', '16992833823', 'matheus2@outlook.com')
]

arrayContatos.forEach(contato => {
    console.log(`Nome: ${contato.nome} | Telefone: ${contato.telefone} | Email: ${contato.email}`)
})

const PROMPT = require('prompt-sync')()
let contatoEncontrado = false
let nomeBusca = ''

while (nomeBusca !== '0') {
    nomeBusca = PROMPT('Digite o nome do contato que deseja buscar (0 para sair): ')
    if (nomeBusca !== '0') console.log('\n\nBuscando...')
    contatoEncontrado = false
    arrayContatos.forEach(contato => {
        if (contato.nome.toLowerCase() === nomeBusca.toLowerCase()) {
            console.log(`Contato encontrado: Nome: ${contato.nome} | Telefone: ${contato.telefone} | Email: ${contato.email}`)
            contatoEncontrado = true
        }
    })
    if (!contatoEncontrado && nomeBusca !== '0') {
        console.log('Contato não encontrado.')
    }
}

/*10. Implemente uma pilha usando um array para simular o histórico de um navegador. Crie as funções visitar(pagina) (push), voltar() (pop) e paginaAtual() (peek). Simule uma sessão: visite 4 páginas, volte 2 vezes e exiba a página atual a cada operação.*/

/*11. Implemente uma fila usando um array para simular o atendimento de uma clínica. Crie as funções chegarPaciente(nome) (enqueue), chamarProximo() (dequeue) e exibirFila(). Simule a chegada de 5 pacientes e o atendimento de 3, exibindo o estado da fila a cada operação.*/

/*12. Implemente uma lista ligada simples usando nós ({ valor, proximo }). Crie as funções adicionar(tarefa), remover(tarefa) e exibir() que percorre todos os nós. Simule um gerenciador de tarefas: adicione 4 tarefas, remova uma pelo nome e exiba a lista antes e depois.*/
