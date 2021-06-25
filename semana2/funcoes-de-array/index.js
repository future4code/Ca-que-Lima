// --------------- EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO ---------------



// 1. Leia o código abaixo

const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" }
  ]

  const novoArrayA = usuarios.map((item, index, array) => {
     console.log(item, index, array)
  })

// a) O que vai ser impresso no console?
// ---> Vai ser impresso cada objeto, seguido de seu index, e do array original.


// 2. Leia o código abaixo

const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" },
  ]

  const novoArrayB = usuarios.map((item, index, array) => {
     return item.nome
  })

  console.log(novoArrayB)

// a) O que vai ser impresso no console?
// ---> Vai ser impresso um novo array com apenas os nomes: ["Amanda Rangel", "Laís Petra", "Letícia Chijo"]


// 3. Leia o código abaixo

const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" },
  ]

  const novoArrayC = usuarios.filter((item, index, array) => {
     return item.apelido !== "Chijo"
  })

  console.log(novoArrayC)

// a) O que vai ser impresso no console?
// ---> Vai ser impresso o novo array de objetos em que o apelido seja diferente de Chijo. No caso, o array vai possuir o objeto da Amanda e da Laís.



// --------------- EXERCÍCIOS DE ESCRITA DE CÓDIGO ---------------



// 1. Dado o seguinte array de cachorrinhos que são clientes de um pet shop, realize as operações pedidas nos itens abaixo utilizando as funções de array map e filter:

const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]

// a) Crie um novo array que contenha apenas o nome dos doguinhos

const arrayNomesPets = pets.map((item) => {
    return item.nome
})
console.log(arrayNomesPets)

// b) Crie um novo array apenas com os [cachorros salsicha](https://www.youtube.com/watch?v=YQ404vwjzus)

const arrayDeSalsichas = pets.filter(item => item.raca === 'Salsicha')
console.log(arrayDeSalsichas)

// c) Crie um novo array que possuirá mensagens para enviar para todos os clientes que são poodles. A mensagem deve ser: "Você ganhou um cupom de desconto de 10% para tosar o/a `[NOME]`!"

const arrayDescontos = pets.filter(item => item.raca.includes('Poodle')).map(item => `Você ganhou um cupom de desconto de 10% para tosar o/a ${item.nome}!`)
console.log(arrayDescontos)


// 2. Dado o seguinte array de produtos, realize as operações pedidas nos itens abaixo utilizando as funções de array map e filter:

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
]

// a) Crie um novo array que contenha apenas o nome de cada item

const nomeProdutos = produtos.map(objeto => objeto.nome)
console.log(nomeProdutos)

// b) Crie um novo array que contenha um objeto com o nome e o preço de cada item, aplicando 5% de desconto em todos eles

const nomeComDesconto = produtos.map(objeto => ({ 'nome': objeto.nome, 'preço': (objeto.preco * 0.95) }))
console.log(nomeComDesconto)

// c) Crie um novo array que contenha apenas os objetos da categoria Bebidas

const arrayBebidas = produtos.filter(objeto => objeto.categoria === 'Bebidas')
console.log(arrayBebidas)

// d) Crie um novo array que contenha apenas os objetos cujo nome contenha a palavra "Ypê"

const arrayYpe = produtos.filter(objeto => objeto.nome.includes('Ypê'))
console.log(arrayYpe)

// e) Crie um novo array onde cada item é uma frase "Compre [NOME] por [PREÇO]". Esse array deve conter frases apenas dos itens cujo nome contenha a palavra "Ypê"

const arrayYpeFrase = produtos.filter(objeto => objeto.nome.includes('Ypê')).map(objeto => `Compre ${objeto.nome} por ${objeto.preco}`)
console.log(arrayYpeFrase)



// --------------- DESAFIOS DE ESCRITA DE CÓDIGO ---------------



// 1. Dado o seguinte array de pokémons, realize as operações pedidas nos itens abaixo:

const pokemons = [
    { nome: "Bulbasaur", tipo: "grama" },
    { nome: "Bellsprout", tipo: "grama" },
    { nome: "Charmander", tipo: "fogo" },
    { nome: "Vulpix", tipo: "fogo" },
    { nome: "Squirtle", tipo: "água" },
    { nome: "Psyduck", tipo: "água" },
 ]

//  a) Crie um novo array que contenha apenas o nome dos pokémons em ordem alfabética

const nomesOrdemAlfabetica = pokemons.map(objeto => objeto.nome).sort()
console.log(nomesOrdemAlfabetica)

// b) Crie um novo array apenas com os tipos dos pokémons, sem repetição

const tipos = pokemons.map(objeto => objeto.tipo)
const tiposUnicos = [...new Set(tipos)]
// const tiposUnicos = tipos.filter((nome, index) => tipos.indexOf(nome) === index)
console.log(tiposUnicos)