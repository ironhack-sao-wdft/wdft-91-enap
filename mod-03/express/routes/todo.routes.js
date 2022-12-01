import express from 'express'
import TodoModel from '../models/todo.models.js'

const router = express.Router()

router.get('/', async (request, response) => {
    try {
        const todos = await TodoModel.find()

        return response.status(200).json(todos)
    } catch (error) {
        console.log(error)

        return response.status(500).json({ msg: "Algo está errado." })
    }
})

router.post('/create', async (request, response) => {
    try {
        const create = await TodoModel.create(request.body)
        return response.status(201).json(create)
    } catch (error) {
        console.log(error)
        return response.status(500).json({ msg: "Algo está errado." })
    }
})

router.put('/edit/:id', async (request, response) => {
    try {
        const { id } = request.params

        const update = await TodoModel.findByIdAndUpdate(
            id,
            { ...request.body },
            { new: true, runValidators: true }
        )

        return response.status(200).json(update)
    } catch (error) {
        console.log(error)
        return response.status(500).json({ msg: "Algo está errado." })
    }
})

router.delete('/delete/:id', async (request, response) => {
    try {
        const { id } = request.params
    
        const deleteTodo = await TodoModel.findByIdAndDelete(id)
    
        return response.status(200).json(deleteTodo)
    } catch (error) {
        console.log(error)
        return response.status(500).json({ msg: "Algo está errado." })
    }
})

export default router
