export class Transaction {
    private date: string;
    private value: number;
    private description: string;

    constructor(date: string, value: number, description: string) {
        this.date = date;
        this.value = value;
        this.description = description
    }

    public getDate = (): string => this.date
    public getValue = (): number => this.value
    public getDescription = (): string => this.description
}

export type transaction = {
    date: string,
    value: number,
    description: string
}