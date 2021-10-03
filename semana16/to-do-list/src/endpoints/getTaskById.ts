import { Request, Response } from 'express'
import selectTaskById from '../data/selectTaskById'
import selectTaskByIdJoinNickname from '../data/selectTaskByIdJoinNickname'

export default async function getTaskById(req: Request, res: Response): Promise<any> {
    let errorCode: number = 400
    const id: number = Number(req.params.id)
    try {
        const taskIsValid = await selectTaskById(id)

        if (taskIsValid) {
            const task = await selectTaskByIdJoinNickname(id)
            const newDate: string = task[0].limitDate.toISOString().slice(0, 10).split('-')
            const formattedDate: string = newDate[2] + '/' + newDate[1] + '/' + newDate[0]
            res.status(200).send({ ...task[0], limitDate: formattedDate })
        } else {
            throw new Error('ID inválido')
        }
    } catch (error: any) {
        res.status(errorCode).send(error.sqlMessage || error.message)
    }
}