import { Pokemon } from "../model/Pokemon"

export interface PokemonRepository {
    getAll(): Promise<Pokemon[]>
    getById(id: number): Promise<Pokemon[]>
    getByType(type: string): Promise<Pokemon[]>
    getByName(name: string): Promise<Pokemon[]>
}