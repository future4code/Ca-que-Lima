import { Request, Response } from 'express'
import insertUser from '../data/insertUser'


export default async function createUser(req: Request, res: Response): Promise<any> {
    let errorCode: number = 400
    const { name, nickname, email } = req.body

    try {
        if (!name || !nickname || !email) {
            throw new Error('Por favor preencha todos os campos')
        } else {
            await insertUser(name, nickname, email)
            res.status(200).send('Usuário inserido com sucesso')
        }
    } catch (error: any) {
        res.status(errorCode).send(error.sqlMessage || error.message)
    }
}