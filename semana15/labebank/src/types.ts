export type User = {
    name: string,
    cpf: number,
    birthDate: string,
    balance: number,
    transactions: Transaction[]
}

export type Transaction = {
    value: number,
    date: string,
    description: string
}