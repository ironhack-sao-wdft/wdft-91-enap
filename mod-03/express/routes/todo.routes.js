import express from 'express'
import EmployeeModel from '../models/employee.models.js'
import TodoModel from '../models/todo.models.js'

const router = express.Router()

router.get('/', async (request, response) => {
    try {
        const todos = await TodoModel.find().populate("responsable")

        return response.status(200).json(todos)
    } catch (error) {
        console.log(error)

        return response.status(500).json({ msg: "Algo está errado." })
    }
})

// passa o id do funcionário que vai ser o responsável pela tarefa
router.post('/create/:employeeId', async (request, response) => {
    try {
        const { employeeId } = request.params

        const createNew = await TodoModel.create(
            {
                ...request.body,
                responsable: employeeId
            }
        )

        // levar o id do todo para o objeto do funcionário
        await EmployeeModel.findByIdAndUpdate(
            employeeId,
            { $push: { todos: createNew._id} }
        )

        return response.status(201).json(createNew)
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

        await EmployeeModel.findByIdAndUpdate(
            deleteTodo.responsable,
            { $pull: { todos: deleteTodo._id } }
        )
    
        return response.status(200).json(deleteTodo)
    } catch (error) {
        console.log(error)
        return response.status(500).json({ msg: "Algo está errado." })
    }
})

export default router
