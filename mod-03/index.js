import express from 'express'
import * as dotenv from 'dotenv'
import { v4 as uuidv4 } from 'uuid'

dotenv.config()
const app = express()
app.use(express.json())

let data = [
    {
        name: "Ana",
        department: "T.I"
    }
]

// ROTAS
// MÉTODO GET
app.get('/', (request, response) => {
    // no json a gente a resposta que a gente quer obter
    // SEMPRE retornamos algo (uma resposta)
    return response.status(200).json(data)
})

// MÉTODO POST
app.post('/create', (request, response) => {
    const newData = {
        // capturar o body da requisição e adicionar um id
        ...request.body,
        id: uuidv4()
    }

    data.push(newData)

    return response.status(201).json(data)
})

// MÉTODO PUT
app.put()

// MÉTODO DELETE

app.listen(Number(process.env.PORT), () => console.log('server on port 8080!'))