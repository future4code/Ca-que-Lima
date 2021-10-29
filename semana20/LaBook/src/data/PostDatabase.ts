import { BaseDatabase } from "./BaseDatabase"
import { Post } from "../model/Post"
import { PostRepository } from "../business/PostRepository"

const postTable: string = "labook_posts"

export class PostDatabase extends BaseDatabase implements PostRepository {
    public async create(post: Post) {
        await BaseDatabase.connection(postTable).insert(post)
    }

    public async getPostById(id: string) {
        return BaseDatabase.connection(postTable).where({ id })
    }
}