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
import createTask from './endpoints/createTask'

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

app.post("/task", createTask)

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo
        console.log(`Server is running at http://localhost:${address.port}`)
    } else {
        console.error(`Failure upon starting server.`)
    }
})