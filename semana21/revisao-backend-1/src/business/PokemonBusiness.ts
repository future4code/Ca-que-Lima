import { Pokemon } from "../model/Pokemon"
import { CustomError } from "../errors/CustomError"
import { PokemonRepository } from "./PokemonRepository"

export class PokemonBusiness {

    private pokemonDatabase: PokemonRepository

    constructor(pokemonDatabaseImp: PokemonRepository) {
        this.pokemonDatabase = pokemonDatabaseImp
    }

    public getAll = async (): Promise<Pokemon[]> => {

        const allPokemon = await this.pokemonDatabase.getAll()
        return allPokemon
    }

    public getById = async (id: number): Promise<Pokemon[]> => {

        const pokemon = await this.pokemonDatabase.getById(id)

        if (!pokemon.length) {
            throw new CustomError('Nenhum pokemon encontrado', 404)
        }

        return pokemon
    }

}