import { BaseDatabase } from "./BaseDatabase"
import { json_data } from "../services/dataConverter"

class Migrations extends BaseDatabase {
    public static async main() {
        try {
            await BaseDatabase.connection.raw(`
                CREATE TABLE IF NOT EXISTS backend1_pokemon (
                    id INT PRIMARY KEY AUTO_INCREMENT,
                    name VARCHAR(255) NOT NULL UNIQUE,
                    pokedex_number INT NOT NULL,
                    img_name VARCHAR(255) NOT NULL,
                    generation INT NOT NULL,
                    evolution_stage VARCHAR(255),
                    evolved INT NOT NULL,
                    family_id INT,
                    cross_gen INT NOT NULL,
                    type_1 VARCHAR(255) NOT NULL,
                    type_2 VARCHAR(255),
                    weather_1 VARCHAR(255) NOT NULL,
                    weather_2 VARCHAR(255),
                    stat_total INT NOT NULL,
                    atk INT NOT NULL,
                    def INT NOT NULL,
                    sta INT NOT NULL,
                    legendary INT NOT NULL,
                    acquirable INT NOT NULL,
                    spawns INT NOT NULL,    
                    regional INT NOT NULL,    
                    ridable INT NOT NULL,
                    hatchable INT NOT NULL,
                    shiny INT NOT NULL,
                    nest INT NOT NULL,
                    is_new INT NOT NULL,
                    not_gettable INT NOT NULL,
                    future_evolve INT NOT NULL,
                    cp_40 INT NOT NULL,
                    cp_39 INT NOT NULL
                );
            `)

            console.log('Tabela criada')

            let allPokemon: any = []
            
            json_data.forEach((pokemon: any) => {
                const eachPokemon = {
                    name: pokemon.Name,
                    pokedex_number: pokemon['Pokedex Number'],
                    img_name: pokemon['Img name'],
                    generation: pokemon.Generation,
                    evolution_stage: pokemon['Evolution Stage'],
                    evolved: pokemon.Evolved,
                    family_id: pokemon.FamilyID,
                    cross_gen: pokemon['Cross Gen'],
                    type_1: pokemon['Type 1'],
                    type_2: pokemon['Type 2'],
                    weather_1: pokemon['Weather 1'],
                    weather_2: pokemon['Weather 2'],
                    stat_total: pokemon['STAT TOTAL'],
                    atk: pokemon.ATK,
                    def: pokemon.DEF,
                    sta: pokemon.STA,
                    legendary: pokemon.Legendary,
                    acquirable: pokemon.Aquireable,
                    spawns: pokemon.Spawns,
                    regional: pokemon.Regional,
                    ridable: pokemon.Raidable,
                    hatchable: pokemon.Hatchable,
                    shiny: pokemon.Shiny,
                    nest: pokemon.Nest,
                    is_new: pokemon.New,
                    not_gettable: pokemon['Not-Gettable'],
                    future_evolve: pokemon['Future Evolve'],
                    cp_40: pokemon['100% CP @ 40'],
                    cp_39: pokemon['100% CP @ 39']
                }
                    
                allPokemon.push(eachPokemon)
            })

            await BaseDatabase.connection('backend1_pokemon').insert(allPokemon)

            console.log('Pokemon na tabela')

        } catch (error) {
            console.log(error)
        } finally {
            BaseDatabase.connection.destroy()
        }
    }
}

Migrations.main()