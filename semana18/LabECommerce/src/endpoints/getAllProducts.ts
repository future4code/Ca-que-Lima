import { ProductDatabase } from "../data/ProductDatabase"
import { Request, Response } from "express"
import { Product } from "../entities/Product"

export default async function getAllProducts(req: Request, res: Response): Promise<void> {
    let errorCode: number = 400

    try {

        const productDatabase = new ProductDatabase()
        const allProducts: Product[] = await productDatabase.getAll()

        res.status(200).send({ products: allProducts })

    } catch (error: any) {
        res.status(errorCode).send(error.sqlMessage || error.message)
    }
}