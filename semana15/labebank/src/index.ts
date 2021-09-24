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
        birthDate: "1994/05/20",
        balance: 503,
        transactions: [
            {
                value: -32,
                date: "2021/09/23"
            }
        ]
    },
    {
        name: "Naiara",
        cpf: 12312312345,
        birthDate: "1992/01/28",
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
    try {
        const { name, cpf, birthDate } = req.body

        if (name && cpf && birthDate) {

            function checkAge(birthDate: string): number {
                const today = new Date()
                return Math.floor(Math.ceil(Math.abs((new Date(birthDate)).getTime() - today.getTime()) / (1000 * 3600 * 24)) / 365.25)
            }

            const cpfExists: User | undefined = users.find(user => cpf === user.cpf)

            if (checkAge(birthDate) < 18) {
                res.statusCode = 403
                throw new Error('Infelizmente você ainda nao pode ser nosso cliente. Necessário ter pelo menos 18 anos.')
            }

            if (cpfExists) {
                res.statusCode = 403
                throw new Error('CPF já cadastrado')
            }

            const newUser: User = {
                name,
                cpf,
                birthDate,
                balance: 0,
                transactions: []
            }
        
            users.push(newUser)
            res.status(200).send('Usuário cadastrado com sucesso!')
        } else {
            res.statusCode = 400
            throw new Error('Por favor preencha todos os campos')
        }

    } catch (error: any) {
        res.send(error.message)
    }
})