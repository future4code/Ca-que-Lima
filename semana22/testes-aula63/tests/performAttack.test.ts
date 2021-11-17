import { performAttack2 } from "../src/performAttack"
import { validFighterMock } from "./mocks/fighterMock"
import { validatorMockFalse, validatorMockTrue } from "./mocks/validateCharacterMock"

describe('Testando a função performAttack', () => {

    test('Exercício 5 - Letra A, personagens válidos', () => {
        const attacker = validFighterMock
        const defender = { ...validFighterMock, name: "José" }

        performAttack2(attacker, defender, validatorMockTrue)

        expect(defender.life).toBe(1450)
        expect(validatorMockTrue).toBeCalled()
        expect(validatorMockTrue).toBeCalledTimes(2)
        expect(validatorMockTrue).toReturnTimes(2)

    })

    test('Exercício 5 - Letra B, alguma coisa inválida', () => {
        try {

            const attacker = validFighterMock
            const defender = { ...validFighterMock, name: "José", life: 1000 }

            performAttack2(attacker, defender, validatorMockFalse)

        } catch (error: any) {
            expect(error.message).toBe('Invalid Character')
            expect(validatorMockFalse).toBeCalled()
            expect(validatorMockFalse).toBeCalledTimes(1)
            expect(validatorMockFalse).toReturnTimes(1)
        
        } finally {
            expect.assertions(4)
        }
    })
})