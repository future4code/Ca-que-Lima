import { connection } from '../connection'

export default async function updateUserName(id: number, name: string): Promise<any> {
    await connection("ToDoListUser").where({ id: id }).update({ name: name })
}