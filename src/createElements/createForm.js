import { initApp } from "../app.js";
import { fetchRecipes } from "../fetchRecipes/fetchRecipes.js";
import { clearPage } from "./createHeader.js";
import { createInput } from "./createInput.js";
import { createTextarea } from "./createTextarea.js";

export function createForm() {
  const formContainer = document.createElement("section");
  formContainer.id = "form_container";
  const form = document.createElement("form");
  const heading = document.createElement("h3");
  heading.textContent = "Search from thousands of recipes.";
  const queryInput = createInput("query", "Query");
  const cuisineInput = createInput("cuisine", "Cuisine");

  const dietInput = createInput("diet", "Diet");
  const intoleranceInput = createInput("intolerance", "Intolerance");
  const typeInput = createInput("type", "Meal type.");
  const ingredientsInput = createTextarea("ingredients", "Ingredients");

  const search = document.createElement("input");
  search.id = "search";
  search.value = "Search";
  search.type = "submit";
  search.name = "search";

  form.appendChild(heading);
  form.appendChild(queryInput);
  form.appendChild(cuisineInput);
  form.appendChild(dietInput);
  form.appendChild(intoleranceInput);
  form.appendChild(typeInput);
  form.appendChild(ingredientsInput);
  form.appendChild(search);

  form.addEventListener("submit", (event) => {
    localStorage.removeItem("recipes");
    localStorage.clear();
    event.preventDefault();
    fetchRecipes(new FormData(form));
    queryInput.querySelector('input[name="query"]').value = "";
    //location.reload();
  });
  formContainer.appendChild(form);
  return formContainer;
}
