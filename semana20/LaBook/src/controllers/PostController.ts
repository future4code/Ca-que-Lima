import { Request, Response } from "express"
import { PostBusiness } from "../business/PostBusiness"
import { PostInputDTO } from "../model/Post"
import { PostDatabase } from "../data/PostDatabase"

export class PostController {

    private postBusiness: PostBusiness

    constructor() {
        this.postBusiness = new PostBusiness(new PostDatabase())
    }

    public create = async (req: Request, res: Response): Promise<void> => {
        try {

            const token = req.headers.authorization as string

            const input: PostInputDTO = {
                picture: req.body.picture,
                description: req.body.description,
                type: req.body.type
            }

            await this.postBusiness.create(input, token)

            res.status(200).send('Post criado com sucesso')

        } catch(error: any) {
            res.status(error.statusCode).send({ message: error.sqlMessage || error.message })
        }
    }





}