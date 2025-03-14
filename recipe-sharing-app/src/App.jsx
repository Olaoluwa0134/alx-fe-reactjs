import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddRecipeForm from "./components/AddRecipeForm";
import RecipeList from "./components/RecipeList";
import RecipeDetails from "./components/RecipeDetails";
import { SearchBar } from "./components/SearchBar";
import { FavoritesList } from "./components/FavoritesList";
import { RecommendationsList } from "./components/RecommendationsList";

function App() {
  return (
    <Router>
      <div>
        <h1>Recipe Sharing App</h1>
        <SearchBar />
        <AddRecipeForm />
        <FavoritesList />
        <RecommendationsList />
        <Routes>
          <Route path="/" element={<RecipeList />} />
          <Route
            path="/recipe/:id"
            element={
              <RecipeDetails
                recipeId={window.location.pathname.split("/").pop()}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
