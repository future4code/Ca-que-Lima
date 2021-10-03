import { Request, Response } from 'express'
import selectTaskByCreatorId from '../data/selectTaskByCreatorId'
import selectUserById from '../data/selectUserById'

export default async function getTaskByCreatorId(req: Request, res: Response): Promise<any> {
    let errorCode: number = 400
    const id: number = Number(req.query.creatorUserId)
    try {
        if (!id) {
            throw new Error('Por favor, insira o ID')
        }

        const user = await selectUserById(id)

        if (user) {
            const tasks = await selectTaskByCreatorId(id)

            const newArray = tasks.map((task: any) => {
                const newDate: string = task.limitDate.toISOString().slice(0, 10).split('-')
                const formattedDate: string = newDate[2] + '/' + newDate[1] + '/' + newDate[0]
                return { ...task, limitDate: formattedDate }
            })
            res.status(200).send({ tasks: newArray })
        } else {
            throw new Error('Usuário não encontrado')
        }
    } catch (error: any) {
        res.status(errorCode).send(error.sqlMessage || error.message)
    }
}