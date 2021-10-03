import { Request, Response } from 'express'
import insertTask from '../data/insertTask';

export default async function createTask(req: Request, res: Response): Promise<any> {
    let errorCode = 400
    const { title, description, limitDate, creatorUserId } = req.body
    function formatDate(date: string): string {
        const day = date.split("/")[0];
        const month = date.split("/")[1];
        const year = date.split("/")[2];

        return year + '-' + ("0" + month).slice(-2) + '-' + ("0" + day).slice(-2);
    }
    const formattedDate: string = formatDate(limitDate)

    try {
        if (!title || !description || !limitDate || !creatorUserId) {
            throw new Error('Por favor preencha todos os campos')
        } else {
            await insertTask(title, description, formattedDate, creatorUserId)
            res.status(200).send('Tarefa inserida com sucesso')
        }
    } catch (error: any) {
        res.status(errorCode).send(error.sqlMessage || error.message)
    }
}