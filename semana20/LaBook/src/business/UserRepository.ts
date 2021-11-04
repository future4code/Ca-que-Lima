import { User } from "../model/User"
import { UserData } from "../model/User"

export interface UserRepository {
    create(user: User): Promise<void>
    getAll(): Promise<UserData[]>
    getByEmail(email: string): Promise<UserData[]>
}