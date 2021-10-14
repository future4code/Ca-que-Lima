import { ProductDatabase } from "../data/ProductDatabase"
import { Request, Response } from "express"
import { Product } from "../entities/Product"
import { v4 } from 'uuid'

export default async function createProduct(req: Request, res: Response): Promise<void> {
    let errorCode: number = 400

    try {
        const { name, description, price } = req.body

        if (!name || !description || !price) {
            throw new Error('Por favor preencha e cheque todos os campos')
        }

        const id = v4()

        const product = new Product(
            id,
            name,
            description,
            price
        )

        const productDatabase = new ProductDatabase()
        await productDatabase.create(product)

        res.status(200).send('Produto criado com sucesso')

    } catch (error: any) {
        res.status(errorCode).send(error.sqlMessage || error.message)
    }
}