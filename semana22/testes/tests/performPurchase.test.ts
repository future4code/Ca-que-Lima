import { performPurchase, User } from "../src/performPurchase"

describe('Testando função performPurchase', () => {

    test('Letra A - Saldo maior que compra', () => {
        const user: User = {
            name: "Caique",
            balance: 500
        }

        const result = performPurchase(user, 30)

        expect(result).toEqual({
            name: "Caique",
            balance: 470
        })
    })

    test('Letra B - Saldo igual à compra', () => {
        const user: User = {
            name: "Caique",
            balance: 30
        }

        const result = performPurchase(user, 30)

        expect(result).toEqual({
            name: 'Caique',
            balance: 0
        })
    })

    test('Letra B - Saldo igual à compra', () => {
        const user: User = {
            name: "Caique",
            balance: 30
        }

        const result = performPurchase(user, 500)

        expect(result).toBeUndefined
    })
})