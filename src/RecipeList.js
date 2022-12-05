import React from "react";
import Recipe from './Recipe';

function RecipeList({recipes, deleteHandler}) {
  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th>Preparation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {recipes.map((recipe, idx) => <Recipe id={idx} recipe={recipe} deleteHandler={deleteHandler} />)}
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;
