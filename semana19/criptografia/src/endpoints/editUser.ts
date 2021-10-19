import { Request, Response } from "express"
import { connection } from "../data/connection"
import { Authenticator } from "../services/Authenticator"
import { authenticationData } from "../types"

export default async function createUser(req: Request, res: Response): Promise<void> {
   let errorCode: number = 400
   try {

      const { name, nickname } = req.body
      const token = req.headers.authorization

      const tokenData: authenticationData = new Authenticator().getTokenData(token)

      if (!tokenData) {
         errorCode = 401
         throw new Error("Token inválido, expirado ou ausente da chave 'Authorization' do cabeçalho")
      }

      if (tokenData.role !== "ADMIN") {
         errorCode = 403
         throw new Error("Somente administradores podem alterar seu perfil")
      }

      if (!name && !nickname) {
         errorCode = 422
         throw new Error("Informe o(s) novo(s) 'name' ou 'nickname'")
      }

      await connection('to_do_list_users').update({ name, nickname }).where({ id: tokenData.id })

      res.status(200).send("Sucesso")

   } catch (error) {
      res.status(errorCode).send({ message: error.sqlMessage || error.message })
   }
}