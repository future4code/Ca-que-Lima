const minhaString: string = 'hello'

// o tipo number não pode ser atribuído ao tipo string

const meuNumero: number | string = 25

// colocando ambos os tipos na declaração

enum cores {
    VERMELHO = 'Vermelho',
    LARANJA = 'Laranja',
    AMARELO = 'Amarelo',
    VERDE = 'Verde',
    AZUL = 'Azul',
    ANIL = 'Anil',
    VIOLETA = 'Violeta'
}

type pessoa = {
    nome: string,
    idade: number,
    corFavorita: cores
}

const usuario2: pessoa = {
    nome: 'Joao',
    idade: 36,
    corFavorita: cores.AZUL
}

const usuario3: pessoa = {
    nome: 'Lais',
    idade: 25,
    corFavorita: cores.VIOLETA
}

const usuario4: pessoa = {
    nome: 'Pedro',
    idade: 60,
    corFavorita: cores.LARANJA
}

const usuario5: pessoa = {
    nome: 'Amanda',
    idade: 36,
    corFavorita: cores.VERDE
}

type Estatisticas = {
    maior: number, 
    menor: number, 
    media: number
}

function obterEstatisticas(numeros: number[]): Estatisticas {

    const numerosOrdenados: number[] = numeros.sort(
        (a, b) => a - b
    )

    let soma: number = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas: Estatisticas = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}

type amostraDeDados = {
    numeros: number[],
    obterEstatisticas: (numeros: number[]) => Estatisticas
}

type post = {
    autor: string,
    texto: string
}

const posts: post[] = [
    {
        autor: "Alvo Dumbledore",
        texto: "Não vale a pena viver sonhando e se esquecer de viver"
    },
    {
        autor: "Severo Snape",
        texto: "Menos 10 pontos para Grifinória!"
    },
    {
        autor: "Hermione Granger",
        texto: "É levi-ô-sa, não levio-sá!"
    },
    {
        autor: "Dobby",
        texto: "Dobby é um elfo livre!"
    },
    {
        autor: "Lord Voldemort",
        texto: "Avada Kedavra!"
    }
]

function buscarPostsPorAutor(posts: post[], autorInformado: string): post[] {
    return posts.filter(
        (post) => {
            return post.autor === autorInformado
        }
    )
}

function printMath(num1: number, num2: number): void {
    const sum: number = num1 + num2
    const sub: number = num1 - num2
    const mult: number = num1 * num2
    const largest: number = num1 > num2 ? num1 : num2

    console.log('A soma é:', sum)
    console.log('A subtração é:', sub)
    console.log('A multiplicação é:', mult)
    console.log('O maior é:', largest)
}

printMath(3, 8)