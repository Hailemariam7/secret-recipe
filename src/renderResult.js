import { recipeDetail } from "./recipeDetail.js";
import { detailedRecipesList } from "./data.js";
import { recipes } from "./data.js";

export function renderResult(recipes) {
  const display = document.createElement("section");
  display.classList.add("display-recipes");

  recipes.results.forEach((recipe) => {
    const figcaption = document.createElement("figcaption");
    const image = document.createElement("img");
    const figure = document.createElement("figure");

    figcaption.textContent = recipe.title;

    image.src = recipe.image;
    image.alt = recipe.title;
    figure.appendChild(image);
    figure.appendChild(figcaption);

    figure.addEventListener("click", () => {
      recipeDetail(recipe.id);
    });
    display.appendChild(figure);
  });

  const main = document.querySelector("main");

  main.appendChild(display);
}
