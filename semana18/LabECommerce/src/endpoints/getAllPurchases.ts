import { Request, Response } from "express"
import { Purchase } from "../entities/Purchase"
import { PurchaseDatabase } from "../data/PurchaseDatabase"

export default async function getAllPurchases(req: Request, res: Response): Promise<void> {
    let errorCode: number = 400

    try {

        const purchaseDatabase = new PurchaseDatabase()
        const purchasesDB = await purchaseDatabase.getAll()

        const allPurchases = purchasesDB.map(purchase => {
            return new Purchase(
                purchase.id,
                purchase.quantity,
                purchase.total_price,
                purchase.user_id,
                purchase.product_id
            )
        })

        res.status(200).send({ purchases: allPurchases })

    } catch (error: any) {
        res.status(errorCode).send(error.sqlMessage || error.message)
    }
}