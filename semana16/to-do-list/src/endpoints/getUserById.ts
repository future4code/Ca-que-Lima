import { Request, Response } from 'express'
import selectUserById from '../data/selectUserById'


export default async function getUserById(req: Request, res: Response): Promise<any> {
    let errorCode: number = 400
    const id: number = Number(req.params.id)

    try {
        const user = await selectUserById(id)
        if (user) {
            res.status(200).send(user)
        } else {
            throw new Error('Usuário não encontrado')
        }
    } catch (error: any) {
        res.status(errorCode).send(error.sqlMessage || error.message)
    }
}