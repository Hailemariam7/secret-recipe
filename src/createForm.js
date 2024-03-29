import { fetchRecipe } from "./recipeFromIngredients.js";

export function createForm() {
  const label = document.createElement("label");
  label.setAttribute("for", "ingredients");
  label.textContent =
    "Search a recipes based on the ingredients you have at hand.";

  const textArea = document.createElement("textarea");
  textArea.placeholder =
    "Enter your ingredients separating with comma like sugar,flour,banana,..";
  textArea.id = "ingredients";
  textArea.rows = "5";
  textArea.cols = "50";

  /* const fieldset = document.createElement("fieldset");
  fieldset.appendChild(label);
  fieldset.appendChild(textArea); */

  const search = document.createElement("input");
  search.id = "search";
  search.value = "Search";
  search.type = "submit";
  search.name = "search";
  search.addEventListener("click", () => {
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
  form.appendChild(label);
  form.appendChild(textArea);
  form.appendChild(search);
  form.appendChild(search);

  return form;
}
