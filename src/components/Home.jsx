import { useState } from "react";
import "../css/resets.css";
import "../css/App.css";
import Nav from "./Nav";
import SearchBar from "./SearchBar";
import { searchRecipes, searchRecipesByCategory, searchRecipesById } from "../api";
import RecipeList from "./RecipeList";

export default function Home() {
  const [recipes, setRecipes] = useState([]);

  const handleSubmit = async (searchTerm) => {
    const result = await searchRecipes(searchTerm);
    console.log(result);
    setRecipes(result);
  };

  const handleClick = async (icon) => {
    if (icon !== "") {
      const result = await searchRecipesByCategory(icon);
      const recipeArray = [];
      for (const recipeResult of result) {
        const recipe = await searchRecipesById(recipeResult.idMeal);
        recipeArray.push(await recipe);
      }
      setRecipes(recipeArray);
      console.log(recipes);
    }
  };


  return (
    <div className="page-wrapper">
      <Nav />
      <div className="container main">
        <div className="row main">
          <div className="col main">
            <SearchBar onSubmit={handleSubmit} onClick={handleClick} />
            <RecipeList recipes={recipes} />
          </div>
        </div>
      </div>
    </div>
  );
}
