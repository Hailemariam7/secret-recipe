const url =
  "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?tags=vegetarian%2Cdessert&number=1";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "430bd9ae04msh1bff2aa9e80afc3p1a2e40jsnf66198f950ed",
    "X-RapidAPI-Host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
  },
};
export async function randomRecipe() {
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);
    const formattedResult = JSON.stringify(result, null, 2);
    const pre = document.createElement("pre");
    pre.textContent = formattedResult;
    document.body.appendChild(pre);
  } catch (error) {
    console.error(error);
  }
}
