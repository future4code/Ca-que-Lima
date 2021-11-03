export class Pokemon {
    constructor(
        private id: number,
        private name: string,
        private pokedex_number: number,
        private img_name: string,
        private generation: number,
        private evolution_stage: number,
        private evolved: number,
        private family_id: number,
        private cross_gen: number,
        private type_1: string,
        private type_2: string,
        private weather_1: string,
        private weather_2: string,
        private stat_total: number,
        private atk: number,
        private def: number,
        private sta: number,
        private legendary: number,
        private acquirable: number,
        private spawns: number,    
        private regional: number,    
        private ridable: number,
        private hatchable: number,
        private shiny: number,
        private nest: number,
        private is_new: number,
        private not_gettable: number,
        private future_evolve: number,
        private cp_40: number,
        private cp_39: number
    ) { }

    public getId = (): number => this.id
    public getName = (): string => this.name
    public getPokedexNumber = (): number => this.pokedex_number
    public getImgName = (): string => this.img_name
    public getGeneration = (): number => this.generation
    public getEvolutionStage = (): number => this.evolution_stage
    public getEvolved = (): number => this.evolved
    public getFamilyId = (): number => this.family_id
    public getCrossGen = (): number => this.cross_gen
    public getType1 = (): string => this.type_1
    public getType2 = (): string => this.type_2
    public getWeather1 = (): string => this.weather_1
    public getWeather2 = (): string => this.weather_2
    public getStatTotal = (): number => this.stat_total
    public getAtk = (): number => this.atk
    public getDef = (): number => this.def
    public getSta = (): number => this.sta
    public getLegendary = (): number => this.legendary
    public getAcquirable = (): number => this.acquirable
    public getSpawns = (): number => this.spawns
    public getRegional = (): number => this.regional
    public getRidable = (): number => this.ridable
    public getHatchable = (): number => this.hatchable
    public getShiny = (): number => this.shiny
    public getNest = (): number => this.nest
    public getIsNew = (): number => this.is_new
    public getNotGettable = (): number => this.not_gettable
    public getFutureEvolve = (): number => this.future_evolve
    public getCp40 = (): number => this.cp_40
    public getCp39 = (): number => this.cp_39    
}