// --------------- EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO ---------------

// 1.

let a = 10
let b = 10

console.log(b)

b = 5
console.log(a, b)

//  RESPOSTA:
//  10
//  10, 5

// 2.

let a = 10
let b = 20
let c
c = a
b = c
a = b

console.log(a, b, c)

//  RESPOSTA:
//  10, 10, 10

// 3.

let p = prompt("Quantas horas você trabalha por dia?")
let t = prompt("Quanto você recebe por dia?")
alert(`Voce recebe ${t/p} por hora`)

//  RESPOSTA:   let horasTrabalhoDiario = prompt("Quantas horas você trabalha por dia?")
//              let salarioDiario = prompt("Quanto você recebe por dia?")
//              alert(`Voce recebe ${salarioDiario/horasTrabalhoDiario} por hora`)
 
// --------------- EXERCÍCIOS DE ESCRITA DE CÓDIGO ---------------



// 1.

let nome = prompt("Qual o seu nome?")
let idade = prompt("Qual a sua idade?")

console.log("Tipo variável:", typeof nome)
console.log("Tipo variável:", typeof idade)

// O tipo "Undefined" foi impresso para ambas as variáveis pois não foi atribuído nenhum valor na declaração das mesmas.
// Após perguntar ao usuário o nome e a idade, ambas as variáveis foram atribuídos o valor de "string", pois é o padrão de resposta do Prompt.

console.log("Olá", nome, ", você tem", idade, "anos")

// 2.

const primeiraResposta = prompt("Você dormiu bem?")
const segundaResposta = prompt("Você gosta de Harry Potter?")
const terceiraResposta = prompt("Você fuma?")

console.log("Você dormir bem? -", primeiraResposta)
console.log("Você gosta de Harry Potter? -", segundaResposta)
console.log("Você fuma? -", terceiraResposta)

// 3.

let a = 10
let b = 25
let c

c = a
a = b
b = c

console.log("O novo valor de a é:", a)
console.log("O novo valor de b é:", b)