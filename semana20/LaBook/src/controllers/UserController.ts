import { Request, Response } from "express"
import { UserBusiness } from "../business/UserBusiness"
import { LoginInputDTO, UserInputDTO } from "../model/User"
import { UserDatabase } from "../data/UserDatabase"

export class UserController {

    private userBusiness: UserBusiness

    constructor() {
        this.userBusiness = new UserBusiness(new UserDatabase())
    }

    public signUp = async (req: Request, res: Response): Promise<void> => {
        try {

            const input: UserInputDTO =  {
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            }

            const token = await this.userBusiness.signUp(input)

            res.status(200).send({ message: "Usuário criado!", token })

        } catch (error: any) {
            res.status(error.statusCode).send({ message: error.sqlMessage || error.message })
        }
    }

    public logIn = async (req: Request, res: Response): Promise<void> => {
        try {

            const input: LoginInputDTO = {
                email: req.body.email,
                password: req.body.password
            }

            const token = await this.userBusiness.logIn(input)

            res.status(200).send({ token })

        } catch (error: any) {
            res.status(error.statusCode).send({ message: error.sqlMessage || error.message })
        }
    }

    public getAll = async (req: Request, res: Response): Promise<void> => {
        try {

            const token = req.headers.authorization as string
            const users = await this.userBusiness.getAll(token)

            res.status(200).send({ users })

        } catch (error: any) {
            res.status(error.statusCode).send({ message: error.sqlMessage || error.message })
        }
    }
}