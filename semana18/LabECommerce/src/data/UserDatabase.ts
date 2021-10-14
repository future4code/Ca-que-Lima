import { BaseDatabase } from "./BaseDatabase"
import { User } from "../entities/User"

const userTable: string = "labecommerce_users"

export class UserDatabase extends BaseDatabase {
    public async create(user: User) {
        await BaseDatabase.connection(userTable).insert(user)
    }

    public async getAll() {
        return BaseDatabase.connection(userTable)
    }

    public async deleteById(id: string) {
        await BaseDatabase.connection(userTable).delete().where({ id })
    }
}