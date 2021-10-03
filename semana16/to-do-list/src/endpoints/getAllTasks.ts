import { Request, Response } from 'express'
import selectAllTasks from '../data/selectAllTasks'

export default async function getAllTasks(req: Request, res: Response): Promise<any> {
    try {
        const tasks = await selectAllTasks()
        res.status(200).send(tasks)
    } catch (error: any) {
        res.send(error.sqlMessage || error.message)
    }
}