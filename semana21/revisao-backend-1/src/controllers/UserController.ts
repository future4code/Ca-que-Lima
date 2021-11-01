import { Request, Response } from "express"
import { UserBusiness } from "../business/UserBusiness"
import { LoginInputDTO, UserInputDTO } from "../model/User"
import { UserDatabase } from "../data/UserDatabase"

export class UserController {

    private userBusiness: UserBusiness

    constructor() {
        this.userBusiness = new UserBusiness(new UserDatabase())
    }
}