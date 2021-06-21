// --------------- EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO ---------------



// 1. Leia o código abaixo:

const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
}

console.log(filme.elenco[0])
console.log(filme.elenco[filme.elenco.length - 1])
console.log(filme.transmissoesHoje[2])

// a) O que vai ser impresso no console?

// Matheus Nachtergaele
// Desine Fraga
// Objeto {canal: "Globo", horario: "14h"}


// 2. Leia o código abaixo:

const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"}

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

console.log(cachorro)
console.log(gato)
console.log(tartaruga)

// a) O que vai ser impresso no console?

// Objeto {nome: "Juca", idade: "3", raca: "SRD"}
// Objeto {nome: "Juba", idade: "3", raca: "SRD"}
// Objeto {nome: "Jubo", idade: "3", raca: "SRD"}

// b) O que faz a sintaxe dos três pontos antes do nome de um objeto?

// Ela faz com que tudo que estava no objeto após os 3 pontos sejam copiados para o novo objeto sendo criado.


// 3. Leia o código abaixo:

function minhaFuncao(objeto, propriedade) {
	return objeto[propriedade]
}

const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false
}

console.log(minhaFuncao(pessoa, "backender"))
console.log(minhaFuncao(pessoa, "altura"))

// a) O que vai ser impresso no console?

// false
// undefined

// b) Explique o valor impresso no console. Você sabe por que isso aconteceu?

// O primeiro console.log imprimiu false, pq a função acessou a propriedade "backender" do objeto pessoa, que tinha um valor false.
// O segundo console.log imprimiu undefined pois a função tentou acessar uma propriedade que não existia dentro do objeto pessoa.



// --------------- EXERCÍCIOS DE ESCRITA DE CÓDIGO ---------------



// 1. Resolva os passos a seguir: 

// a) Crie um objeto. Ele deve conter duas propriedades: nome (string) e apelidos (um array que sempre terá exatamente três apelidos). Depois, escreva uma função que recebe como entrada um objeto e imprime uma mensagem no modelo abaixo: 

const pessoa = {
    nome: "Júlio",
    apelidos: ["Jurubeba", "Juju", "JM"]
}

function apresentaPessoa(pessoa){
    console.log(`Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelidos[0]}, ${pessoa.apelidos[1]} ou ${pessoa.apelidos[2]}.`)
}

apresentaPessoa(pessoa)

// b) Agora, usando o operador spread, crie um novo objeto mantendo o valor da propriedade nome, mas com uma nova lista de três apelidos. Depois, chame a função feita no item anterior passando como argumento o novo objeto.

const pessoa2 = {...pessoa, apelidos: ["Juliozinho", "Juca", "Júnior"]}

apresentaPessoa(pessoa2)


// 2. Resolva os passos a seguir: 

// a) Crie dois objetos diferentes com as seguintes propriedades: nome, idade e profissão.

const dadosPessoa1 = {
    nome: "Caíque",
    idade: "27",
    profissao: "Piloto"
}

const dadosPessoa2 = {
    nome: "Naiara",
    idade: "29",
    profissao: "Fonoaudióloga"
}

// b) Escreva uma função que receba esses objetos e retorne um array com as seguintes informações:

// 1. O valor de `nome`
// 2. O numero de caracteres do valor `nome`
// 3. O valor de `idade`
// 4. O valor de `profissão`
// 5. O numero de caracteres do valor `profissão`

function retornaArray(dados){
    return [dados.nome, dados.nome.length, dados.idade, dados.profissao, dados.profissao.length]
}

console.log(retornaArray(dadosPessoa1))
console.log(retornaArray(dadosPessoa2))

// 3. Resolva os passos a seguir:

// a) Crie uma variável de escopo global que guarde um `array` vazio chamada `carrinho`

let carrinho = []

// b) Crie três novos objetos que representem frutas de um sacolão. Eles devem ter as seguintes propriedades: nome (`string`) e disponibilidade (`boolean` - devem começar como `true`)

const fruta1 = {nome: "Melancia", disponibilidade: true}
const fruta2 = {nome: "Banana", disponibilidade: false}
const fruta3 = {nome: "Laranja", disponibilidade: true}

// c) Crie uma função que **receba** um objeto fruta por **parâmetro** e coloque-a dentro do array de `carrinho`. Invoque essa função passando os três objetos criados. 

function encheCarrinho(fruta){
    carrinho.push(fruta)
}

encheCarrinho(fruta1)
encheCarrinho(fruta2)
encheCarrinho(fruta3)

// d) Imprima a variável carrinho e garanta que ela agora seja um array preenchido com três objetos. 

console.log(carrinho)