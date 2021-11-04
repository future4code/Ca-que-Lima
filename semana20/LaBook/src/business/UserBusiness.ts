import { LoginInputDTO, User, UserInputDTO } from "../model/User"
import { CustomError } from "../errors/CustomError"
import { HashManager } from "../services/HashManager"
import { IdGenerator } from "../services/IdGenerator"
import { Authenticator } from "../services/Authenticator"
import { UserRepository } from "./UserRepository"
import { UserData } from "../model/User"

export class UserBusiness {

    private userDatabase: UserRepository

    constructor(userDatabaseImp: UserRepository) {
        this.userDatabase = userDatabaseImp
    }

    public signUp = async (input: UserInputDTO): Promise<string> => {
        const { name, email, password } = input

        if (!name || !email || !password) {
            throw new CustomError('Por favor preencha todos os campos', 400)
        }

        const id: string = new IdGenerator().generateId()

        const cypherPassword = new HashManager().generateHash(password)

        const user = new User(
            id,
            name,
            email,
            cypherPassword
        )

        await this.userDatabase.create(user)

        const token: string = new Authenticator().generateToken({ id })

        return token
    }

    public logIn = async (input: LoginInputDTO): Promise<string> => {
        const { email, password } = input

        if (!email || !password) {
            throw new CustomError("'Email' e 'senha' obrigatórios", 400)
        }

        const [user] = await this.userDatabase.getByEmail(email)

        if (!user) {
            throw new CustomError('Usuário não encontrado ou senha incorreta', 403)
        }

        const passwordIsCorrect: boolean = new HashManager().compareHash(password, user.password)

        if (!passwordIsCorrect) {
            throw new CustomError('Usuário não encontrado ou senha incorreta', 403)
        }

        const token: string = new Authenticator().generateToken({ id: user.id })

        return token
    }

    public getAll = async (token: string): Promise<UserData[]> => {

        const tokenData = new Authenticator().getTokenData(token)
        const allUsers: UserData[] = await this.userDatabase.getAll()

        if (tokenData === null) {
            throw new CustomError('Token inválido', 400)
        }

        return allUsers
    }

}