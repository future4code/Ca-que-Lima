import express, { Response, Request } from "express";
import cors from "cors"

const app = express()
app.use(express.json())
app.use(cors())

type User = {
    name: string,
    cpf: number,
    birthDate: string,
    balance: number,
    transactions: Transaction[]
}

type Transaction = {
    value: number,
    date: string
}

const users: User[] = [
    {
        name: "Caíque",
        cpf: 11122233345,
        birthDate: "20/05/1994",
        balance: 503,
        transactions: [
            {
                value: -32,
                date: "23/09/2021"
            }
        ]
    },
    {
        name: "Naiara",
        cpf: 12312312345,
        birthDate: "28/01/1992",
        balance: 329,
        transactions: []
    }
]

app.listen(3003, () => {
    console.log('Server running on port 3003')
})

app.get("/users", (req: Request, res: Response) => {
    res.status(200).send(users)
})

app.post("/users", (req: Request, res: Response) => {
    res.status(200).send(users)
})