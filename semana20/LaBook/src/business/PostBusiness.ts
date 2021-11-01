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

        if (!post.length) {
            throw new CustomError('Post não encontrado', 404)
        }

        const newDate = post[0].creation_date.toISOString().slice(0, 10).split('-')

        const formattedDate: string = newDate[2] + '/' + newDate[1] + '/' + newDate[0]

        const postToReturn: PostOutputDTO = {
            id: post[0].id,
            picture: post[0].picture,
            description: post[0].description, 
            creationDate: formattedDate,
            type: post[0].type,
            userId: post[0].user_id
        }

        return postToReturn
    }

}