import { connection } from "./connection"

export default async function selectUsersByType(type: string): Promise<any> {
   const result = await connection('aula49_exercicio').where('type', 'like', `${type}`)
   return result
}