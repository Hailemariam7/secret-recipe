import { renderResult } from "./renderResult.js";

export async function fetchRecipe(ingredients = "") {
  console.log(ingredients);
  renderResult();
  const input = document.querySelector("textArea").value;

  /*  const url =
    "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?ingredients=apples%2Cflour%2Csugar&number=1&ignorePantry=true&ranking=1"; */
  const url = processInput(input);
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "430bd9ae04msh1bff2aa9e80afc3p1a2e40jsnf66198f950ed",
      "X-RapidAPI-Host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
    },
  };

  /*  try {
    //const response = await fetch(url, options);
     const result = await response.json();
    const recipes = JSON.stringify(result, null, 2);

    console.log(recipes);
  } catch (error) {
    console.error(error);
  } */
}
function processInput(ingredients) {
  const inputArray = ingredients.split(",");
  console.log(inputArray);
  const url = `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?ingredients=${inputArray[0]}%2C${inputArray[1]}%2C${inputArray[2]}&number=1&ignorePantry=true&ranking=1`;

  return url;
}
