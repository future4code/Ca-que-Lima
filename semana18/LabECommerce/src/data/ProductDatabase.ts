import { BaseDatabase } from "./BaseDatabase"
import { Product } from "../entities/Product"

const productsTable: string = "labecommerce_products"

export class ProductDatabase extends BaseDatabase {
    public async create(product: Product) {
        await BaseDatabase.connection(productsTable).insert(product)
    }

    public async getAll() {
        return BaseDatabase.connection(productsTable)
    }
    
    public async getById(id: string) {
        return BaseDatabase.connection(productsTable).where({ id })
    }

    public async deleteById(id: string) {
        await BaseDatabase.connection(productsTable).delete().where({ id })
    }
}