/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

console.log(`Boas vindas ao jogo de Blackjack!`)

let cartasComputador = []
let cartasUsuario = []
let pontuacaoComputador 
let pontuacaoUsuario

function iniciaRodada() {
   if (confirm(`Quer iniciar uma nova rodada?`)) {
      sorteiaCartas()
      calculaPontuacao()
      imprimeCartas()
      imprimeResultado()
   } else {
      console.log(`O jogo acabou.`)
   }
}

function sorteiaCartas() {
   for (let i = 0; i < 2; i++) {
      cartasComputador.push(comprarCarta())
   }
   for (let i = 0; i < 2; i++) {
      cartasUsuario.push(comprarCarta())
   }
}

function calculaPontuacao() {
   pontuacaoComputador = cartasComputador[0].valor + cartasComputador[1].valor
   pontuacaoUsuario = cartasUsuario[0].valor + cartasUsuario[1].valor
}


function imprimeCartas() {
   console.log(`Computador - cartas: ${cartasComputador[0].texto}, ${cartasComputador[1].texto} - pontuação: ${pontuacaoComputador}`)
   console.log(`Usuário - cartas: ${cartasUsuario[0].texto}, ${cartasUsuario[1].texto} - pontuação: ${pontuacaoUsuario}`)
}

function imprimeResultado() {
   if (pontuacaoComputador === pontuacaoUsuario) {
      console.log(`Empate!`)
   } else if (pontuacaoComputador > pontuacaoUsuario) {
      console.log(`O computador venceu!`)
   } else {
      console.log(`O usuário venceu!`)
   }
}

iniciaRodada()