import { Request, Response } from "express"
import { PokemonBusiness } from "../business/PokemonBusiness"
import { PokemonDatabase } from "../data/PokemonDatabase"

export class PokemonController {

    private pokemonBusiness: PokemonBusiness

    constructor() {
        this.pokemonBusiness = new PokemonBusiness(new PokemonDatabase())
    }

    public getAll = async (req: Request, res: Response): Promise<void> => {
        try {
            const allPokemon = await this.pokemonBusiness.getAll()
            res.status(200).send(allPokemon)
        } catch (error: any) {
            res.status(error.statusCode).send(error.sqlMessage || error.message)
        }
    }

    public getById = async (req: Request, res: Response): Promise<void> => {
        try {

            const id: number = Number(req.params.id)

            const pokemon = await this.pokemonBusiness.getById(id)

            res.status(200).send(pokemon[0])

        } catch (error: any) {
            res.status(error.statusCode).send(error.sqlMessage || error.message)
        }
    }

    public getByName = async (req: Request, res: Response): Promise<void> => {
        
    }

    public getByType = async (req: Request, res: Response): Promise<void> => {

    }
}