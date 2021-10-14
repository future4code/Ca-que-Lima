import { BaseDatabase } from "./BaseDatabase"
import { Product } from "../entities/Product"

const productsTable: string = "labecommerce_products"

export class ProductDatabase extends BaseDatabase {
    public async create(product: Product) {
        await BaseDatabase.connection(productsTable).insert(product)
    }

    public async getAll() {
        return BaseDatabase.connection(productsTable).select('id', 'name', 'description', 'price')
    }

    public async deleteById(id: string) {
        await BaseDatabase.connection(productsTable).delete().where({ id })
    }
}