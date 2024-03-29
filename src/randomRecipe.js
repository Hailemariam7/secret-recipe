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
    const result = await response.json(); // Parse response as JSON
    console.log(result);
    const formattedResult = JSON.stringify(result, null, 2); // Stringify with indentation
    const pre = document.createElement("pre"); // Create <pre> element for formatting
    pre.textContent = formattedResult; // Set text content to formatted JSON
    document.body.appendChild(pre); // Append to document body
  } catch (error) {
    console.error(error);
  }
}
