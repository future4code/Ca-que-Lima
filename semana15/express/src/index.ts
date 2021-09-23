import express, { Request, Response } from "express"
import cors from 'cors'
import { countries } from "./data"
import { country } from "./types"

const app = express()

app.use(express.json())
app.use(cors())

app.listen(3003, () => {
    console.log('Server is running at http://localhost:3003')
})

app.get('/countries', (req: Request, res: Response) => {
    res.status(200).send(countries)
})

app.get('/countries/search/', (req: Request, res: Response) => {
    try {
        let result: country[] = countries

        if (req.query.name) {
            result = result.filter(
                country => country.name.toLowerCase().includes((req.query.name as string).toLowerCase())
            )
        }

        if (req.query.capital) {
            result = result.filter(
                country => country.capital.toLowerCase().includes((req.query.capital as string).toLowerCase())
            )
        }

        if (req.query.continent) {
            result = result.filter(
                country => country.continent.toLowerCase().includes((req.query.continent as string).toLowerCase())
            )
        }

        if (!req.query.name && !req.query.capital && !req.query.continent) {
            res.statusCode = 400
            throw new Error('Please include query')
        }

        if (result.length === 0) {
            res.statusCode = 404
            throw new Error('Country not found')
        }

        res.status(200).send(result)


    } catch (error: any) {
        res.send(error.message)
    }

})

app.get('/countries/:id', (req: Request, res: Response) => {
    try {
        if (!Number(req.params.id)) {
            res.statusCode = 400
            throw new Error('Invalid ID')
        }

        const result: country | undefined = countries.find((country) => country.id === Number(req.params.id))

        if (result) {
            res.status(200).send(result)
        } else {
            res.statusCode = 404
            throw new Error('Country not found')
        }

    } catch (error: any) {
        res.send(error.message)
    }
})

app.put('/countries/:id', (req: Request, res: Response) => {
    try {
        const newName: string = req.body.name
        const newCapital: string = req.body.capital

        if (!Number(req.params.id)) {
            res.statusCode = 400
            throw new Error('Invalid ID')
        }

        if (!newName && !newCapital) {
            res.statusCode = 400
            throw new Error('Please include body on request')
        }

        const result: country | undefined = countries.find((country) => country.id === Number(req.params.id))

        if (result) {
            if (newName) {
                countries[Number(req.params.id)].name = newName
            }
            if (newCapital) {
                countries[Number(req.params.id)].capital = newCapital
            }
            res.status(200).send('País atualizado com sucesso')
        } else {
            res.statusCode = 404
            throw new Error('Country not found')
        }

    } catch (error: any) {
        res.send(error.message)
    }
})