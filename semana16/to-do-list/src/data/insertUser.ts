import { connection } from '../connection'

export default async function insertUser(name: string, nickname: string, email: string): Promise<any> {
    await connection("ToDoListUser").insert({ name, nickname, email })
}