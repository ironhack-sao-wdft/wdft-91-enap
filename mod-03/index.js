import express from 'express'

const app = express()
app.use(express.json())

let data = []

// ROTAS
app.get('/', (request, response) => {
    // no json a gente a resposta que a gente quer obter
    return response.json(data)
})

app.listen(8080, () => console.log('server on port 8080!'))