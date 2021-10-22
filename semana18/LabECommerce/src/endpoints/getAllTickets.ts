import { ProductDatabase } from "../data/ProductDatabase"
import { Request, Response } from "express"
import { Ticket } from "../entities/Ticket"

export default async function getAllTickets(req: Request, res: Response): Promise<void> {
    let errorCode: number = 400

    try {

        const productDatabase = new ProductDatabase()
        const productsDB = await productDatabase.getAll()

        const allTicketsDB = productsDB.filter(product => product.origin)

        const allTickets = allTicketsDB.map(ticket => {
            return new Ticket(
                ticket.id,
                ticket.name,
                ticket.description,
                ticket.price,
                ticket.origin,
                ticket.destination
            )
        })

        res.status(200).send({ tickets: allTickets })

    } catch (error: any) {
        res.status(errorCode).send(error.sqlMessage || error.message)
    }
}