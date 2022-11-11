import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import RecipeList from './components/Recipes/RecipeList/RecipeList';
import { Routes, Route } from 'react-router-dom';
import About from './components/Pages/About/About';
import HomePage from './components/Pages/HomePage/HomePage';
import NavigationBar from './components/NavigationBar/NavigationBar';
import ErrorPage from './components/Pages/ErrorPage/ErrorPage';
import RecipeDetails from './components/Recipes/RecipeDetails/RecipeDetails';
import recipesData from './recipes.json';
import { useState } from 'react';

function App() {
  const [recipes, setRecipes] = useState(recipesData)

  return (
    <div className="App">
      <NavigationBar />
      <Routes>
        <Route path="/" element={ <HomePage /> } />
        <Route path="/sobre" element={ <About /> } />
        <Route path="/receitas" element={ <RecipeList recipes={ recipes } setRecipes={ setRecipes } /> } />
        <Route path="/receitas/:receitaId" element={ <RecipeDetails recipes={ recipes }  /> } />
        <Route path="*" element={ <ErrorPage /> } />
      </Routes>
    </div>
  );
}

export default App;
