import { createForm } from "./createForm.js";
import { createHeader } from "./createHeader.js";
import { createDisplay } from "./createDisplay.js";
import { fetchRecipe } from "./recipeFromIngredients.js";
import { renderResult } from "./renderResult.js";

export function initApp() {
  const header = createHeader();
  const form = createForm();

  /*  form.addEventListener("submit", (e) => {
    event.preventDefault(); //prevents the page from refreshing
    const formData = new FormData(event.target);
    const ingredients = formData.get("ingredients");
    console.log(ingredients);
    if (ingredients) fetchRecipe(ingredients);
  }); */

  const main = document.querySelector("main");
  main.appendChild(header);
  main.appendChild(form);
}

window.addEventListener("load", initApp);
