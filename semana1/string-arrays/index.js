// --------------- EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO ---------------



// 1. Indique todas as mensagens impressas no console, SEM EXECUTAR o programa.

let array
console.log('a. ', array) // a. undefined

array = null
console.log('b. ', array) // b. null

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length) // c. 11

let i = 0
console.log('d. ', array[i]) // d. 3

array[i+1] = 19
console.log('e. ', array) // e. array [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]

const valor = array[i+6]
console.log('f. ', valor) // f. 9

// 2. Leia o código abaixo com atenção

// Qual será o valor impresso no console se a entrada do usuário for: "Subi num ônibus em Marrocos"?

const frase = prompt("Digite uma frase")

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length) // SUBI NUM ÔNIBUS EM MIRROCOS 27



// --------------- EXERCÍCIOS DE ESCRITA DE CÓDIGO ---------------



// 1. Faça um programa que pergunte ao usuário seu nome e seu e-mail. Em seguida, imprima na tela a seguinte mensagem: O e-mail <emailDoUsuario> foi cadastrado com sucesso. Seja bem-vinda(o), <nomeDoUsuario!>

const nomeDoUsuario = prompt('Digite o seu nome')
const emailDoUsuario = prompt('Digite seu email')

console.log(`O email ${emailDoUsuario} foi cadastrado com sucesso. Seja bem vinda(o), ${nomeDoUsuario}!`)

// 2. Faça um programa que contenha um array com 5 das suas comidas preferidas, armazenado em uma variável. Em seguida, siga os passos:

// a) Imprima na tela o array completo

const comidasPreferidas = ['Sanduiches', 'Feijoada', 'Bolo', 'Churrasco', 'Pastel']
console.log(comidasPreferidas)

// b) Imprima na tela a mensagem "Essas são as minhas comidas preferidas: ", seguida por cada uma das comidas, **uma embaixo da outra**.

let i = 0
console.log(`Essas são as minhas comidas preferidas:
${comidasPreferidas[i]} 
${comidasPreferidas[i+1]}
${comidasPreferidas[i+2]}
${comidasPreferidas[i+3]}
${comidasPreferidas[i+4]}`)

// c) Aqui vai um desafio: pergunte ao usuário uma comida preferida. Troque a segunda comida da sua lista pela inserida pelo usuário. Imprima na tela a nova lista 

const comidaUsuario = prompt('Qual a sua comida preferida?')
comidasPreferidas.splice(1, 4)
comidasPreferidas.push(comidaUsuario, 'Bolo', 'Churrasco', 'Pastel')

// ---- OU ----

comidasPreferidas.splice(1, 1, comidaUsuario)

console.log(comidasPreferidas)

// 3. Faça um programa, seguindo os passos:

// a) Crie um array vazio e guarde-o em uma variável, chamada `listaDeTarefas`

let listaDeTarefas = []

// b) Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, uma por uma, no array

const tarefa1 = prompt('Digite uma tarefa que você precisa fazer hoje')
const tarefa2 = prompt('Digite uma segunda tarefa que você precisa fazer hoje')
const tarefa3 = prompt('Digite uma terceira tarefa que você precisa fazer hoje')

listaDeTarefas.push(tarefa1)
listaDeTarefas.push(tarefa2)
listaDeTarefas.push(tarefa3)

 ----OU----

listaDeTarefas.push(tarefa1, tarefa2, tarefa3)

// c) Imprima o array na tela

console.log(listaDeTarefas)

// d) Peça ao usuário que digite o **índice** de uma tarefa que ele já realizou: 1, 2 ou 3 

const tarefaRealizada = Number(prompt('Digite qual tarefa você já realizou: 1, 2 ou 3'))

// e) Remova da lista o item de índice que o usuário escolheu.

listaDeTarefas.splice(tarefaRealizada - 1, 1)

// f) Imprima o array na tela

console.log(listaDeTarefas)



// --------------- DESAFIO DE ESCRITA DE CÓDIGO ---------------



// 1. Receba uma frase e retorne um array onde cada elemento é uma das palavras da frase, ignorando os espaços

const frase = prompt('Digite uma frase')
const fraseEmArray = frase.split(' ')
console.log(fraseEmArray)

// 2. Dado o array ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"], faça um programa que acha o índice da palavra Abacaxi e imprime tanto o índice quanto o tamanho do array

const array = ['Banana', 'Morango', 'Abacaxi', 'Laranja', 'Ameixa']
const indiceAbacaxi = array.findIndex(buscaFruta)

function buscaFruta(element, index, array){
    return element === 'Abacaxi'
}

console.log(`O índice do Abacaxi é: ${indiceAbacaxi} e o tamanho do array é: ${array.length}`)