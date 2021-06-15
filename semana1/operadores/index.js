// --------------- EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO ---------------

// 1.

const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado) // false

resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado) // false

resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado) // true

console.log("d. ", typeof resultado) // boolean

// 2.

let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = primeiroNumero + segundoNumero

console.log(soma) // será impresso no console a junção dos dois números e não a soma, pois o tipo de variável é uma string.

// 3.

//  A sugestão seria trocar o tipo de variável recebido pelo prompt de string para number:

let primeiroNumero = Number(prompt("Digite um numero!"))
let segundoNumero = Number(prompt("Digite outro numero!"))

// Agora a variável soma seria de fato a soma dos dois  números.

// --------------- EXERCÍCIOS DE ESCRITA DE CÓDIGO ---------------

// 1.

const idade = Number(prompt("Qual a sua idade?"))
const idadeAmigo = Number(prompt("Qual a idade do seu melhor amigo(a)?"))

console.log("Sua idade é maior que a do seu melhor amigo?", idade > idadeAmigo)
console.log("Diferença de idade:", idade - idadeAmigo, "anos")

// 2.

const numeroPar = Number(prompt("Por favor, insira um número par."))

console.log("Resto da divisão", numeroPar % 2) 
// Todos os resultados dão 0 já que todos os números pares são múltiplos de 2.
// Caso seja inserido um número ímpar, será impresso um número diferente de 0, que é o resto da divisão, indicando que o número é de fato ímpar, ja que não ;e múltiplo de 2.

// 3.

const mesesNoAno = 12
const diasNoAno = 365
const horasNoAno = 8760
const idade = Number(prompt("Qual a sua idade?"))

console.log("Idade em meses:", idade * mesesNoAno)
console.log("Idade em dias:", idade * diasNoAno)
console.log("idade em horas:", idade * horasNoAno)

// 4.

const numero1 = Number(prompt("Por favor, insira um número qualquer."))
const numero2 = Number(prompt("Por favor, insira outro número qualquer."))

console.log("O primeiro número é maior que o segundo?", numero1 > numero2)
console.log("O primeiro número é igual ao segundo?", numero1 === numero2)
console.log("O primeiro número é divisível pelo segundo?", (numero1 % numero2) === 0)
console.log("O segundo número é divisível pelo primeiro?", (numero2 % numero1) === 0)

// --------------- DESAFIOS DE ESCRITA DE CÓDIGO ---------------

// 1.

let grausCelsius
let grausFahrenheit
let kelvin

// grausCelsius = (5 * (grausFahrenheit - 32) / 9)
// grausFahrenheit = ((grausCelsius * (9/5)) + 32)
// kelvin = ((grausFahrenheit - 32) * (5/9) + 273.15)

grausFahrenheit = 77
kelvin = ((grausFahrenheit - 32) * (5/9) + 273.15)
console.log("77°F equivalem a:", kelvin, "K")

grausCelsius = 80
grausFahrenheit = ((grausCelsius * (9/5)) + 32)
console.log("80°C equivalem a:", grausFahrenheit, "°F")

grausCelsius = Number(prompt("Insira uma temperatura em graus Celsius"))
grausFahrenheit = ((grausCelsius * (9/5)) + 32)
kelvin = ((grausFahrenheit - 32) * (5/9) + 273.15)
console.log(grausCelsius.toString(), "°C equivalem a:", grausFahrenheit, "°F e", kelvin, "K")

// 2.

const energiaConsumida = Number(prompt("Digite a quantidade de energia consumida em Quillowatt-hora."))
const porcentagem = Number(prompt("Digite a porcentagem de desconto"))
const custoEnergia = 0.05
const desconto = (porcentagem / 100) * (energiaConsumida * custoEnergia)
const totalDevido = (energiaConsumida * custoEnergia) - desconto

console.log("Valor a ser pago:", totalDevido, "reais")

// 3.

let libras
let kilos
let ounces
let milhas
let metros
let feet
let gallons
let litros
let xicaras

libras = 20
kilos = libras * 2.205
console.log(libras.toString(), "lb equivalem a:", kilos, "kg")

ounces = 10.5
kilos = ounces / 35.274
console.log(ounces.toString(), "oz equivalem a:", kilos, "kg")

milhas = 100
metros = milhas * 1609
console.log(milhas.toString(), "mi equivalem a:", metros, "m")

feet = 50
metros = feet / 3.281
console.log(feet.toString(), "ft equivalem a:", metros, "m")

gallons = 103.56
litros = gallons * 3.785
console.log(gallons.toString(), "gal equivalem a:", litros, "L")

xicaras = 450
litros = xicaras / 4.167
console.log(xicaras.toString(), "xic equivalem a:", litros, "L")

feet = Number(prompt("A quantos mil pés você voou hoje?"))
metros = feet / 3.281
console.log(feet.toString(), "ft equivalem a:", metros, "m")