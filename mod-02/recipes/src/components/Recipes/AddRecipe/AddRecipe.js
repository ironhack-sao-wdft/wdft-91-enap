import { useState } from "react"
import { Button, Form } from "react-bootstrap"

function AddRecipe({ recipes, setRecipes }) {
    const [form, setForm] = useState({
        name: "",
        image: "",
        servings: "",
        level: "",
        preparation: ""
    })

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        setRecipes([...recipes, form])

        setForm({
            name: "",
            image: "",
            servings: "",
            level: "",
            preparation: ""
        })
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
                <Form.Label>Nome da receita</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Insira o nome da receita"
                    name="name"
                    onChange={handleChange}
                    value={form.name}
                />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Imagem da receita pronta</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Insira o endereço da imagem da receita"
                    name="image"
                    onChange={handleChange}
                    value={form.image}
                />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Quantidade de porções</Form.Label>
                <Form.Control
                    type="number"
                    placeholder="Insira o número de porções da receita"
                    name="servings"
                    onChange={handleChange}
                    value={form.servings}
                />
            </Form.Group>
            <Form.Group>
                <Form.Label>Nível de Dificuldade</Form.Label>
                <Form.Select name="level" onChange={handleChange}>
                    <option value="0">Selecione uma opção</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Preparação da receita</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Insira o modo de preparo da receita"
                    name="preparation"
                    onChange={handleChange}
                    value={form.preparation}
                />
            </Form.Group>
            <Button className="mb-3" variant="primary" type="submit">
                Cadastrar
            </Button>
        </Form>
    )
}

export default AddRecipe