import { connection } from '../connection'

export default async function selectAllTasks() {
    const tasks = await connection("ToDoListTask")
    return tasks
}