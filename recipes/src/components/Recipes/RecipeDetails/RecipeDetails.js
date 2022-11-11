import { Card } from "react-bootstrap"
import { useParams } from "react-router-dom"

function RecipeDetails({ recipes }) {
    const { receitaId } = useParams()

    const foundRecipe = recipes.find((oneRecipe) => {
        return oneRecipe.name === receitaId;
    })

    return (
        <Card style={{ width: '90%', margin: 'auto' }}>
            <Card.Header>{ foundRecipe.name }</Card.Header>
            <Card.Body>
                <Card.Img variant="top" src={foundRecipe.image} />
                <Card.Text>Porções: {foundRecipe.servings}</Card.Text>
                <Card.Text>Dificuldade: {foundRecipe.level}</Card.Text>
                <Card.Text>Modo de preparo: {foundRecipe.preparation}</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default RecipeDetails