import { validateCharacter } from "../src/validateCharacter"
import { validFighterMock } from "./mocks/fighterMock"

describe('Testando função validadeCharacter', () => {

    test('Exercício 2 - Letra A, nome vazio', () => {

        const fighter = { ...validFighterMock, name: "" }
        const result = validateCharacter(fighter)
        expect(result).toBe(false)
    })

    test('Exercício 2 - Letra B, vida zerada', () => {

        const fighter = { ...validFighterMock, life: 0 }
        const result = validateCharacter(fighter)
        expect(result).toBe(false)
    })

    test('Exercício 2 - Letra C, ataque zerado', () => {

        const fighter = { ...validFighterMock, attack: 0 }
        const result = validateCharacter(fighter)
        expect(result).toBe(false)
    })

    test('Exercício 2 - Letra D, defesa zerada', () => {

        const fighter = { ...validFighterMock, defense: 0 }
        const result = validateCharacter(fighter)
        expect(result).toBe(false)
    })

    test('Exercício 2 - Letra E, algum parâmetro negativo', () => {

        const fighter = { ...validFighterMock, life: -35 }
        const result = validateCharacter(fighter)
        expect(result).toBe(false)
    })

    test('Exercício 2 - Bônus, vida diferente de 1500', () => {

        const fighter = { ...validFighterMock, life: 1400 }
        const result = validateCharacter(fighter)
        expect(result).toBe(false)
    })

    test('Exercício 2 - Letra F, lutador válido', () => {

        const result = validateCharacter(validFighterMock)
        expect(result).toBe(true)
    })
})