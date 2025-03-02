import React from "react";
import { useParams, Link } from "react-router-dom";
import useRecipeStore from "../store/recipeStore";

const RecipeDetails = () => {
  const { id } = useParams();
  const recipes = useRecipeStore((state) => state.recipes);
  const recipe = recipes[id];

  if (!recipe) {
    return <p>Recipe not found!</p>;
  }

  return (
    <div>
      <h2>{recipe.name}</h2>
      <p>Details about this recipe...</p>
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default RecipeDetails;
