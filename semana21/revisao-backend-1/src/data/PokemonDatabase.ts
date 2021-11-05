import { BaseDatabase } from "./BaseDatabase"
import { PokemonRepository } from "../business/PokemonRepository"

const pokemonTable: string = "backend1_pokemon"

export class PokemonDatabase extends BaseDatabase implements PokemonRepository {

    public async getAll() {
        return BaseDatabase.connection(pokemonTable)
    }

    public async getById(id: number) {
        return BaseDatabase.connection(pokemonTable).where({ id })
    }

    public async getByName(name: string) {
        return BaseDatabase.connection(pokemonTable).where('name', 'like', `%${name}%`)
    }

    public async getByType(type: string) {
        return BaseDatabase.connection(pokemonTable).where({ type_1: type }).orWhere({ type_2: type })
    }
}