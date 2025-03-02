import { create } from "zustand";
import { persist } from "zustand/middleware";

const useRecipeStore = create(
  persist(
    (set) => ({
      recipes: [],
      addRecipe: (recipe) =>
        set((state) => ({ recipes: [...state.recipes, recipe] })),
    }),
    {
      name: "recipe-storage", // Key for localStorage
    }
  )
);

export default useRecipeStore;
