import express from 'express'
import { v4 as uuidv4 } from 'uuid'

const router = express.Router()

// banco de dados
let data = [
    {
        name: "Ana",
        department: "T.I"
    }
]

// -------- ROTAS --------
// método GET
router.get('/', (request, response) => {
    // no json a gente coloca a resposta que a gente quer obter
    // SEMPRE retornamos algo (uma resposta)
    return response.status(200).json(data)
})

// método POST
router.post('/create', (request, response) => {
    const newData = {
        // capturar o body da requisição e adicionar um id
        ...request.body,
        id: uuidv4()
    }

    data.push(newData)

    return response.status(201).json(data)
})

// método PUT
router.put('/edit/:id', (request, response) => {
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
router.delete('/delete/:id', (request, response) => {
    const { id } = request.params

    const deleteById = data.find(
        item => item.id === id      
    )

    const index = data.indexOf(deleteById)

    // exclui só o item que está posicionado no index
    data.splice(index, 1)

    return response.status(200).json(data)
})

export default router
