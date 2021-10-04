import { Request, Response } from "express"
import selectUsersOrdered from "../data/selectUsersOrdered"


export default async function getUsersOrdered(req: Request, res: Response): Promise<void> {
    let sort: string = (req.query.sort as string)?.toLowerCase()
    let order: string = (req.query.order as string)?.toLowerCase()

    try {
        if (sort !== "name" && sort !== "type") {
            sort = "email"
        }

        if (order !== "asc" && order !== "desc") {
            order = "asc";
        }

        const users = await selectUsersOrdered(sort, order)

        if (!users.length) {
            res.statusCode = 404
            throw new Error("No users found")
        }

        console.log(sort)

        res.status(200).send(users)

    } catch (error: any) {
        res.send(error.sqlMessage || error.message)
    }
}