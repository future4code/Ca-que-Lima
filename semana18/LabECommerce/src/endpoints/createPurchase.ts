import { ProductDatabase } from "../data/ProductDatabase"
import { PurchaseDatabase } from "../data/PurchaseDatabase"
import { Request, Response } from "express"
import { Purchase } from "../entities/Purchase"
import { v4 } from 'uuid'

export default async function createPurchase(req: Request, res: Response): Promise<void> {
    let errorCode: number = 400

    try {
        const { quantity, userId, productId } = req.body
        
        if (quantity <= 0) {
            throw new Error('A quantidade deve ser positiva e diferente de zero')
        }

        if (!quantity || !userId || !productId) {
            throw new Error('Por favor preencha e cheque todos os campos')
        }

        const id = v4()

        const productDatabase = new ProductDatabase()
        const productInDatabase = await productDatabase.getById(productId)
        const totalPrice = quantity * productInDatabase[0].price

        const purchase = new Purchase(
            id,
            quantity,
            totalPrice,
            userId,
            productId
        )

        const purchaseDatabase = new PurchaseDatabase()
        await purchaseDatabase.create(purchase)

        res.status(200).send('Compra criada com sucesso')

    } catch (error: any) {
        res.status(errorCode).send(error.sqlMessage || error.message)
    }
}