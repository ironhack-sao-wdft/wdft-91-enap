import { Button, Card } from 'react-bootstrap';

function RecipeCard({ recipe, deleteRecipe }) {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Header>{recipe.name}</Card.Header>
            <Card.Body>
                <Card.Img variant="top" src={recipe.image} />
                <Card.Text>Calorias: {recipe.calories}</Card.Text>
                <Card.Text>Dificuldade: {recipe.level}</Card.Text>
                <Button variant="danger" onClick={() => deleteRecipe(recipe.name)}>Excluir a refeição</Button>
            </Card.Body>
        </Card>
    )
}

export default RecipeCard