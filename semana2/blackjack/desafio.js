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

alert(`Boas vindas ao jogo de Blackjack!`)

let cartasComputador = []
let cartasUsuario = []
let pontuacaoComputador = 0
let pontuacaoUsuario = 0
let maoUsuario
let maoComputador
let condicional = true

function iniciaJogo() {
   if (confirm(`Quer iniciar uma nova rodada?`)) {
      sorteiaCartas()
      verificaCartas()
      calculaPontuacao()
      leMaoUsuario()
      leMaoComputador()
      while (pontuacaoUsuario < 21 && condicional === true) {
         perguntaNovaRodada()
      }
      mostraResultado()
   } else {
      alert(`O jogo acabou.`)
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

function verificaCartas() {
   if (cartasComputador[0].texto === 'A' && cartasComputador[1].texto === 'A') {
      cartasComputador = []
      cartasUsuario = []
      sorteiaCartas()
   } else if (cartasUsuario[0].texto === 'A' && cartasUsuario[1].texto === 'A') {
      cartasComputador = []
      cartasUsuario = []
      sorteiaCartas()
   }
}

function calculaPontuacao() {
   pontuacaoComputador = 0
   pontuacaoUsuario = 0
   for (let i = 0; i < cartasComputador.length; i++) {
      pontuacaoComputador += cartasComputador[i].valor
   }
   for (let i = 0; i < cartasUsuario.length; i++) {
      pontuacaoUsuario += cartasUsuario[i].valor
   }
}

function leMaoUsuario() {
   maoUsuario = ''
   for (objeto of cartasUsuario) {
      maoUsuario += objeto.texto + ' '
   }
}

function leMaoComputador() {
   maoComputador = ''
   for (objeto of cartasComputador) {
      maoComputador += objeto.texto + ' '
   }
}

function perguntaNovaRodada() {
   if (confirm(`Suas cartas são: ${maoUsuario}. A carta revelada do computador é: ${cartasComputador[0].texto}. \nDeseja comprar mais uma carta?`)) {
      cartasUsuario.push(comprarCarta())
      leMaoUsuario()
      calculaPontuacao()
   } else {
      while (pontuacaoComputador < pontuacaoUsuario) {
         cartasComputador.push(comprarCarta())
         leMaoComputador()
         calculaPontuacao()
      }
      condicional = false
   }
}

function mostraResultado() {
   let resultado = ''
   if (pontuacaoComputador === pontuacaoUsuario) {
      resultado = 'Empate!'
   } else if (pontuacaoUsuario > 21) {
      resultado = 'O computador ganhou!'
   } else if (pontuacaoComputador > 21 && pontuacaoUsuario <= 21) {
      resultado = 'O usuário ganhou!'
   } else if (pontuacaoComputador <= 21 && pontuacaoComputador > pontuacaoUsuario) {
      resultado = 'O computador ganhou!'
   } else if (pontuacaoUsuario <= 21 && pontuacaoUsuario > pontuacaoComputador) {
      resultado = 'O usuário ganhou!'
   }
   alert(`Suas cartas são: ${maoUsuario}. Sua pontuação é :${pontuacaoUsuario}. \nAs cartas do computador são: ${maoComputador}. A pontuação do computador é: ${pontuacaoComputador}. \n${resultado}`)
}


iniciaJogo()




















