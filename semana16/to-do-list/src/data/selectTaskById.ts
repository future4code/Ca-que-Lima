import { connection } from '../connection'

export default async function selectTaskById(id: number): Promise<any> {
    const task = await connection("ToDoListTask").where({ id: id })
    return task[0]
}