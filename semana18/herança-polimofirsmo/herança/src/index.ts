import { Customer } from "./entities/Customer"
import { User } from "./entities/User"

const eu = new User('001', 'caique@email.com', 'Caíque', '123456')

// Exercício 1
// a) Não do jeito que está, seria necessário um método getter para a password
// b) Apneas uma vez

const cliente = new Customer('001', 'cliente@email.com', 'Cliente 1', '123456', 'mastercard')

// Exercício 2
// a) Apenas uma vez
// b) Apenas uma vez também. Pq como Customer é uma classe filha de User, foi o usado o constructor do pai para id, email, nome e senha, e o constructor próprio para o cartão de crédito.

// Exercício 3
// a)

console.log(cliente.getId())
console.log(cliente.getName())
console.log(cliente.getEmail())
console.log(cliente.getCreditCard())
console.log(cliente.purchaseTotal)

// b) Não, pq é private e não tem um método get para ela.

// Exercício 4

cliente.introduceYourself()