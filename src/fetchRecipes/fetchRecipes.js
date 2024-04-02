import { renderRecipes } from "../renderResults/renderRecipes.js	";
import { API_KEY, HOST } from "../constants.js";

export async function fetchRecipes(formData) {
  const url = `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch?query=${formData.get(
    "query"
  )}&cuisine=${formData.get("cuisine")}&excludeCuisine=''&diet=${formData.get(
    "diet"
  )}&intolerances=${formData.get(
    "intolerance"
  )}&equipment=''&includeIngredients=${formData
    .get("ingredients")
    .split(", ")
    .join("%2C")}&excludeIngredients=''&type=${formData
    .get("type")
    .split(" ")
    .join(
      "%20"
    )}&instructionsRequired=true&fillIngredients=false&addRecipeInformation=true&ignorePantry=true&sort=calories&sortDirection=asc&&limitLicense=false&ranking=2`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": API_KEY,
      "X-RapidAPI-Host": HOST,
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();

    localStorage.setItem("recipes", JSON.stringify(result));
    renderRecipes(result);
  } catch (error) {
    alert(error);
  }
}
