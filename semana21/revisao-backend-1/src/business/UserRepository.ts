import { User } from "../model/Pokemon"
import { UserData } from "../model/Pokemon"

export interface UserRepository {
    create(user: User): Promise<void>
    getAll(): Promise<UserData[]>
    getByEmail(email: string): Promise<UserData[]>
}