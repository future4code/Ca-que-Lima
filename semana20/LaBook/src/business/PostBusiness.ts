import { Post, PostInputDTO, PostOutputDTO } from "../model/Post"
import { CustomError } from "../errors/CustomError"
import { IdGenerator } from "../services/IdGenerator"
import { Authenticator } from "../services/Authenticator"
import { PostRepository } from "./PostRepository"

export class PostBusiness {
    private postDatabase: PostRepository

    constructor(postDatabaseImp: PostRepository) {
        this.postDatabase = postDatabaseImp
    }

    public create = async (input: PostInputDTO, token: string): Promise<void> => {

        const { picture, description, type } = input

        if (!token) {
            throw new CustomError('Você deve estar logado para postar', 403)
        }

        if (!picture || !description || !type) {
            throw new CustomError('Por favor preencha todos os campos', 400)
        }

        if (type !== 'normal' && type !== 'evento') {
            throw new CustomError("O tipo tem que ser 'normal' ou 'evento'", 400)
        }

        const tokenData = new Authenticator().getTokenData(token)

        const userId = tokenData?.id as string

        const id: string = new IdGenerator().generateId()

        const date = new Date().toISOString().slice(0, 10)

        const post = new Post(
            id,
            picture,
            description,
            date,
            type,
            userId
        )

        await this.postDatabase.create(post)
    }


    public getPostById = async (id: string): Promise<PostOutputDTO> => {
        const post = await this.postDatabase.getPostById(id)
        return post[0]
    }

}