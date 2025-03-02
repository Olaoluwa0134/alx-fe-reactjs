import React from "react";
import { Link } from "react-router-dom";
import useRecipeStore from "../store/recipeStore";

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);

  return (
    <div>
      <h2>Recipe List</h2>
      {recipes.length === 0 ? (
        <p>No recipes available</p>
      ) : (
        <ul>
          {recipes.map((recipe, index) => (
            <li key={index}>
              <Link to={`/recipe/${index}`}>{recipe.name}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RecipeList;
