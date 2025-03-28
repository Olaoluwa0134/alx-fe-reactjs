import React from "react";
import RecipeList from "../components/RecipeList";
import AddRecipeForm from "../components/AddRecipeForm";

const HomePage = () => {
  return (
    <div>
      <h1>Recipe Sharing App</h1>
      <AddRecipeForm />
      <RecipeList />
    </div>
  );
};

export default HomePage;
