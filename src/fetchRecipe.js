import { renderResult } from "./renderResult.js";

/* export async function fetchRecipe(ingredients = "flour, milk, egg") {
  const url = `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?ingredients=${ingredients
    .split(",")
    .join("%2C")}&number=1&ignorePantry=true&ranking=1`;

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
} */
export async function fetchRecipe(formData) {
  console.log(
    "ingredients",
    formData.get("ingredients").trim().split(", ").join("%2C")
  );
  console.log("query", formData.get("query"));
  console.log("cuisine", formData.get("cuisine"));
  console.log("diet", formData.get("diet"));
  console.log("intolerance", formData.get("intolerance"));
  console.log("type", formData.get("type").split(" ").join("%20"));
  const url = `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch?query=${formData.get(
    "query"
  )}&cuisine=${formData.get(
    "cuisine"
  )}&excludeCuisine=greek&diet=${formData.get(
    "diet"
  )}&intolerances=${formData.get(
    "intolerance"
  )}&equipment=pan&includeIngredients=${formData
    .get("ingredients")
    .split(", ")
    .join("%2C")}&excludeIngredients=eggs&type=${formData
    .get("type")
    .split(" ")
    .join(
      "%20"
    )}%20course&instructionsRequired=true&fillIngredients=false&addRecipeInformation=false&titleMatch=Crock%20Pot&maxReadyTime=20&ignorePantry=true&sort=calories&sortDirection=asc&minCarbs=10&maxCarbs=100&minProtein=10&maxProtein=100&minCalories=50&maxCalories=800&minFat=10&maxFat=100&minAlcohol=0&maxAlcohol=100&minCaffeine=0&maxCaffeine=100&minCopper=0&maxCopper=100&minCalcium=0&maxCalcium=100&minCholine=0&maxCholine=100&minCholesterol=0&maxCholesterol=100&minFluoride=0&maxFluoride=100&minSaturatedFat=0&maxSaturatedFat=100&minVitaminA=0&maxVitaminA=100&minVitaminC=0&maxVitaminC=100&minVitaminD=0&maxVitaminD=100&minVitaminE=0&maxVitaminE=100&minVitaminK=0&maxVitaminK=100&minVitaminB1=0&maxVitaminB1=100&minVitaminB2=0&maxVitaminB2=100&minVitaminB5=0&maxVitaminB5=100&minVitaminB3=0&maxVitaminB3=100&minVitaminB6=0&maxVitaminB6=100&minVitaminB12=0&maxVitaminB12=100&minFiber=0&maxFiber=100&minFolate=0&maxFolate=100&minFolicAcid=0&maxFolicAcid=100&minIodine=0&maxIodine=100&minIron=0&maxIron=100&minMagnesium=0&maxMagnesium=100&minManganese=0&maxManganese=100&minPhosphorus=0&maxPhosphorus=100&minPotassium=0&maxPotassium=100&minSelenium=0&maxSelenium=100&minSodium=0&maxSodium=100&minSugar=0&maxSugar=100&minZinc=0&maxZinc=100&offset=0&number=10&limitLicense=false&ranking=2`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "430bd9ae04msh1bff2aa9e80afc3p1a2e40jsnf66198f950ed",
      "X-RapidAPI-Host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    localStorage.setItem("recipes", JSON.stringify(result));
    renderResult(result);
  } catch (error) {
    console.error(error);
  }
}
