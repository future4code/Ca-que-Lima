// EXERCÍCIO 01
function inverteArray(array) {
  let arrayInvertido = []
  for (let i = array.length - 1; i >= 0; i--) {
    arrayInvertido.push(array[i])
  }
  return arrayInvertido
}

// EXERCÍCIO 02
function retornaNumerosParesElevadosADois(array) {
  let novoArray = []
  for (numero of array) {
    if (numero % 2 === 0) {
      novoArray.push(Math.pow(numero, 2))
    }
  }
  return novoArray
}

// EXERCÍCIO 03
function retornaNumerosPares(array) {
  let arrayPar = new Array
  for (numero of array) {
    if (numero % 2 === 0) {
      arrayPar.push(numero)
    }
  }
  return arrayPar
}

// EXERCÍCIO 04
function retornaMaiorNumero(array) {
  let maiorNumero = -Infinity
  for (numero of array) {
    if (numero > maiorNumero) {
      maiorNumero = numero
    }
  }
  return maiorNumero
}

// EXERCÍCIO 05
function retornaQuantidadeElementos(array) {
  return array.length
}

// EXERCÍCIO 06
function retornaExpressoesBooleanas() {
  const respostas = [false, false, true, true, true]
  return respostas
}

// EXERCÍCIO 07
function retornaNNumerosPares(n) {
  let arrayPares = [0]
  let i = 1
  while (i < n) {
    arrayPares.push(arrayPares[arrayPares.length - 1] + 2)
    i++
  }
  return arrayPares
}

// EXERCÍCIO 08
function checaTriangulo(a, b, c) {
  let resposta
  if ((a === b) && (b === c)) {
    resposta = 'Equilátero'
  } else if ((a === b) && (a !== c) || (a === c) && (a !== b)) {
    resposta = 'Isósceles'
  } else {
    resposta = 'Escaleno'
  }
  return resposta
}

// EXERCÍCIO 09
function comparaDoisNumeros(num1, num2) {
  let numeroMaior
  let divisivel
  let diferenca
  if (num1 > num2) {
    numeroMaior = num1
    divisivel = num1 % num2 === 0
    diferenca = num1 - num2
  } else if (num2 > num1) {
    numeroMaior = num2
    divisivel = num2 % num1 === 0
    diferenca = num2 - num1
  } else {
    numeroMaior = num1
    divisivel = true
    diferenca = 0
  }
  return {
    maiorNumero: numeroMaior,
    maiorDivisivelPorMenor: divisivel,
    diferenca: diferenca
  }
}

// EXERCÍCIO 10
function segundoMaiorEMenor(array) {
  const arrayUnicos = [...new Set(array)]
  const maiorNumero = Math.max(...arrayUnicos)
  const menorNumero = Math.min(...arrayUnicos)
  const arrayUnicosSemMaximo = arrayUnicos.filter(numero => numero < maiorNumero)
  const arrayUnicosSemMinimo = arrayUnicos.filter(numero => numero > menorNumero)
  const segundoMaior = Math.max(...arrayUnicosSemMaximo)
  const segundoMenor = Math.min(...arrayUnicosSemMinimo)
  return [segundoMaior, segundoMenor]
}

// EXERCÍCIO 11
function ordenaArray(array) {
  let tamanho = array.length
  for (let i = 0; i < tamanho; i++) {
    for (let j = 0; j < tamanho; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j]
        array[j] = array[j+1]
        array[j+1] = temp
      }
    }
  }
  return array
}

// EXERCÍCIO 12
function filmeFavorito() {
  return {
    nome: 'O Diabo Veste Prada',
    ano: 2006,
    diretor: 'David Frankel',
    atores: ['Meryl Streep', 'Anne Hathaway', 'Emily Blunt', 'Stanley Tucci']
  }
}

// EXERCÍCIO 13
function imprimeChamada() {
  const filme = filmeFavorito()
  return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores[0]}, ${filme.atores[1]}, ${filme.atores[2]}, ${filme.atores[3]}.`
}

// EXERCÍCIO 14
function criaRetangulo(lado1, lado2) {
  const perimetro = (2 * (lado1 + lado2))
  const area = lado1 * lado2
  return {
    largura: lado1,
    altura: lado2,
    perimetro: perimetro,
    area: area
  }
}

// EXERCÍCIO 15
function anonimizaPessoa(pessoa) {
  return {
  nome: "ANÔNIMO",
	idade: pessoa.idade,
	email: pessoa.email,
	endereco: pessoa.endereco
  }
}

// EXERCÍCIO 16A
function maioresDe18(arrayDePessoas) {
  let arrayMaiorDe18 = new Array
  for (objeto of arrayDePessoas) {
    if (objeto.idade >= 18) {
      arrayMaiorDe18.push(objeto)
    }
  }
  return arrayMaiorDe18
}

// EXERCÍCIO 16B
function menoresDe18(arrayDePessoas) {
  let arrayMenoresDe18 = new Array
  for (objeto of arrayDePessoas) {
    if (objeto.idade < 18) {
      arrayMenoresDe18.push(objeto)
    }
  }
  return arrayMenoresDe18
}

// EXERCÍCIO 17A
function multiplicaArrayPor2(array) {
  return array.map(numero => numero * 2)
}

// EXERCÍCIO 17B
function multiplicaArrayPor2S(array) {
  return array.map(numero => (numero * 2).toString())
}

// EXERCÍCIO 17C
function verificaParidade(array) {
  let novoArray = new Array
  let parOuImpar
  for (item of array) {
    if (item % 2 === 0) {
      parOuImpar = 'par'
      novoArray.push(`${item} é ${parOuImpar}`)
    } else {
      parOuImpar = 'ímpar'
      novoArray.push(`${item} é ${parOuImpar}`)
    }} 
  return novoArray
}

// EXERCÍCIO 18A
function retornaPessoasAutorizadas(pessoas) {

}

// EXERCÍCIO 18B
function retornaPessoasNaoAutorizadas(pessoas) {

}

// EXERCÍCIO 19A
function ordenaPorNome(consultasNome) {

}

// EXERCÍCIO 19B
function ordenaPorData(consultasData) {

}

// EXERCÍCIO 20
function calculaSaldo(contas) {

}
