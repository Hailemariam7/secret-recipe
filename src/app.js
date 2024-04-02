import { createForm } from "./createElements/createForm.js";
import { createHeader } from "./createElements/createHeader.js";
import { renderRecipes } from "./renderResults/renderRecipes.js";

export function initApp() {
  const header = createHeader();
  const form = createForm();

  const main = document.querySelector("main");
  main.appendChild(header);
  main.appendChild(form);
}

window.addEventListener("load", () => {
  const savedRecipes = JSON.parse(localStorage.getItem("recipes"));
  if (savedRecipes) {
    initApp();
    renderRecipes(savedRecipes);
  } else {
    initApp();
  }
});
