// --------------- EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO ---------------

// 1. Leia o código abaixo:

const respostaDoUsuario = prompt("Digite o número que você quer testar")
const numero = Number(respostaDoUsuario)

if (numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
}

// a) Explique o que o código faz. Qual o teste que ele realiza? 
// ---> Ele checa se o código é par, olhando se o resto da divisão por 2 é igual a 0.

// b) Para que tipos de números ele imprime no console "Passou no teste"? 
// ---> Para todos os números pares.

// c) Para que tipos de números a mensagem é "Não passou no teste"?
// ---> Para todos os números ímpares.


// 2. O código abaixo foi feito por uma pessoa desenvolvedora, contratada para automatizar algumas tarefas de um supermercado:

let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
    break; // BREAK PARA O ITEM c.
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

// a) Para que serve o código acima?
// ---> Serve para pedir ao usuário uma fruta e comparar com o estoque, alterando a variável "preco".

// b) Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?
// ---> Será: "O preço da fruta Maçã é R$ 2.25".

// c) Considere que um usuário queira comprar uma `Pêra`, qual seria a mensagem impressa no console se retirássemos o `break` que está logo acima do `default` (o `break` indicado pelo comentário "BREAK PARA O ITEM c.")?
// ---> A mensagem seria: "O preço da fruta Pêra é R$ 5".


// 3. Leia o código abaixo:

const numero = Number(prompt("Digite o primeiro número."))

if(numero > 0) {
  console.log("Esse número passou no teste")
	let mensagem = "Essa mensagem é secreta!!!"
}

console.log(mensagem)

// a) O que a primeira linha está fazendo?
// ---> A primeira linha está pedido o usuário um número, e armazenando ele na variável "numero".

// b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?
// ---> A mensagem no console seria: "Esse número passou no teste". Se fosse -10, não seria mostrado nenhuma mensagem.

// c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.
// ---> Sim. Haverá um erro de escopo, informando que a variável "mensagem" não foi declarada, pois ela está tentando ser acessada fora do escopo do if, único local onde foi declarada.



// --------------- EXERCÍCIOS DE ESCRITA DE CÓDIGO ---------------



// 1. Faça um programa que pergunta ao usuário qual a idade dele e imprima no console se ele/ela pode dirigir (apenas maiores de idade).

// a) Faça um prompt para receber a idade do usuário e guarde em uma variável.

// b) Garanta que essa variável é do tipo Number, você deve usar o cast para number para isso.

// c) Agora veja se essa idade do usuário corresponde à idade mínima que permite dirigir. Se sim, imprima no console "Você pode dirigir", caso contrário, imprima "Você não pode dirigir."

const idadeUsuario = Number(prompt(`Digite a sua idade`))
const checaPermissao = (idade) => {
    if (idade >= 18) {
        console.log(`Você pode dirigir`)
    } else {
        console.log(`Você não pode dirigir`)
    }
}

checaPermissao(idadeUsuario)


// 2. Agora faça um programa que verifica que turno do dia um aluno estuda. Peça para digitar M (matutino) ou V (Vespertino) ou N (Noturno). Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". Utilize o bloco if/else

const checaTurno = () => {
    const turno = prompt(`Em qual turno você estuda? Digite "M" para matutino, "V" para Vespertino e "N" para Noturno.`).toUpperCase()
    if (turno === 'M') {
        console.log(`Bom dia!`)
    } else if (turno === 'V') {
        console.log(`Boa Tarde!`)
    } else if (turno === 'N') {
        console.log(`Boa Noite!`)
    }
}

checaTurno()


// 3. Repita o exercício anterior, mas utilizando a estrutura de switch case agora.

const checaTurno = () => {
    const turno = prompt(`Em qual turno você estuda? Digite "M" para matutino, "V" para Vespertino e "N" para Noturno.`).toUpperCase()
    switch (turno) {
        case 'M':
            console.log(`Bom dia!`)
            break
        case 'V':
            console.log(`Boa Tarde!`)
            break
        case 'N':
            console.log(`Boa Noite!`)
            break
        default:
            console.log(`Bora estudar!!`)
    }
}

checaTurno()


// 4. Considere a situação: você vai ao cinema com um amigo ou amiga, porém ele/ela só assistirá a um filme com você se ele for do gênero fantasia e se o ingresso está abaixo de 15 reais. Faça um código que pergunta ao usuário qual o gênero de filme que vão assistir e outra pergunta sobre o preço do ingresso, então verifique se seu amigo ou amiga vai topar assistir o filme. Caso positivo, imprima no console a mensagem: "Bom filme!", caso contrário, imprima "Escolha outro filme :("

const generoFilme = prompt(`Qual o gênero do filme que você vai assistir?`).toLowerCase()
const valorIngresso = Number(prompt(`Qual o preço do ingresso?`))

const verificaFilme = (genero, preço) => {
    if (genero === 'fantasia' && preço < 15) {
        console.log(`Bom filme!`)
    } else { 
        console.log(`Escolha outro filme :(`)
    }
}

verificaFilme(generoFilme, valorIngresso)



// --------------- DESAFIOS DE ESCRITA DE CÓDIGO ---------------



// 1. Modifique o código do exercício 4 de escrita de código para, antes de imprimir a mensagem "Bom filme!", pergunte ao usuário, pelo prompt qual lanchinho ele vai comprar (pipoca, chocolate, doces, etc) e imprima no console as mensagens "Bom filme!" e "Aproveite o seu [LANCHINHO]", trocando [LANCHINHO] pelo que o usuário colocou no input.

const generoFilme = prompt(`Qual o gênero do filme que você vai assistir?`).toLowerCase()
const valorIngresso = Number(prompt(`Qual o preço do ingresso?`))

const verificaFilme = (genero, preço) => {
    if (genero === 'fantasia' && preço < 15) {
        const lanche = prompt(`Qual lanche você irá comprar?`)
        console.log(`Bom filme!`)
        console.log(`Aproveite o seu lanche de ${lanche}`)
    } else { 
        console.log(`Escolha outro filme :(`)
    }
}

verificaFilme(generoFilme, valorIngresso)


// 2. Você foi contratado para criar um sistema de vendas de ingressos de jogos de um estádio de futebol. Para esta compra, o usuário deve fornecer algumas informações:

// - Nome completo;
// - Tipo de jogo: IN indica internacional; e DO indica doméstico;
// - Etapa do jogo: SF indica semi-final; DT indica decisão de terceiro lugar; e FI indica final
// - Categoria: pode ser as opções 1, 2, 3 ou 4;
// - Quantidade de ingressos

// O seu sistema deve solicitar estas informações ao usuário, através do prompt . Além disso, ele deve imprimir tudo isso, junto com o valor de cada ingresso e o valor total que o usuário tem que pagar (ou seja, o valor unitário do ingresso multiplicado pela quantidade). Abaixo, há a tabela com os valores de cada ingresso e exemplos de execução do programa. Lembrando que o valor de jogos internacionais é o mesmo de jogos domésticos, mas seus preços devem ser multiplicados pelo valor do dólar (considerar o dólar = R$4,10)



// Variáveis
let nomeCliente
let tipoJogo
let etapaJogo
let categoria
let quantidadeIngressos
let valorIngresso
let precoTipo
let precoTotal
let moeda

const perguntaUsuário = () => {
    nomeCliente = prompt(`Qual o seu nome?`).toUpperCase()
    tipoJogo = prompt(`Qual tipo de jogo você deseja? Digite "IN" para Internacional e "DO" para doméstico`).toUpperCase()
    etapaJogo = prompt(`Qual a etapa do jogo? Digite "SF" para semi-final, "DT" para decisão terceiro lugar e "FI" para final`).toUpperCase()
    categoria = Number(prompt(`Qual a categoria de ingresso que deseja? 1, 2, 3 ou 4?`))
    quantidadeIngressos = Number(prompt(`Quantos ingressos deseja comprar?`))
}

const calculaPrecoUnitário = (categoria, etapaJogo) => {
    if (categoria === 4 && etapaJogo === 'SF') {
        valorIngresso = 220
    } else if (categoria === 3 && etapaJogo === 'SF') {
        valorIngresso = 550
    } else if (categoria === 2 && etapaJogo === 'SF') {
        valorIngresso = 880
    } else if (categoria === 1 && etapaJogo === 'SF') {
        valorIngresso = 1320
    } else if (categoria === 4 && etapaJogo === 'DT') {
        valorIngresso = 170
    } else if (categoria === 3 && etapaJogo === 'DT') {
        valorIngresso = 330
    } else if (categoria === 2 && etapaJogo === 'DT') {
        valorIngresso = 440
    } else if (categoria === 1 && etapaJogo === 'DT') {
        valorIngresso = 660
    } else if (categoria === 4 && etapaJogo === 'FI') {
        valorIngresso = 330
    } else if (categoria === 3 && etapaJogo === 'FI') {
        valorIngresso = 880
    } else if (categoria === 2 && etapaJogo === 'FI') {
        valorIngresso = 1320
    } else if (categoria === 1 && etapaJogo === 'FI') {
        valorIngresso = 1980
    }
    return valorIngresso
}

const calculaTipo = (tipo) => {
    if (tipo === 'DO') {
        precoTipo = calculaPrecoUnitário(categoria, etapaJogo)
    } else if (tipo === 'IN') {
        precoTipo = calculaPrecoUnitário(categoria, etapaJogo) / 4.1
        valorIngresso /= 4.1
    }
    return precoTipo
}

const calculaPrecoTotal = (preço, quantidade) => {
    precoTotal = preço * quantidade
    return precoTotal
}


const resumeCompra = () => {
    if (tipoJogo === 'DO') {
        tipoJogo = 'Doméstico'
        moeda = 'R$'
    } else if (tipoJogo === 'IN'){
        tipoJogo = 'Internacional'
        moeda = 'US$'
    }
    if (etapaJogo === 'SF') {
        etapaJogo = 'Semi-final'
    } else if (etapaJogo === 'DT'){
        etapaJogo = 'Decisão Terceiro Lugar'
    } else if (etapaJogo === 'FI') {
        etapaJogo = 'Final'
    }
    console.log(`    ---Dados da compra---
    Nome do cliente: ${nomeCliente}
    Tipo do Jogo: ${tipoJogo}
    Etapa do jogo: ${etapaJogo}
    Categoria do ingresso: ${categoria}
    Quantidade de ingressos: ${quantidadeIngressos}
    ---Valores---
    Valor do ingresso: ${moeda} ${valorIngresso}
    Valor total: ${moeda} ${precoTotal}`)
}

const executaCodigo = () => {
    perguntaUsuário()
    calculaTipo(tipoJogo)
    calculaPrecoTotal(precoTipo, quantidadeIngressos)
    resumeCompra()
}

executaCodigo()