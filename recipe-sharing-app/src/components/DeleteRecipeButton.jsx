import { useRecipeStore } from "./recipeStore";

export const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);

  return <button onClick={() => deleteRecipe(recipeId)}>Delete Recipe</button>;
};
