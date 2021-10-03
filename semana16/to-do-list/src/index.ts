import express, { Express, Request, Response } from 'express'
import cors from 'cors'
import { AddressInfo } from 'net'
import { connection } from './connection'
import getAllUsers from './endpoints/getAllUsers'
import getUserById from './endpoints/getUserById'
import createUser from './endpoints/createUser'
import editUserById from './endpoints/editUserById'
import getAllTasks from './endpoints/getAllTasks'
import getTaskById from './endpoints/getTaskById'
import getTaskByCreatorId from './endpoints/getTaskByCreatorId'

const app: Express = express()

app.use(express.json())
app.use(cors())

app.get("/user/all", getAllUsers)

app.get("/user/:id", getUserById)

app.post("/user", createUser)

app.put("/user/edit/:id", editUserById)

// endpoint apenas para meu uso, para checar todas as tasks
app.get("/task/all", getAllTasks)

app.get("/task/:id", getTaskById)

app.get("/task/", getTaskByCreatorId)

app.post("/task", async (req: Request, res: Response): Promise<any> => {
    let errorCode = 400
    const { title, description, limitDate, creatorUserId } = req.body
    function formatDate(date: string): string {
        const day = date.split("/")[0];
        const month = date.split("/")[1];
        const year = date.split("/")[2];

        return year + '-' + ("0" + month).slice(-2) + '-' + ("0" + day).slice(-2);
    }
    const formattedDate: string = formatDate(limitDate)

    try {
        if (!title || !description || !limitDate || !creatorUserId) {
            throw new Error('Por favor preencha todos os campos')
        } else {
            await connection("ToDoListTask").insert({
                title: title,
                description: description,
                limit_date: formattedDate,
                creator_user_id: Number(creatorUserId)
            })
            res.status(200).send('Tarefa inserida com sucesso')
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