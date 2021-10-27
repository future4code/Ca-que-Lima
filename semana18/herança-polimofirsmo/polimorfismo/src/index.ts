import { Client } from "./entities/Client"
import { Commerce } from "./entities/Commerce"
import { Industry } from "./entities/Industry"
import { Place } from "./entities/Place"
import { Residence } from "./entities/Residence"

// Exercício 1
const client : Client = {
    name: "Caíque",
    registrationNumber: 1,
    consumedEnergy: 140,

    calculateBill: () => {
        return 2
    }
}

// Exercício 2
// const tentativa = new Place('209874533')
// a) "Não é possível criar uma instância de uma classe abstrata"
// b) Retirar o abstract?

// Exercício 3
const minhaCasa = new Residence(2, '05050505')
const meuComercio = new Commerce(5, '06060606')
const minhaIndustria = new Industry(37, "07070707")

console.log(minhaCasa.getCep())
console.log(meuComercio.getCep())
console.log(minhaIndustria.getCep())