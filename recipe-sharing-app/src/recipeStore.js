import { create } from "zustand";

export const useRecipeStore = create((set) => ({
  recipes: [],
  searchTerm: "",
  filteredRecipes: [],
  favorites: [],
  recommendations: [],
  setSearchTerm: (term) =>
    set((state) => {
      const filtered = state.recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(term.toLowerCase())
      );
      return { searchTerm: term, filteredRecipes: filtered };
    }),
  addRecipe: (newRecipe) =>
    set((state) => {
      const updatedRecipes = [...state.recipes, newRecipe];
      const filtered = updatedRecipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      );
      return { recipes: updatedRecipes, filteredRecipes: filtered };
    }),
  deleteRecipe: (recipeId) =>
    set((state) => {
      const updatedRecipes = state.recipes.filter(
        (recipe) => recipe.id !== recipeId
      );
      const filtered = updatedRecipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      );
      const updatedFavorites = state.favorites.filter((id) => id !== recipeId);
      return {
        recipes: updatedRecipes,
        filteredRecipes: filtered,
        favorites: updatedFavorites,
      };
    }),
  updateRecipe: (updatedRecipe) =>
    set((state) => {
      const updatedRecipes = state.recipes.map((recipe) =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      );
      const filtered = updatedRecipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      );
      return { recipes: updatedRecipes, filteredRecipes: filtered };
    }),
  addFavorite: (recipeId) =>
    set((state) => ({
      favorites: [...state.favorites, recipeId],
      recommendations: state.recipes.filter(
        (recipe) => recipe.id !== recipeId && Math.random() > 0.5
      ), // Simple mock recommendation
    })),
  removeFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.filter((id) => id !== recipeId),
    })),
  setRecipes: (recipes) => set({ recipes, filteredRecipes: recipes }),
}));
