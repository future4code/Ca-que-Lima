import { ProductDatabase } from "../data/ProductDatabase"
import { Request, Response } from "express"
import { Ticket } from "../entities/Ticket"
import { v4 } from 'uuid'

export default async function createTicket(req: Request, res: Response): Promise<void> {
    let errorCode: number = 400

    try {
        const { name, description, price, origin, destination } = req.body

        if (!name || !description || !price || !origin || !destination) {
            throw new Error('Por favor preencha e cheque todos os campos')
        }

        const id = v4()

        const ticket = new Ticket(
            id,
            name,
            description,
            price,
            origin,
            destination
        )

        const ticketDatabase = new ProductDatabase()
        await ticketDatabase.create(ticket)

        res.status(200).send('Ticket criado com sucesso')

    } catch (error: any) {
        res.status(errorCode).send(error.sqlMessage || error.message)
    }
}