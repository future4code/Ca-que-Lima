// --------------- EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO ---------------



// 1. Leia o código abaixo:

function minhaFuncao(variavel) {
	return variavel * 5
}

console.log(minhaFuncao(2)) 
console.log(minhaFuncao(10))

// a) O que vai ser impresso no console?

//     ---> Será impresso 10 no primeiro log, e 50 no segundo log.

// b) O que aconteceria se retirasse os dois `console.log` e simplesmente invocasse a função `minhaFuncao(2)` e `minhaFuncao(10)`? O que apareceria no console?

//      ---> Aconteceria que a função seria executada, porém nada seria impresso no console, visto que não teria mais o comando para imprimir no console.

// Leia o código abaixo:

let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)

// a) Explique o que essa função faz e qual é sua utilidade.

//      ---> Essa função pega o texto inserido pelo usuário e transforma ele em uma frase com todas as letras em minúsculas, e depois checa se nessa nova frase, tem a sequência de caracteres "cenoura".

// b) Determine qual será a saída no console para cada uma das 3 entradas do usuário:
//      i.   `Eu gosto de cenoura`        ---> true
//      ii.  `CENOURA é bom pra vista`    ---> true
//      iii. `Cenouras crescem na terra`  ---> true



// --------------- EXERCÍCIOS DE ESCRITA DE CÓDIGO ---------------



// 1. Escreva as funções explicadas abaixo:

// a) A função não deve receber nenhum parâmetro e deve imprimir uma mensagem falando algumas informações sobre você, como:

// ----- "Eu sou Caio, tenho 23 anos, moro em São Paulo e sou estudante." -----

function imprimeFrase1(){
    console.log(`Eu sou Caíque, tenho 27 anos, moro em Goiânia e sou estudante.`)
}

imprimeFrase1()

// b) Agora escreva uma função que receba 4 parâmetros que correspondem às informações de uma pessoa: o nome (string), a idade (number), a cidade (string) e uma profissão (string). Ela deve retornar uma string que unifique todas as informações da pessoa em uma só mensagem com o template:

const nome = prompt(`Qual o seu nome?`)
const idade = Number(prompt(`Qual a sua idade?`))
const cidade = prompt(`Em qual cidade você mora?`)
const profissao = prompt(`Qual a sua profissão?`)

function imprimeFrase2(nome, idade, cidade, profissão){
    const frase2 = (`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissão}.`)
    console.log(frase2)
}

imprimeFrase2(nome, idade, cidade, profissao)

// 2. Escreva as funções explicadas abaixo:


// a) Escreva uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das duas entradas e retorne o resultado. Invoque a função e imprima no console o resultado.

function soma2Numeros(numero1, numero2){
    return numero1 + numero2
}

let resultadoSoma = soma2Numeros(2, 3)
console.log(resultadoSoma)

// b) Faça uma função que recebe 2 números e retorne um booleano que informa se o primeiro número é **maior ou igual** ao segundo.

function checaPrimeiroNumero(numero1, numero2){
    return numero1 >= numero2
}

let resultadoCheque = checaPrimeiroNumero(10, 7)
console.log(resultadoCheque)

// c) Escreva uma função que receba um número e devolva um booleano indicando se ele é par ou não

function checaPar(numero1){
    return numero1 % 2 === 0
}

let resultadoPar = checaPar(10)
console.log(resultadoPar)

// d) Faça uma função que recebe uma mensagem (`string`) como parâmetro e imprima o tamanho dessa mensagem, juntamente com uma versão dela em letras maiúsculas.

const mensagem = prompt(`Digite uma mensagem`)

function imprimeMaiusculoETamanho(mensagem){
    console.log(mensagem.toUpperCase(), mensagem.length)
}

imprimeMaiusculoETamanho(mensagem)

// 3. Crie uma função para cada uma das operações básicas (soma, subtração, multiplicação e divisão). Em seguida, peça para o usuário inserir dois números e chame essas 4 funções com esses valores imputados pelo usuário sendo o argumento. Por fim, mostre no console o resultado das operações:

// Números inseridos: 30 e 3
// Soma: 33
// Diferença: 27
// Multiplicação: 90
// Divisão: 10

let numeroUsuario1 = Number(prompt(`Digite um número`))
let numeroUsuario2 = Number(prompt(`Digite um segundo número`))

// Soma -----------------------------------------------------------------

function soma2Numeros(numero1, numero2){
    return numero1 + numero2
}

let resultadoSoma = soma2Numeros(numeroUsuario1, numeroUsuario2)

// Subtração ------------------------------------------------------------

function subtracao2Numeros(numero1, numero2){
    return numero1 - numero2
}

let resultadoSubtracao = subtracao2Numeros(numeroUsuario1, numeroUsuario2)

// Multiplicação --------------------------------------------------------

function multiplicacao2Numeros(numero1, numero2){
    return numero1 * numero2
}

let resultadoMultiplicacao = multiplicacao2Numeros(numeroUsuario1, numeroUsuario2)

// Divisão --------------------------------------------------------------

function divisao2Numeros(numero1, numero2){
    return numero1 / numero2
}

let resultadoDivisao = divisao2Numeros(numeroUsuario1, numeroUsuario2)

// Resultados -----------------------------------------------------------

console.log(`Números inseridos: ${numeroUsuario1} e ${numeroUsuario2}`)
console.log(`Soma: ${resultadoSoma}`)
console.log(`Diferença: ${resultadoSubtracao}`)
console.log(`Multiplicação: ${resultadoMultiplicacao}`)
console.log(`Divisão: ${resultadoDivisao}`)



// --------------- DESAFIOS DE ESCRITA DE CÓDIGO ---------------



// 1.Funções são trechos de códigos como quaisquer outros mas que podemos acessá-los mais de uma vez ao longo do código através de invocações/chamadas. Então, funções podem chamar/invocar outras funções também. Sua tarefa é escrever duas funções

// a) Escreva uma arrow function que recebe um parâmetro e imprime no console esse parâmetro

const imprimeParametro = (parametro) => {
    console.log(parametro)
}

// b) Escreva outra arrow function que recebe dois valores como parâmetros mas nenhum retorno. Faça a soma entre esses valores e chame a sua primeira função mandando este resultado da soma como entrada para imprimi-lo

const soma2Parametros = (parametro1, parametro2) => {
    let soma = parametro1 + parametro2
    imprimeParametro(soma)
}

soma2Parametros(2, 5)

// 2. Faça uma função que execute o teorema de Pitágoras, recebendo dois catetos e calculando o valor da hipotenusa. Retorne este valor, invoque a função e imprima o resultado no console. 

function calculaHipotenusa(cateto1, cateto2){
    let catetoQuadrado1 = cateto1 * cateto1
    let catetoQuadrado2 = cateto2 * cateto2
    let somaDosCatetos = catetoQuadrado1 + catetoQuadrado2
    return Math.sqrt(somaDosCatetos)
}

let hipotenusa = calculaHipotenusa(2, 2)
console.log(`A Hipotenusa é: ${hipotenusa}`)