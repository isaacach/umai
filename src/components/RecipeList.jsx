/* eslint-disable react/prop-types */
import '../css/recipes.css'

export default function RecipeList({ recipes }) {
  return (
    <div className="show-recipes">
      {recipes.map(recipe => {
        return (
        <div className="recipe" key={recipe.idMeal}>
          <h3 className="recipe-title">{recipe.strMeal}</h3>
          <img className="recipe-img" src={recipe.strMealThumb} alt={recipe.strMeal} />
        </div>
        )
      })}
    </div>
  );
}
