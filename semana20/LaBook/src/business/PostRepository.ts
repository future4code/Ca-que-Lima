import { Post, PostOutputDTO } from "../model/Post"

export interface PostRepository {
    create(post: Post): Promise<void>
    getPostById(id: string): Promise<PostOutputDTO[]>
}