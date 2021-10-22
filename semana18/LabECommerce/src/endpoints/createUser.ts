import { UserDatabase } from "../data/UserDatabase"
import { Request, Response } from "express"
import { User } from "../entities/User"
import { v4 } from 'uuid'

export default async function createUser(req: Request, res: Response): Promise<void> {
    let errorCode: number = 400

    try {
        const { name, email, age } = req.body

        if (!name || !email || !age) {
            throw new Error('Por favor preencha todos os campos')
        }

        const id = v4()

        const user = new User(
            id,
            name,
            email,
            age
        )

        const userDatabase = new UserDatabase()
        await userDatabase.create(user)

        res.status(200).send('Usuário criado com sucesso')

    } catch (error: any) {
        res.status(errorCode).send(error.sqlMessage || error.message)
    }
}