export class Product {
    constructor(
        protected id: string,
        protected name: string,
        protected description: string,
        protected price: number
    ) {}

    public getId(): string {
        return this.id
    }

    public getName(): string {
        return this.name
    }

    public getDescription(): string {
        return this.description
    }

    public getPrice(): number {
        return this.price
    }
}