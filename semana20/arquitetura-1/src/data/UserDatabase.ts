import { BaseDatabase } from "./BaseDatabase"
import { User } from "../entities/Users"

const userTable: string = "User_Arq"

export class UserDatabase extends BaseDatabase {
    public async create(user: User) {
        await BaseDatabase.connection(userTable).insert(user)
    }

    public async getAll() {
        return BaseDatabase.connection(userTable)
    }

    public async getByEmail(email: string) {
        return BaseDatabase.connection(userTable).where({ email })
    }

    public async deleteById(id: string) {
        await BaseDatabase.connection(userTable).delete().where({ id })
    }
}