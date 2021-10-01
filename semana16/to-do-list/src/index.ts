import express, { Express, Request, Response } from 'express'
import cors from 'cors'
import { AddressInfo } from 'net'
import { connection } from './connection'

const app: Express = express()

app.use(express.json())
app.use(cors())

app.get("/users", async (req: Request, res: Response): Promise<any> => {
    try {
        const users = await connection("ToDoListUser")
        res.status(200).send(users)
    } catch (error: any) {
        res.send(error.sqlMessage || error.message)
    }
})

app.get("/users/:id", async (req: Request, res: Response): Promise<any> => {
    const id: number = Number(req.params.id)
    try {
        const user = await connection("ToDoListUser").where({ id: id })
        res.status(200).send({ id: user[0].id, nickname: user[0].nickname })
    } catch (error: any) {
        res.send(error.sqlMessage || error.message)
    }
})

app.post("/users", async (req: Request, res: Response): Promise<any> => {
    let errorCode = 400
    try {
        const { name, nickname, email } = req.body
        if (!name || !nickname || !email) {
            throw new Error('Por favor preencha todos os campos')
        } else {
            await connection("ToDoListUser").insert({ name: name, nickname: nickname, email: email })
            res.status(200).send('Usuário inserido com sucesso')
        }
    } catch (error: any) {
        res.status(errorCode).send(error.sqlMessage || error.message)
    }
})

app.put("/users/edit/:id", async (req: Request, res: Response): Promise<any> => {
    let errorCode = 400
    const id: number = Number(req.params.id)
    const { name, nickname } = req.body

    try {
        if (name === "" || nickname === "") {
            throw new Error('Por favor cheque os campos')
        } else {
            if (name) {
                await connection("ToDoListUser").where({ id: id }).update({ name: name })
            }
            if (nickname) {
                await connection("ToDoListUser").where({ id: id }).update({ nickname: nickname })
            }
            res.status(200).send('Usuário atualizado com sucesso')
        }
    } catch (error: any) {
        res.status(errorCode).send(error.sqlMessage || error.message)
    }
})



const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo
        console.log(`Server is running at http://localhost:${address.port}`)
    } else {
        console.error(`Failure upon starting server.`)
    }
})