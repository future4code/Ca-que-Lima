import { Request, Response } from "express"
import selectUsersPages from "../data/selectUsersPages"


export default async function getUsersPages(req: Request, res: Response): Promise<void> {
    let page: number = Number(req.params.page)

    try {

        if (page < 1) {
            page = 1
        }

        const limit: number = 5
        const offset: number = limit * (page - 1)

        const users = await selectUsersPages(limit, offset)

        if (!users.length) {
            res.statusCode = 404
            throw new Error("No users found")
        }

        res.status(200).send(users)

    } catch (error: any) {
        res.send(error.sqlMessage || error.message)
    }
}