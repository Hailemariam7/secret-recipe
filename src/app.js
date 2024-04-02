import { createForm } from "./createElements/createForm.js";
import { createHeader } from "./createElements/createHeader.js";
import { renderResult } from "./renderResult.js";

export function initApp() {
  const header = createHeader();
  const form = createForm();

  const main = document.querySelector("main");
  main.appendChild(header);
  main.appendChild(form);
}

window.addEventListener("load", () => {
  const fetchedRecipes = JSON.parse(localStorage.getItem("recipes"));
  console.log(fetchedRecipes);
  if (fetchedRecipes) {
    initApp();
    renderResult(fetchedRecipes);
  } else {
    initApp();
  }
});
