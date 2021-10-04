import { Request, Response } from "express"
import selectUsersByType from "../data/selectUsersByType"


export default async function getUsersByType(req: Request, res: Response): Promise<void> {
    const type: string = req.params.type

    try {
        if (type === "") {
            res.statusCode = 400
            throw new Error("Please include a type")
        }

        const users = await selectUsersByType(type)

        if (!users.length) {
            res.statusCode = 404
            throw new Error("Invalid type")
        }

        res.status(200).send(users)

    } catch (error: any) {
        res.send(error.message || error.sqlMessage)
    }
}