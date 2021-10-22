export type userDB = {
    id: string,
    name: string,
    email: string,
    age: number
}

export type productDB = {
    id: string,
    name: string,
    description: string,
    price: number,
    origin: string | undefined,
    destination: string | undefined
}