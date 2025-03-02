import { useRecipeStore } from "../recipeStore";
import { useNavigate } from "react-router-dom";

export const DeleteRecipeButton = ({ recipeId }) => {
  const navigate = useNavigate();

  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);

  return <button onClick={() => deleteRecipe(recipeId)}>Delete Recipe</button>;
};
