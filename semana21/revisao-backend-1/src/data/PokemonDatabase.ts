import { BaseDatabase } from "./BaseDatabase"
import { PokemonRepository } from "../business/PokemonRepository"

const pokemonTable: string = "backend1_pokemon"

export class PokemonDatabase extends BaseDatabase implements PokemonRepository {

    public async getById(id: number) {
        return BaseDatabase.connection(pokemonTable).where({ id })
    }

    public async filterPokemon(name: string, type: string) {
        return BaseDatabase.connection(pokemonTable).where(function() {
            this.where('type_1', 'like', `%${type}%`).orWhere('type_2', 'like', `%${type}%`)
        }).andWhere('name', 'like', `%${name}%`)
    }
}