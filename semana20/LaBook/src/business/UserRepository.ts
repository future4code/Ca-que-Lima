import { User } from "../model/User"
import { user } from "../types"

export interface UserRepository {
    create(user: User): Promise<void>
    getAll(): Promise<user[]>
    getByEmail(email: string): Promise<user[]>
}