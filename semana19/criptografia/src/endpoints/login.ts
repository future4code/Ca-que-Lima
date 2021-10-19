import { Request, Response } from "express"
import { connection } from "../data/connection"
import { Authenticator } from "../services/Authenticator"
import { HashManager } from "../services/HashGenerator"

export const login = async (req: Request, res: Response) => {
  let errorCode: number = 400
  try {

    // buscar usuário por email
    const { email, password } = req.body

    const [user] = await connection("to_do_list_users").where({ email })

    // conferir se o usuário existe e a senha está correta

    const passwordIsCorrect: boolean = new HashManager().compareHash(password, user.password)

    if (!user || !passwordIsCorrect) {
      errorCode = 401 // "Unauthorized"
      throw new Error("Credenciais inválidas")
    }

    // gerar o token
    const token = new Authenticator().generateToken({
      id: user.id,
      role: user.role
    })

    // enviar a resposta
    res.send({ token })

  } catch (error) {
    res.status(errorCode).send({ message: error.sqlMessage || error.message })
  }
}