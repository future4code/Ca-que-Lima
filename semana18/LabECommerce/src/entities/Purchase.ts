export class Purchase {
    constructor(
        private id: string,
        private quantity: number,
        private total_price: number,
        private user_id: string,
        private product_id: string
    ) {}

    public getId(): string {
        return this.id
    }

    public getQuantity(): number {
        return this.quantity
    }

    public getTotalPrice(): number {
        return this.total_price
    }

    public getUserId(): string {
        return this.user_id
    }

    public getProductId(): string {
        return this.product_id
    }
}