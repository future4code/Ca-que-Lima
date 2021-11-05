import app  from "./app"
import { pokemonRouter } from "./controllers/routers/PokemonRouter"

app.use('/pokemon', pokemonRouter)