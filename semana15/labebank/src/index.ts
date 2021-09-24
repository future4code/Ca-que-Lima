import express, { Response, Request } from "express"
import cors from "cors"
import { User } from "./types"
import { users } from "./data"

const app = express()
app.use(express.json())
app.use(cors())

app.listen(3003, () => {
    console.log('Server running on port 3003')
})

app.get("/users", (req: Request, res: Response) => {
    res.status(200).send(users)
})

app.get("/users/:cpf", (req: Request, res: Response) => {
    try {
        const cpf: number = Number(req.params.cpf)

        const user: User | undefined = users.find(user => cpf === user.cpf)

        if (user) {
            res.status(200).send(`O saldo de ${user.name} é: R$${user.balance}`)
        } else {
            res.statusCode = 400
            throw new Error('CPF inválido')
        }
    } catch (error: any) {
        res.send(error.message)
    }
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

app.put("/users", (req: Request, res: Response) => {
    try {
        const { name, cpf, value } = req.body
        const user: User | undefined = users.find(user => Number(cpf) === user.cpf)

        if (!user) {
            res.statusCode = 400
            throw new Error('CPF inválido')
        }

        if (user.name.toLowerCase() !== name.toLowerCase()) {
            res.statusCode = 400
            throw new Error('Nome inválido')
        }

        users.map(user => {
            if (user.cpf === Number(cpf)) {
                user.balance += Number(value)
                user.transactions = [...user.transactions, {
                    value: Number(value),
                    date: new Date().toISOString().slice(0, 10),
                    description: 'Depósito de Dinheiro'
                }]
                res.status(200).send(`Seu novo saldo é de: R$${user.balance}`)
            }
        })
        
    } catch (error: any) {
        res.send(error.message)
    }
})