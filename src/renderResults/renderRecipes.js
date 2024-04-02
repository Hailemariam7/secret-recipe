import { clearPage } from "../createElements/createHeader.js";
import { fetchRecipeDetail } from "../fetchRecipes/fetchRecipeDetail.js";

export function renderRecipes(recipes) {
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
      fetchRecipeDetail(recipe.id);
    });
    display.appendChild(figure);
  });

  const main = document.querySelector("main");

  main.appendChild(display);
}
