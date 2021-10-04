import { connection } from "./connection"

export default async function selectAllUsers(): Promise<any> {
   const result = await connection('aula49_exercicio')
   return result
}