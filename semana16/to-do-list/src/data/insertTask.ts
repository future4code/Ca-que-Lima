import { connection } from '../connection'

export default async function insertTask(title: string, description: string, limitDate: string, creatorUserId: string): Promise<any> {
    await connection("ToDoListTask").insert({
        title,
        description,
        limit_date: limitDate,
        creator_user_id: Number(creatorUserId)
    })
}