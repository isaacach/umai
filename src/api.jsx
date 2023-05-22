
export const searchRecipes = async (searchTerm) => {
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`);
  const data = await response.json();
  console.log(data.meals);
  return data.meals;
}

export const searchRecipesById = async (id) => {
  const response = await fetch(`www.themealdb.com/api/json/v1/1/lookup.php?i=${id}}`);
  const data = await response.json();
  console.log(data);
}

