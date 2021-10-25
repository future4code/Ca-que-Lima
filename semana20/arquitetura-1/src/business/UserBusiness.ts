import { UserDatabase } from "../data/UserDatabase"
import { User } from "../entities/Users"
import { CustomError } from "../errors/CustomError"
import { HashManager } from "../services/HashManager"
import { IdGenerator } from "../services/IdGenerator"
import { Authenticator } from "../services/Authenticator"
import { user } from "../types"

export class UserBusiness {

    public signUp = async (input: any) => {
        const { name, email, password, role } = input

        if (!name || !email || !password || !role) {
            throw new CustomError('Por favor preencha todos os campos', 400)
        }

        const id: string = new IdGenerator().generateId()

        const cypherPassword = new HashManager().generateHash(password)

        const user = new User(
            id,
            name,
            email,
            cypherPassword,
            role
        )

        const userDatabase = new UserDatabase()
        await userDatabase.create(user)

        const token: string = new Authenticator().generateToken({ id, role })

        return token
    }

    public logIn = async (input: any): Promise<string> => {
        const { email, password } = input

        if (!email || !password) {
            throw new CustomError("'Email' e 'senha' obrigatórios", 400)
        }

        const [user] = await new UserDatabase().getByEmail(email)

        if (!user) {
            throw new CustomError('Usuário não encontrado ou senha incorreta', 403)
        }

        const passwordIsCorrect: boolean = new HashManager().compareHash(password, user.password)

        if (!passwordIsCorrect) {
            throw new CustomError('Usuário não encontrado ou senha incorreta', 403)
        }

        const token: string = new Authenticator().generateToken({ id: user.id, role: user.role })

        return token
    }

    public getAll = async (token: string): Promise<user[]> => {

        const tokenData = new Authenticator().getTokenData(token)
        const allUsers: user[] = await new UserDatabase().getAll()

        if (tokenData === null) {
            throw new CustomError('Token inválido', 400)
        }

        return allUsers
    }

}