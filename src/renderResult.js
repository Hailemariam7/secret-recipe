import { recipeDetail } from "./recipeDetail.js";
import { detailedRecipesList } from "./data.js";
import { recipes } from "./data.js";

export function renderResult(recipes) {
  const display = document.createElement("section");

  recipes.forEach((recipe) => {
    const figcaption = document.createElement("figcaption");
    figcaption.textContent = recipe.title;
    const image = document.createElement("img");
    image.src = recipe.image;
    image.alt = recipe.title;
    const figure = document.createElement("figure");
    figure.appendChild(image);
    figure.appendChild(figcaption);
    figure.addEventListener("click", () => {
      recipeDetail(recipe.id);
    });
    display.appendChild(figure);
  });

  display.classList.add("display-recipes");
  const main = document.querySelector("main");
  main.appendChild(display);
}
