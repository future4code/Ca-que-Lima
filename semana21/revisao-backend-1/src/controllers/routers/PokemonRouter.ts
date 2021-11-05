import { Router } from "express"
import { PokemonController } from "../PokemonController"

const pokemonController = new PokemonController()

export const pokemonRouter = Router()

pokemonRouter.get('/all', pokemonController.getAll)
pokemonRouter.get('/:id', pokemonController.getById)