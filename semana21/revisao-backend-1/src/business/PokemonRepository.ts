import { Pokemon } from "../model/Pokemon"

export interface PokemonRepository {
    getById(id: number): Promise<Pokemon[]>
    filterPokemon(name: string, type: string): Promise<Pokemon[]>
}