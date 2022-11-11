import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import RecipeCard from '../RecipeCard/RecipeCard';
import AddRecipe from '../AddRecipe/AddRecipe';
import { Navigate } from "react-router-dom";
import recipesData from '../../../recipes.json'

function RecipeList() {
    const [recipes, setRecipes] = useState(recipesData)

    const deleteRecipe = (recipeKey) => {
        const newRecipes = recipes.filter((recipe, index) => {
            return index !== recipeKey
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