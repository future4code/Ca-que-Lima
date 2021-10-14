import { UserDatabase } from "../data/UserDatabase"
import { Request, Response } from "express"
import { User } from "../entities/User"

export default async function getAllUsers(req: Request, res: Response): Promise<void> {
    let errorCode: number = 400

    try {

        const userDatabase = new UserDatabase()
        const allUsers: User[] = await userDatabase.getAll()

        res.status(200).send({ users: allUsers })

    } catch (error: any) {
        res.status(errorCode).send(error.sqlMessage || error.message)
    }
}