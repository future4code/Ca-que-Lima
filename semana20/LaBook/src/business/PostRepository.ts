import { Post } from "../model/Post"

export interface PostRepository {
    create(post: Post): Promise<void>
    getPostById(id: string): Promise<Post[]>
}