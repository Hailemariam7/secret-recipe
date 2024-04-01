import { renderResult } from "./renderResult.js";

export async function fetchRecipe(ingredients = "flour, milk, egg") {
  const url = `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?ingredients=${ingredients
    .split(",")
    .join("%2C")}&number=1&ignorePantry=true&ranking=1`;

  //const url = processInput(input);
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "430bd9ae04msh1bff2aa9e80afc3p1a2e40jsnf66198f950ed",
      "X-RapidAPI-Host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const recipes = await response.json();
    renderResult(recipes);
  } catch (error) {
    console.error(error);
  }
}
/* function processInput(ingredients) {
  // check if input is string, comma separated,...error handling
  // how many inputs, i.e inputArray length, remove hard coded url
  //

  const  = ingredients.split(",");

  const url = `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?ingredients=${inputArray[0]}%2C${inputArray[1]}%2C${inputArray[2]}&number=1&ignorePantry=true&ranking=1`;

  return url;
} */
