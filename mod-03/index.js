import express from 'express'
import * as dotenv from 'dotenv'
import { v4 as uuidv4 } from 'uuid'

// configuração padrão do dotenv
dotenv.config()
// inicialização do express
const app = express()
// permitir a interpretação de json()
app.use(express.json())

// banco de dados
let data = [
    {
        name: "Ana",
        department: "T.I"
    }
]

// -------- ROTAS --------
// método GET
app.get('/', (request, response) => {
    // no json a gente a resposta que a gente quer obter
    // SEMPRE retornamos algo (uma resposta)
    return response.status(200).json(data)
})

// método POST
app.post('/create', (request, response) => {
    const newData = {
        // capturar o body da requisição e adicionar um id
        ...request.body,
        id: uuidv4()
    }

    data.push(newData)

    return response.status(201).json(data)
})

// método PUT
app.put('/edit/:id', (request, response) => {
    // seta o id como parâmetro
    const { id } = request.params

    // reconhecendo o item
    const update = data.find(
        item => item.id === id
    )

    // descobre a posição dele dentro da lista
    const index = data.indexOf(update)

    // array[posição] = item
    // atualiza o item existente
    data[index] = {
        ...update,
        ...request.body
    }

    return response.status(200).json(data[index])
})

// método DELETE
app.delete('/delete/:id', (request, response) => {
    const { id } = request.params

    const deleteById = data.find(
        item => item.id === id      
    )

    const index = data.indexOf(deleteById)

    // exclui só o item que está posicionado no index
    data.splice(index, 1)

    return response.status(200).json(data)
})

// executar o servidor na porta 8080
app.listen(Number(process.env.PORT), () => console.log('server on port 8080!'))