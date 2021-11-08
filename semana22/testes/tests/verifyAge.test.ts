import { Casino, LOCATION, NATIONALITY, User, verifyAge } from "../src/verifyAge"

describe('Testando função verifyAge', () => {
    
    test('Exercício 4, Letra A - Usuário Brasileiro que entra em cassino Brasileiro', () => {

        const user: User = {
            name: 'Caique',
            age: 27,
            nationality: NATIONALITY.BRAZILIAN
        }

        const casino: Casino = {
            name: 'Bingo do Bigode',
            location: LOCATION.BRAZIL
        }

        const result = verifyAge(casino, [user])

        expect(result.brazilians.allowed).toEqual(['Caique'])
    })

    test('Exercício 4, Letra B - Usuário Americano que pode entrar em cassino Brasileiro', () => {

        const user: User = {
            name: 'Joseph',
            age: 35,
            nationality: NATIONALITY.AMERICAN
        }

        const casino: Casino = {
            name: 'Bingo do Bigode',
            location: LOCATION.BRAZIL
        }

        const result = verifyAge(casino, [user])

        expect(result.americans.allowed).toEqual(['Joseph'])
    })

    test('Exercício 4, Letra C - Dois Brasileiros e dois Americanos nos EUA com 19 anos', () => {

        const american1: User = {
            name: 'Joseph',
            age: 19,
            nationality: NATIONALITY.AMERICAN
        }

        const american2: User = {
            name: 'Byron',
            age: 19,
            nationality: NATIONALITY.AMERICAN
        }

        const brazilian1: User = {
            name: 'Caique',
            age: 19,
            nationality: NATIONALITY.BRAZILIAN
        }

        const brazilian2: User = {
            name: 'Lean',
            age: 19,
            nationality: NATIONALITY.BRAZILIAN
        }

        const casino: Casino = {
            name: 'Six Stars',
            location: LOCATION.EUA
        }

        const result = verifyAge(casino, [american1, american2, brazilian1, brazilian2])

        expect(result.americans.forbidden).toEqual(['Joseph', 'Byron'])
        expect(result.brazilians.forbidden).toEqual(['Caique', 'Lean'])
    })

    test('Exercício 4, Letra D - Dois Brasileiros com 19 anos e dois Americanos com 21 anos nos EUA', () => {

        const american1: User = {
            name: 'Joseph',
            age: 21,
            nationality: NATIONALITY.AMERICAN
        }

        const american2: User = {
            name: 'Byron',
            age: 21,
            nationality: NATIONALITY.AMERICAN
        }

        const brazilian1: User = {
            name: 'Caique',
            age: 19,
            nationality: NATIONALITY.BRAZILIAN
        }

        const brazilian2: User = {
            name: 'Lean',
            age: 19,
            nationality: NATIONALITY.BRAZILIAN
        }

        const casino: Casino = {
            name: 'Six Stars',
            location: LOCATION.EUA
        }

        const result = verifyAge(casino, [american1, american2, brazilian1, brazilian2])

        expect(result.americans.allowed).toEqual(['Joseph', 'Byron'])
        expect(result.brazilians.forbidden).toEqual(['Caique', 'Lean'])
    })

    test('Exercício 5, Letra A - Verificando tamanho do array menor que 2 e maior que 0, com um Brasileiro entrando autorizado no Brasil', () => {

        const user: User = {
            name: 'Caique',
            age: 27,
            nationality: NATIONALITY.BRAZILIAN
        }

        const casino: Casino = {
            name: 'Bingo do Bigode',
            location: LOCATION.BRAZIL
        }

        const result = verifyAge(casino, [user])

        expect(result.brazilians.allowed.length).toBeGreaterThan(0)
        expect(result.brazilians.allowed.length).toBeLessThan(2)
    })

    test('Exercício 5, Letra B - Verificando tamanho do array forbidden igual a 0, com um Americano entrando autorizado no Brasil', () => {

        const user: User = {
            name: 'Joseph',
            age: 35,
            nationality: NATIONALITY.AMERICAN
        }

        const casino: Casino = {
            name: 'Bingo do Bigode',
            location: LOCATION.BRAZIL
        }

        const result = verifyAge(casino, [user])

        expect(result.americans.forbidden.length).toEqual(0)
    })

    test('Exercício 5, Letra C - Verificando se o array forbidden possui o nome de algum usuário', () => {

        const american1: User = {
            name: 'Joseph',
            age: 19,
            nationality: NATIONALITY.AMERICAN
        }

        const american2: User = {
            name: 'Byron',
            age: 19,
            nationality: NATIONALITY.AMERICAN
        }

        const brazilian1: User = {
            name: 'Caique',
            age: 19,
            nationality: NATIONALITY.BRAZILIAN
        }

        const brazilian2: User = {
            name: 'Lean',
            age: 19,
            nationality: NATIONALITY.BRAZILIAN
        }

        const casino: Casino = {
            name: 'Six Stars',
            location: LOCATION.EUA
        }

        const result = verifyAge(casino, [american1, american2, brazilian1, brazilian2])

        expect(result.americans.forbidden).toContain('Joseph')
        expect(result.brazilians.forbidden).toContain('Caique')
    })

    test('Exercício 5, Letra D - Verificando tamanho dos arrays com dois Brasileiros com 19 anos e dois Americanos com 21 anos nos EUA', () => {

        const american1: User = {
            name: 'Joseph',
            age: 21,
            nationality: NATIONALITY.AMERICAN
        }

        const american2: User = {
            name: 'Byron',
            age: 21,
            nationality: NATIONALITY.AMERICAN
        }

        const brazilian1: User = {
            name: 'Caique',
            age: 19,
            nationality: NATIONALITY.BRAZILIAN
        }

        const brazilian2: User = {
            name: 'Lean',
            age: 19,
            nationality: NATIONALITY.BRAZILIAN
        }

        const casino: Casino = {
            name: 'Six Stars',
            location: LOCATION.EUA
        }

        const result = verifyAge(casino, [american1, american2, brazilian1, brazilian2])

        expect(result.americans.forbidden.length).toBeLessThan(1)
        expect(result.brazilians.forbidden.length).toBeGreaterThan(1)
        expect(result.americans.allowed.length).toEqual(2)
    })

})