import { connection } from "./connection"

export default async function selectUsersPages(limit: number, offset: number): Promise<any> {
   const result = await connection('aula49_exercicio').limit(limit).offset(offset)
   return result
}