import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function RecipeCard({ recipe, deleteRecipe }) {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Header>
                <Link to={`/receitas/${recipe.name}`}>
                    {recipe.name}
                </Link>
            </Card.Header>
            <Card.Body>
                <Card.Img variant="top" src={recipe.image} />
                <Card.Text>Porções: {recipe.servings}</Card.Text>
                <Card.Text>Dificuldade: {recipe.level}</Card.Text>
                <Button variant="danger" onClick={() => deleteRecipe(recipe.name)}>Excluir a refeição</Button>
            </Card.Body>
        </Card>
    )
}

export default RecipeCard