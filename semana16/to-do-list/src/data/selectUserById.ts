import { connection } from '../connection'
import { User } from '../types'

export default async function selectUserById(id: number) {
    const user: User[] = await connection("ToDoListUser").select("id", "nickname").where({ id: id })
    return user[0]
}