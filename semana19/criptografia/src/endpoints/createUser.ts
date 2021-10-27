import { Request, Response } from "express"
import { connection } from "../data/connection"
import { Authenticator } from "../services/Authenticator"
import { IdGenerator } from "../services/IdGenerator"
import { HashManager } from "../services/HashGenerator"
import { user, USER_ROLES } from "../types"

export default async function createUser(req: Request, res: Response): Promise<void> {
  let errorCode: number = 400
  try {
    const { name, nickname, email, password, role } = req.body

    if (!name || !nickname || !email || !password) {
      errorCode = 422
      throw new Error("Preencha os campos 'name', 'nickname', 'password' e 'email'")
    }

    if (!(role in USER_ROLES)) {
      errorCode = 422
      throw new Error("'role' deve ser 'NORMAL' ou 'ADMIN'")
    }

    const user = await connection('to_do_list_users').where({ email })

    if (user) {
      errorCode = 409
      throw new Error('Email já cadastrado')
    }

    const id: string = new IdGenerator().generateId()

    const cipherPassword: string = new HashManager().generateHash(password)

    const newUser: user = { id, name, nickname, email, password: cipherPassword, role }

    await connection('to_do_list_users').insert(newUser)

    const token = new Authenticator().generateToken({ id, role })

    res.status(201).send({ newUser, token })

  } catch (error) {
    res.status(errorCode).send({ message: error.sqlMessage || error.message })
  }
}