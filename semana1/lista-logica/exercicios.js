// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  const altura = Number(prompt(`Digite a altura do retângulo`))
  const largura = Number(prompt(`Digite a largura do retângulo`))
  console.log(altura * largura)
}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  const anoAtual = Number(prompt(`Insira o ano atual`))
  const anoNascimento = Number(prompt(`Insira o ano que você nasceu`))
  console.log(anoAtual - anoNascimento)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  return peso / (altura * altura)
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  const nome = prompt(`Qual o seu nome?`)
  const idade = prompt(`Qual a sua idade?`)
  const email = prompt(`Qual o seu email?`)
  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  const cor1 = prompt(`Qual a sua primeira cor favorita?`)
  const cor2 = prompt(`Qual a sua segunda cor favorita?`)
  const cor3 = prompt(`Qual a sua terceira cor favorita?`)
  const arrayDeCores = [cor1, cor2, cor3]
  console.log(arrayDeCores)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  return string.toUpperCase()
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  return custo / valorIngresso
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  return string1.length === string2.length
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  return array[0]
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  return array[array.length -1]
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  const primeiroElemento = array[0]
  const ultimoElemento = array[array.length - 1]
  array[0] = ultimoElemento
  array[array.length - 1] = primeiroElemento
  return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  return string1.toUpperCase() === string2.toUpperCase()
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  const anoAtual = Number(prompt(`Insira o ano atual`))
  const anoNascimento = Number(prompt(`Insira o ano que você nasceu`))
  const anoCarteiraId = Number(prompt(`Insira o ano que sua carteira de identidade foi emitida`))
  const idade = (anoAtual - anoNascimento)
  const tempoCarteira = (anoAtual - anoCarteiraId)
  const menosQue20 = idade <= 20 && tempoCarteira >= 5
  const entre20E50 = idade > 20 && idade <=50 && tempoCarteira >= 10
  const acimaDe50 =  idade > 50 && tempoCarteira >= 15
  const precisaOuNao = menosQue20 || entre20E50 || acimaDe50
  console.log(precisaOuNao)
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
  const multiplos400 = ano % 400 === 0
  const multiplos4 = ano % 4 === 0 
  const eDe100 = ano % 100 === 0
  return multiplos400 || multiplos4 && !eDe100
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
  const maiorDeIdade = prompt(`Você tem mais de 18 anos?`)
  const escolaridade = prompt(`Você possui ensino médio completo?`)
  const disponibilidade = prompt(`Você possui disponibilidade exclusiva durante os horários do curso?`)
  const eApto = maiorDeIdade.includes('sim') && escolaridade.includes('sim') && disponibilidade.includes('sim')
  console.log(eApto)
}