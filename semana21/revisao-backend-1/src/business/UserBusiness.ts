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

}