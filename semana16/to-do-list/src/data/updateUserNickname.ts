import { connection } from '../connection'

export default async function updateUserNickname(id: number, nickname: string): Promise<any> {
    await connection("ToDoListUser").where({ id: id }).update({ nickname: nickname })
}