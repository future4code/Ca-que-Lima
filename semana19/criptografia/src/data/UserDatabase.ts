import { BaseDatabase } from "./BaseDatabase"
import { user } from "../types"

const userTable: string = "to_do_list_users"

export class UserDatabase extends BaseDatabase {
    public async create(user: user) {
        await BaseDatabase.connection(userTable).insert(user)
    }

    public async getAll() {
        return BaseDatabase.connection(userTable)
    }

    public async deleteById(id: string) {
        await BaseDatabase.connection(userTable).delete().where({ id })
    }
}