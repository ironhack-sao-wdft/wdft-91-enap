import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import RecipeCard from '../RecipeCard/RecipeCard';
import AddRecipe from '../AddRecipe/AddRecipe';
import { Navigate } from "react-router-dom";

function RecipeList({ recipes, setRecipes }) {
    const [isLogged, setIsLogged] = useState(true)

    if(!isLogged) {
        // Navigate é usado quando vamos redirecionar
        // Link é usado quando clicamos em botão ou em um link (ação feita pelo usuário)
        return <Navigate to="/erro" />
    }

    const deleteRecipe = (recipeKey) => {
        const newRecipes = recipes.filter((recipe) => {
            return recipe.name !== recipeKey
        })

        setRecipes(newRecipes)
    }

    const renderRecipes = recipes.map((recipe, index) => {
        return (
            <Col key={index}>
                <RecipeCard recipe={ recipe } deleteRecipe={ deleteRecipe } />
            </Col>
        )
    })

    return (
        <Container>
            <Row>
                <AddRecipe recipes={ recipes } setRecipes={ setRecipes } />
            </Row>
            <Row>
                { renderRecipes }
            </Row>
        </Container>
    )
}

export default RecipeList