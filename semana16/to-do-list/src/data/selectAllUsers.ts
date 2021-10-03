import { connection } from '../connection'
import { User } from '../types'

export default async function selectAllUsers() {
    const users: User[] = await connection("ToDoListUser").select("id", "nickname").orderBy("id")
    return users
}