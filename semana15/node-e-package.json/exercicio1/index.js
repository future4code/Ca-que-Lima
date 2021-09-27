//  Acessamos os parâmetros via os argumentos do processo do node, usando o process.argv.

const name = process.argv[2]
const age = Number(process.argv[3])

console.log(`Olá, ${name}! Você tem ${age} anos. Em sete anos você terá ${age + 7}.`)