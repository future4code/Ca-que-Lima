import { Request, Response } from 'express'
import selectUsersByQuery from '../data/selectUsersByQuery'

export default async function getUsersByQuery(req: Request, res: Response): Promise<any> {
    let errorCode: number = 400
    const stringToSearch: string = req.query.query as string

    try {
        if (!stringToSearch) {
            throw new Error('Por favor, insira a query')
        }

        const users = await selectUsersByQuery(stringToSearch)


        res.status(200).send({ users: users })
        
    } catch (error: any) {
        res.status(errorCode).send(error.sqlMessage || error.message)
    }
}