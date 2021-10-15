import { BaseDatabase } from "./BaseDatabase"
import { Purchase } from "../entities/Purchase"

const purchasesTable: string = "labecommerce_purchases"

export class PurchaseDatabase extends BaseDatabase {
    public async create(purchase: Purchase) {
        await BaseDatabase.connection(purchasesTable).insert(purchase)
    }

    public async getAll() {
        return BaseDatabase.connection(purchasesTable)
    }

    public async deleteById(id: string) {
        await BaseDatabase.connection(purchasesTable).delete().where({ id })
    }
}