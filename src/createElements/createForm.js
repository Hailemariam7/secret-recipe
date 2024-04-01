import { fetchRecipe } from "../fetchRecipe.js";
import { createInput } from "./createInput.js";
import { createTextarea } from "./createTextarea.js";

export function createForm() {
  const formContainer = document.createElement("section");
  formContainer.id = "form_container";
  const form = document.createElement("form");
  const heading = document.createElement("h3");
  heading.textContent = "Search from thousands of recipes.";
  const queryInput = createInput(
    "query",
    "what do you want to cook? e.g. rice"
  );
  const cuisineInput = createInput(
    "cuisine",
    "Cuisine? may be mediterranean, african, or korean"
  );

  const dietInput = createInput(
    "diet",
    "Diet? Are you vegetarian, vegan, or pescetarian?"
  );
  const intoleranceInput = createInput(
    "intolerance",
    "Any intolerance? Gluten, dairy, etc."
  );
  const typeInput = createInput(
    "type",
    "Type? Main course,appetizer,breakfast..."
  );
  const ingredientsInput = createTextarea(
    "ingredients",
    "Any ingredients at hand?"
  );

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
    event.preventDefault();

    fetchRecipe(new FormData(form));
    queryInput.querySelector('input[name="query"]').value = "";
  });
  formContainer.appendChild(form);
  return formContainer;
}
