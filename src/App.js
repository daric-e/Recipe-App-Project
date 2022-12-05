import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData"

function App() {
  const [recipes, setRecipes] = useState(RecipeData);
  
  // Takes a recipe object and adds it to the list of recipes
  const addRecipe = (recipe) => {
    setRecipes([
      ...recipes,
      recipe
    ]);
  }
  
  // Takes an id (index) of a recipe and removes it from the list of recipes
  const deleteRecipe = (id) => setRecipes(recipes.filter((r, idx) => idx !== id));
  
  return (
    <div className="App">
      <header><h1>Delicious Food Recipes</h1></header>
      <RecipeList recipes={recipes} deleteHandler={deleteRecipe} />
      <RecipeCreate addRecipe={addRecipe} />
    </div>
  );
}

export default App;
