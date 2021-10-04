import { Request, Response } from "express"
import selectUsersByName from "../data/selectUsersByName"


export default async function getUsersByName(req: Request, res: Response): Promise<void> {
    const name: string = req.query.name as string

    try {
        if (name === "") {
            res.statusCode = 400
            throw new Error("Please include a name")
        }


        const users = await selectUsersByName(name)

        if (!users.length) {
            res.statusCode = 404
            throw new Error("No users found")
        }

        res.status(200).send(users)

    } catch (error: any) {
        res.send(error.sqlMessage || error.message)
    }
}