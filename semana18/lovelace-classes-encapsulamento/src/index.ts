// import { Dog } from "./dog"
// import { Owl } from "./owl"
import { Transaction } from "./Transaction"
import { UserAccount } from "./UserAccount"

// const pluto: Dog = new Dog("Pluto", 10)

// const hedwig: Owl = new Owl("Hedwig", 7)


const Caíque = new UserAccount("123.123.123-68", "Caíque Lima", 27)
const deposit: Transaction = new Transaction("11/10/2021", 50, "Depósito em dinheiro")
Caíque.addTransaction(deposit)
console.log(Caíque.getTransactions())


// Exercício 1
// a) Serve para passar alguns parâmetros para a instância de uma classe quando ela é criada.
// b) Apenas uma vez.
// c) Através de getters e setters.