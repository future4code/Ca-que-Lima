// export type owl = {

//    name: string
//    weight: number

//    chirp(): void
//    eat(quantity: number): void
//    fly(time: number): void
// }

export class Owl {

   private name: string
   private weight: number

   public getName = (): string => this.name
   public getWeight = (): number => this.weight

   public setName(newName: string) {
      this.name = newName
   }

   chirp(): void {
      console.log("Hu Hu 🦉 ")
   }

   eat(quantity: number) {
      this.weight += quantity
   }

   fly(time: number) {
      console.log(`${this.name} levantou voo`)
      setTimeout(() => {
         this.weight -= time
         console.log(`
            ${this.name} pousou e agora pesa ${this.weight}
         `)
      }, time * 1000)
   }

   constructor(
      name: string,
      weight: number
   ) {
      this.name = name
      this.weight = weight
   }
}