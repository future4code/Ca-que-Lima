import { Request, Response } from 'express'
import selectAllUsers from '../data/selectAllUsers'

export default async function getAllUsers(req: Request, res: Response): Promise<any> {
    try {
        const users = await selectAllUsers()
        res.status(200).send({ users: users })
    } catch (error: any) {
        res.send(error.sqlMessage || error.message)
    }
}