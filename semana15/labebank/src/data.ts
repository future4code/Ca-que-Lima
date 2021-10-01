import { User } from "./types"

export const users: User[] = [
    {
        name: "Caíque",
        cpf: 11122233345,
        birthDate: "1994-05-20",
        balance: 503.65,
        transactions: [
            {
                value: -32.00,
                date: "2021-09-23",
                description: "Compra na padaria"
            }
        ]
    },
    {
        name: "Naiara",
        cpf: 12312312345,
        birthDate: "1992-01-28",
        balance: 329.87,
        transactions: []
    }
]