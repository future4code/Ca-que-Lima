// --------------- EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO ---------------

// 1. O que o código abaixo está fazendo? Qual o resultado impresso no console?

let valor = 0
for(let i = 0; i < 5; i++) {
  valor += i
}
console.log(valor)

// ---> O código vai adicionar "i" à variável "valor" até que o i seja igual a 5. O valor impresso vai ser 10.


// 2. Leia o código abaixo:

const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let numero of lista) {
  if (numero > 18) {
		console.log(numero)
    }
}

// a) O que vai ser impresso no console?
// ---> Será impresso: 19 21 23 25 27 30

// b)Se eu quisesse acessar o índice de cada elemento dessa lista, o for...of... é suficiente? Se sim, o que poderia ser usado para fazer isso?
// ---> Sim. Poderia ser feito o seguinte:

const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let item of lista) {
    console.log(lista.indexOf(item))
}

// ----- OU -----

let listaIndice = []
const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let item of lista) {
    listaIndice.push(lista.indexOf(item))
}
console.log(listaIndice)

// 3. Qual seria o resultado impresso no console, se o usuário digitasse o número 4 ?

const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
let quantidadeAtual = 0
while(quantidadeAtual < quantidadeTotal){
  let linha = ""
  for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
    linha += "*"
  }
  console.log(linha)
  quantidadeAtual++
}

// ---> *
//      **
//      ***
//      ****



// --------------- EXERCÍCIOS DE ESCRITA DE CÓDIGO ---------------



// 1. Pergunte ao usuário quantos bichinhos de estimação ele tem e guarde esse dado em uma variável. 

// a) Se a quantidade for 0, imprima no console "Que pena! Você pode adotar um pet!"

// b) Se a quantidade for maior que 0, solicite que o usuário digite os nomes deles, um por um, e guarde esses nomes em um array

// c) Por fim, imprima o array com os nomes dos bichinhos no console

const quantidadePets = Number(prompt(`Quantos pets você tem?`))
if (quantidadePets === 0) {
    console.log(`Que pena! Você pode adotar um pet!`)
} else if (quantidadePets > 0) {
    let listaPet = []
    for(let i= 0; i < quantidadePets; i++) {
        let nomePet = prompt(`Qual o nome do seu pet?`)
        listaPet.push(nomePet)
    }
    console.log(listaPet)
} else {
    console.log(`Seu pet é um zumbi!?`)
}


// 2. Considere que você tenha acesso a um array  (chamado de 'array original') que é composto somente de números. Baseando-se nisso, crie uma função para cada um dos itens abaixo, realizando as operações pedidas:

const arrayOriginal = [2, 6, 4, 8, 7, 3]

// a) Escreva um programa que **imprime** cada um dos valores do array original.

for (item of arrayOriginal) {
    console.log(item)
}

// b) Escreva um programa que **imprime** cada um dos valores do array original divididos por 10

for (item of arrayOriginal) {
    let itemDividido = item / 10
    console.log(itemDividido)
}

// c) Escreva um programa que **crie** um novo array contendo, somente, os números pares do array original e **imprima** esse novo array

let novoArrayPar = []
for (item of arrayOriginal) {
    if (item % 2 === 0) {
        novoArrayPar.push(item)
    }
}
console.log(novoArrayPar)

// d) Escreva um programa que **crie** um novo array contendo strings, da seguinte forma: "O elemento do índex `i` é: `numero`". Depois, **imprima** este novo array.

let novoArrayStrings = []
for (item of arrayOriginal) {
    let i = arrayOriginal.indexOf(item)
    let string = `O elemento do índex ${i} é: ${item}`
    novoArrayStrings.push(string)
}
console.log(novoArrayStrings)

// e) Escreva um programa que imprima no console o maior e o menor números contidos no array original

let maiorNumero = -Infinity
let menorNumero = +Infinity

for (item of arrayOriginal) {
    if (item > maiorNumero) {
        maiorNumero = item
    }
}
for (item of arrayOriginal) {
    if (item < menorNumero) {
        menorNumero = item
    }
}

console.log(maiorNumero)
console.log(menorNumero)



// --------------- DESAFIOS DE ESCRITA DE CÓDIGO ---------------



// 1. Neste exercício vocês vão implementar uma brincadeira muito simples: "Adivinhe o número que estou pensando". Ele deve ser jogado entre duas pessoas. Inicialmente, uma das pessoas insere qual o número em que ela pensou. A outra pessoa tem que ficar chutando até acertar em cheio o número. Esta é uma tarefa difícil, então quem escolheu o número fica dando umas dicas para a outra pessoa, indicando se o número que ela pensou é maior ou menor do que o chute em si. Veja, abaixo, um exemplo de partida:

// a) Solicitar que o primeiro jogador escolha um número, através do `prompt`. Neste momento, deve-se imprimir no console a mensagem `Vamos jogar!`

// b) A partir daí, será solicitado, ao segundo jogador, que ele chute os números até acertar, através do `prompt`. A cada chute, deve ser informado no console:

// - O número chutado, com a mensagem: `O número chutado foi: <número>`
// - Uma mensagem dizendo se o número escolhido é maior ou menor do que o número chutado: `Errou. O número escolhido é maior/menor`

// c) Quando o segundo jogador acertar o número escolhido pelo primeiro jogador, deve ser impressa a mensagem: `Acertou` ; e, embaixo, `O número de tentativas foi : <quantos chutes o usuário deu>`

// const perguntaPrimeiroNumero = () => {

// }



let numeroChutado
let numeroDeChutes = 0

const numeroASerAdvinhado = Number(prompt(`Digite um número que você pensou:`))
console.log(`Vamos Jogar!`)

const perguntaNumeros = () => {
    numeroChutado = Number(prompt(`Em qual número seu colega pensou?`))
    if (numeroChutado < numeroASerAdvinhado) {
        numeroDeChutes += 1
        console.log(`O Número chutado foi: ${numeroChutado}`)
        console.log(`Errrrrou, o seu número é menor :(`)
    } else if (numeroChutado > numeroASerAdvinhado) {
        numeroDeChutes += 1
        console.log(`O Número chutado foi: ${numeroChutado}`)
        console.log(`Errrrrou, o seu número é maior :(`)
    } else if (numeroChutado === numeroASerAdvinhado) {
        numeroDeChutes += 1
        console.log(`O Número chutado foi: ${numeroChutado}`)
        console.log(`Acertou!!!! =D`)
        console.log(`Número de tentativas: ${numeroDeChutes}`)
    }
    return numeroChutado
}

while (numeroChutado !== numeroASerAdvinhado) {
    perguntaNumeros()
}


// 2. Uma das principais características de uma boa pessoa programadora é conseguir resolver seus problemas independentemente. Queremos que você comece a treinar isso a partir de hoje! Então, vamos pedir para que você faça uma alteração no código acima. Agora, ao invés de ter 2 jogadores, haverá um só; e o seu adversário será o computador. A ideia é: ao iniciar o jogo, você deve sortear um número aleatório (entre 1 e 100) e o usuário terá que ficar chutando o valor até acertar. Mantenha as demais funcionalidades e mensagens pedidas no exercício anterior.

let numeroChutado
let numeroDeChutes = 0

const numeroASerAdvinhado = Math.floor(Math.random() * 100)
console.log(`Vamos Jogar!`)

const perguntaNumeros = () => {
    numeroChutado = Number(prompt(`Em qual número o computador pensou?`))
    if (numeroChutado < numeroASerAdvinhado) {
        numeroDeChutes += 1
        console.log(`O Número chutado foi: ${numeroChutado}`)
        console.log(`Errrrrou, o seu número é menor :(`)
    } else if (numeroChutado > numeroASerAdvinhado) {
        numeroDeChutes += 1
        console.log(`O Número chutado foi: ${numeroChutado}`)
        console.log(`Errrrrou, o seu número é maior :(`)
    } else if (numeroChutado === numeroASerAdvinhado) {
        numeroDeChutes += 1
        console.log(`O Número chutado foi: ${numeroChutado}`)
        console.log(`Acertou!!!! =D`)
        console.log(`Número de tentativas: ${numeroDeChutes}`)
    }
    return numeroChutado
}

while (numeroChutado !== numeroASerAdvinhado) {
    perguntaNumeros()
}