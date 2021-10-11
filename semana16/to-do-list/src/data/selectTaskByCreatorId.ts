import { connection } from '../connection'

export default async function selectTaskByCreatorId(id: number): Promise<any> {
    const tasks = await connection("ToDoListTask")
        .join("ToDoListUser", "creator_user_id", "=", "ToDoListUser.id")
        .select(
            "ToDoListTask.id",
            "title",
            "description",
            "status",
            "limit_date as limitDate",
            "creator_user_id as creatorUserId",
            "nickname as creatorUserNickname"
        )
        .from("ToDoListTask").where({ "ToDoListUser.id": id })
    return tasks
}