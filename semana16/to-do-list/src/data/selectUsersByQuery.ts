import { connection } from "../connection"

export default async function selectUsersByQuery(string: string): Promise<any> {
    const users = await connection("ToDoListUser")
        .where("nickname", "like", `%${string}%`)
        .orWhere("email", "like", `%${string}%`)
        .select("id", "nickname")
    
    return users
}