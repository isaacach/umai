
export const searchRecipes = async () => {
  const response = await fetch('www.themealdb.com/api/json/v1/1/random.php');
  const data = await response.json();

  console.log(data);
}