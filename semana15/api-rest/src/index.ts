import express, { Request, Response } from 'express'
import cors from 'cors'

type User = {
  id: number,
  name: string,
  email: string,
  type: string,
  age: number
}

enum UserType {
  ADMIN = "ADMIN",
  NORMAL = "NORMAL"
}

// Mock simulando um array de usuários no Banco de Dados
let users: User[] = [
  {
    id: 1,
    name: "Alice",
    email: "alice@email.com",
    type: UserType.ADMIN,
    age: 12
  },
  {
    id: 2,
    name: "Bob",
    email: "bob@email.com",
    type: UserType.NORMAL,
    age: 36
  },
  {
    id: 3,
    name: "Coragem",
    email: "coragem@email.com",
    type: UserType.NORMAL,
    age: 21
  },
  {
    id: 4,
    name: "Dory",
    email: "dory@email.com",
    type: UserType.NORMAL,
    age: 17
  },
  {
    id: 5,
    name: "Elsa",
    email: "elsa@email.com",
    type: UserType.ADMIN,
    age: 17
  },
  {
    id: 6,
    name: "Fred",
    email: "fred@email.com",
    type: UserType.ADMIN,
    age: 60
  }
]

const app = express()
app.use(express.json())
app.use(cors())

// Para testar se o servidor está tratando os endpoints corretamente
app.get("/ping", (req: Request, res: Response) => {
  res.status(200).send("pong!")
})

app.listen(3003, () => {
  console.log('Server is running at port 3003')
})

// Exercício 1

app.get('/users', (req: Request, res: Response) => {
  res.status(200).send(users)
})

// a) Deve ser usado o GET
// b) A entidade users (?)

// Exercício 2

// app.get('/users/search', (req: Request, res: Response) => {
//   try {
//     const type: string = (req.query.type as string).toUpperCase()

//     if (type === UserType.ADMIN || type === UserType.NORMAL) {
//       const filteredUsers: User[] = users.filter(user => user.type === type)
//       res.status(200).send(filteredUsers)
//     } else {
//       res.statusCode = 400
//       throw new Error('Invalid type')
//     }
//   } catch (error: any) {
//     res.send(error.message)
//   }
// })

// a) Passei via query. Acho mais adequado para pesquisas que podem retornar mais de um usuário, nesse caso.
// b) Com enum.

// Exercício 3

app.get('/users/search', (req: Request, res: Response) => {
  try {
    const type: string = (req.query.type as string)?.toUpperCase()
    const name: string = (req.query.name as string)?.toUpperCase()

    let result: User[] = users

    if (type) {
      if (type === UserType.ADMIN || type === UserType.NORMAL) {
        result = users.filter(user => user.type === type)
        res.status(200).send(result)
      } else {
        res.statusCode = 400
        throw new Error('Invalid type')
      }
    }

    if (name) {
      result = users.filter(user => user.name.toUpperCase() === name)
      res.status(200).send(result)
    }

    if (!type && !type) {
      res.statusCode = 400
      throw new Error('Please include query')
    }

    if (result.length === 0) {
      res.statusCode = 404
      throw new Error('User not found')
    }

  } catch (error: any) {
    res.send(error.message)
  }
})

// ou

// app.get("/users/:name", (req: Request, res: Response) => {
//   try {
//     const name: string = (req.params.name as string)?.toLowerCase()
//     const user: User | undefined = users.find((user) => user.name.toLowerCase() === name)

//     if (!user) {
//       res.statusCode= 404
//       throw new Error("User not found")
//     }
//     res.status(200).send(user)

//   } catch (error: any) {
//     res.send(error.message)
//   }
// })

// O problema com esse é que se tiver mais de uma pessoa com o mesmo nome, só retorna o primeiro. Se o identificador não foi absolutamente único, eu prefiro um "search".

// a) Acho que a resposta que estavam esperando é path params.
// b) Já feito.

// Exercício 4

app.post("/users", (req: Request, res: Response) => {
  try {
    const { id, name, email, type, age } = req.body

    if (!id || !name || !email || !type || !age) {
      res.statusCode = 422
      throw new Error("Please fill all the fields")
    }

    const newUser: User = {
      id,
      name,
      email,
      type,
      age,
    }

    users.push(newUser)

    res.status(201).send({ message: "User created successfully" })

  } catch (error: any) {
    res.send(error.message);
  }
})