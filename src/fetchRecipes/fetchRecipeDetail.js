import { API_KEY, HOST } from "../constants.js";
import { renderRecipeDetail } from "../renderResults/renderRecipeDetail.js";

export async function fetchRecipeDetail(recipeId) {
  const url = `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${recipeId}/information`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": API_KEY,
      "X-RapidAPI-Host": HOST,
    },
  };

  try {
    const response = await fetch(url, options);
    const recipeInDetail = await response.json();
    if(response.ok){
      document.querySelectorAll('.popup-content').forEach((element)=>{element.remove()})
      renderRecipeDetail(recipeInDetail);
    }
    
  } catch (error) {
    alert(error);
  }
}
