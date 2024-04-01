import { fetchRecipe } from "../recipeFromIngredients.js";
import { createInput } from "./createInput.js";
import { createTextarea } from "./createTextarea.js";

export function createForm() {
  const queryInput = createInput(
    "query",
    "what do you want to cook? e.g. pasta"
  );
  const cuisineInput = createInput(
    "cuisine",
    "Cuisine? may be mediterranean, african, or korean"
  );

  const dietInput = createInput(
    "diet",
    "Are you vegetarian, vegan, or pescetarian?"
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
  search.addEventListener("click", (event) => {
    if (textArea.value === "") {
      alert("please enter your available ingredients separated by comma.");
      search.style.pointerEvents = "none";
    } else {
      fetchRecipe(textArea.value);
      event.preventDefault();
      textArea.value = "";
    }
  });
  const form = document.createElement("form");
  form.appendChild(queryInput);
  form.appendChild(cuisineInput);
  form.appendChild(dietInput);
  form.appendChild(intoleranceInput);
  form.appendChild(typeInput);
  form.appendChild(ingredientsInput);
  form.appendChild(search);

  return form;
}
