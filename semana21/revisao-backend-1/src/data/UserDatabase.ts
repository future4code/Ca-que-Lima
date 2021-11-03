import { BaseDatabase } from "./BaseDatabase"
import { User } from "../model/Pokemon"
import { UserRepository } from "../business/UserRepository"

const userTable: string = "labook_users"

export class UserDatabase extends BaseDatabase implements UserRepository {
    public async create(user: User) {
        await BaseDatabase.connection(userTable).insert(user)
    }

    public async getAll() {
        return BaseDatabase.connection(userTable)
    }

    public async getByEmail(email: string) {
        return BaseDatabase.connection(userTable).where({ email })
    }
}