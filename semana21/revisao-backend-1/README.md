# LaBook

## Install

```sh
npm install
```

## Run Migrations

```sh
npm run migrations
```

## Run Build

```sh
npm run build
```

## Run Dev

```sh
npm run dev
```

## ESTRUTURA DE DADOS  
  
* ## Pokemon
  * id
  * name
  * pokedex_number
  * img_name
  * generation
  * evolution_stage
  * evolved
  * family_id
  * cross_gen
  * type_1
  * type_2
  * weather_1
  * weather_2
  * stat_total
  * atk
  * def
  * sta
  * legendary
  * acquirable
  * spawns
  * regional
  * ridable
  * hatchable
  * shiny
  * nest
  * is_new
  * not_gettable
  * future_evolve
  * cp_40
  * cp39
 
---


## ENDPOINTS 

* ## Pegar todos os Pokemon
  * Método: GET
  * Path: `/pokemon`
  * Body de Resposta:
    * Um array de Pokemon

* ## Pegar Pokemon pelo id
  * Método: GET
  * Path: `/pokemon/:id`
  * Body de Resposta: (retornar um erro se não encontrar)
    * Um Pokemon

* ## Pegar Pokemon filtrando
  * Método: GET
  * Path: `/pokemon/?name={nome}&type={tipo 1 ou tipo 2}`
  * Apenas aceita nomes e tipos
  * Body de Resposta: (retornar um erro se não encontrar)
    * Um array de Pokemon