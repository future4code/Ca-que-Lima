import { connection } from '../connection'

export default async function selectTaskByIdJoinNickname(id: number): Promise<any> {
    const task = await connection("ToDoListTask")
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
        .from("ToDoListTask").where({ "ToDoListTask.id": id })
    return task
}