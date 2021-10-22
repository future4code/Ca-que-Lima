import { UserDatabase } from "../data/UserDatabase"
import { Request, Response } from "express"
import { userDB } from "../types"
import { User } from "../entities/User"

export default async function getAllUsers(req: Request, res: Response): Promise<void> {
    let errorCode: number = 400

    try {

        const userDatabase = new UserDatabase()
        const usersDB: userDB[] = await userDatabase.getAll()

        const allUsers = usersDB.map(user => {
            return new User(
                user.id,
                user.name,
                user.email,
                user.age
            )
        })

        res.status(200).send({ users: allUsers })

    } catch (error: any) {
        res.status(errorCode).send(error.sqlMessage || error.message)
    }
}