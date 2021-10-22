import { Product } from "./Product"

export class Ticket extends Product {
    constructor(
        id: string,
        name: string,
        description: string,
        price: number,
        private origin: string,
        private destination: string
    ) {
        super(id, name, description, price)
    }

    public getOrigin(): string {
        return this.origin
    }

    public getDestination(): string {
        return this.destination
    }
}