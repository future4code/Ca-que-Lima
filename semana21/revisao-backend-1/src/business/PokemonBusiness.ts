import { Pokemon } from "../model/Pokemon"
import { CustomError } from "../errors/CustomError"
import { PokemonRepository } from "./PokemonRepository"

export class PokemonBusiness {

    private pokemonDatabase: PokemonRepository

    constructor(pokemonDatabaseImp: PokemonRepository) {
        this.pokemonDatabase = pokemonDatabaseImp
    }

    public getById = async (id: number): Promise<Pokemon[]> => {

        const pokemon = await this.pokemonDatabase.getById(id)

        if (!pokemon.length) {
            throw new CustomError('Nenhum pokemon encontrado', 404)
        }

        return pokemon
    }

    public filterPokemon = async (name: string, type: string): Promise<Pokemon[]> => {

        const result = await this.pokemonDatabase.filterPokemon(name, type)

        if (!result.length) {
            throw new CustomError('Nenhum pokemon encontrado', 404)
        }

        return result
    }

}