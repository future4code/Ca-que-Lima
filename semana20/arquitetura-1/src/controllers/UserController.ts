import { Request, Response } from "express"
import { UserBusiness } from "../business/UserBusiness"

export class UserController {
    public static signUp = async (req: Request, res: Response): Promise<void> => {
        try {

            const input = req.body
            const token = await new UserBusiness().signUp(input)

            res.status(200).send({ message: "Usuário criado!", token })

        } catch (error: any) {
            res.status(error.statusCode).send({ message: error.sqlMessage || error.message })
        }
    }

    public static logIn = async (req: Request, res: Response): Promise<void> => {
        try {

            const input = req.body
            const token = await new UserBusiness().logIn(input)

            res.status(200).send({ token })

        } catch (error: any) {
            res.status(error.statusCode).send({ message: error.sqlMessage || error.message })
        }
    }

    public static getAll = async (req: Request, res: Response): Promise<void> => {
        try {

            const token = req.headers.authorization as string
            const users = await new UserBusiness().getAll(token)

            res.status(200).send({ users })

        } catch (error: any) {
            res.status(error.statusCode).send({ message: error.sqlMessage || error.message })
        }
    }

    public static deleteById = async (req: Request, res: Response): Promise<void> => {
        try {

            const id: string = req.params.id
            const token = req.headers.authorization as string
            await new UserBusiness().deleteById(id, token)

            res.status(200).send('Usuário apagado com sucesso')

        } catch (error: any) {
            res.status(error.statusCode).send({ message: error.sqlMessage || error.message })
        }
    }

}