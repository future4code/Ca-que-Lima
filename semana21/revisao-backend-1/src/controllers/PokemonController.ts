import { Request, Response } from "express"
import { PokemonBusiness } from "../business/PokemonBusiness"
import { PokemonDatabase } from "../data/PokemonDatabase"

export class PokemonController {

    private pokemonBusiness: PokemonBusiness

    constructor() {
        this.pokemonBusiness = new PokemonBusiness(new PokemonDatabase())
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

    public filterPokemon = async (req: Request, res: Response): Promise<void> => {
        try {
            
            const name = (req.query.name as string || "")
            const type = (req.query.type as string || "")

            const result = await this.pokemonBusiness.filterPokemon(name, type)

            res.status(200).send(result)

        } catch (error: any) {
            res.status(error.statusCode).send(error.sqlMessage || error.message)
        }
        
    }
}