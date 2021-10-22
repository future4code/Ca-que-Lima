import { ProductDatabase } from "../data/ProductDatabase"
import { Request, Response } from "express"
import { Product } from "../entities/Product"
import { productDB } from "../types"

export default async function getAllProducts(req: Request, res: Response): Promise<void> {
    let errorCode: number = 400

    try {

        const productDatabase = new ProductDatabase()
        const productsDB: productDB[] = await productDatabase.getAll()

        const allProducts = productsDB.map(product => {
            return new Product(
                product.id,
                product.name,
                product.description,
                product.price
            )
        })

        res.status(200).send({ products: allProducts })

    } catch (error: any) {
        res.status(errorCode).send(error.sqlMessage || error.message)
    }
}