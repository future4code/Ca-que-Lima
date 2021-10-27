import { Transaction } from "./Transaction";

export class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    private transactions: Transaction[] = [];

    constructor(cpf: string, name: string, age: number) {
        console.log("Chamando o construtor da classe UserAccount")
        this.cpf = cpf;
        this.name = name;
        this.age = age;
    }

    public getCPF = (): string => this.cpf
    public getName = (): string => this.name
    public getAge = (): number => this.age
    public getBalance = (): number => this.balance
    public getTransactions = (): Transaction[] => this.transactions

    public addTransaction = (transaction: Transaction): void => {
        console.log(`O salto antigo é: ${this.balance}`)
        this.transactions = [...this.transactions, transaction]
        const value = transaction.getValue()
        this.balance += value
        console.log(`O saldo novo é: ${this.balance}`)
    }
    
}