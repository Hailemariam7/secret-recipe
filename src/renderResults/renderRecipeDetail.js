export async function renderRecipeDetail(recipeInDetail) {
  //Recipe name and image

  const image = document.createElement("img");
  image.src = recipeInDetail.image;
  image.alt = recipeInDetail.title;
  const recipeName = document.createElement("h2");
  recipeName.textContent = recipeInDetail.title;
  const figure = document.createElement("figure");
  figure.classList.add("recipe-name");
  figure.appendChild(recipeName);
  figure.appendChild(image);

  //Recipe Information
  const ul = document.createElement("ul");
  const cookingTime = document.createElement("li");
  cookingTime.textContent =
    "preparationMinutes: " + recipeInDetail.preparationMinutes;
  const dishType = document.createElement("li");
  dishType.textContent = "Dish types: " + recipeInDetail.dishTypes.join(",");
  const isVegetarian = document.createElement("li");
  isVegetarian.textContent = `${
    recipeInDetail.vegetarian ? "Vegetarian: yes" : "Vegetarian: No"
  }`;
  const isVegan = document.createElement("li");
  isVegan.textContent = `${recipeInDetail.vegan ? "Vegan: yes" : "Vegan: No"}`;
  const isGlutenFree = document.createElement("li");
  isGlutenFree.textContent = `${
    recipeInDetail.glutenFree ? "Gluten free: yes" : "Gluten free: No"
  }`;
  const isCheap = document.createElement("li");
  isCheap.textContent = `${recipeInDetail.cheap ? "Cheap: yes" : "Cheap: No"}`;

  ul.classList.add("recipe-info");
  ul.appendChild(isVegetarian);
  ul.appendChild(isVegan);
  ul.appendChild(isGlutenFree);
  ul.appendChild(isCheap);
  ul.appendChild(cookingTime);
  ul.appendChild(dishType);

  //Ingredients List
  const ingredientsList = document.createElement("ul");
  ingredientsList.classList.add("ingredients-list");

  const ingHeading = document.createElement("h3");
  ingHeading.textContent = "Ingredients";

  recipeInDetail.extendedIngredients.forEach((ingredient) => {
    const ingName = document.createElement("li");
    ingName.textContent = ingredient.name;
    ingredientsList.appendChild(ingName);
  });
  const ingredientSection = document.createElement("section");
  ingredientSection.appendChild(ingHeading);
  ingredientSection.appendChild(ingredientsList);

  //Instructions
  const instructionHeading = document.createElement("h3");
  instructionHeading.textContent = "Instructions";

  const recipeLink = document.createElement("a");
  recipeLink.href = `${recipeInDetail.sourceUrl}`;
  recipeLink.target = "_blank";
  recipeLink.textContent = "Click here for a more detailed recipe information";

  const instruction = document.createElement("section");
  instruction.classList.add("instruction");
  instruction.appendChild(instructionHeading);
  instruction.appendChild(recipeLink);

  // appending elements together
  const popupContent = document.createElement("article");
  popupContent.classList.add("popup-content");
  popupContent.appendChild(figure);
  popupContent.appendChild(ul);
  popupContent.appendChild(ingredientSection);
  popupContent.appendChild(instruction);

  const detailPopup = document.createElement("section");
  detailPopup.classList.add("detail-popup");

  //popup closing X button.
  const closeButton = document.createElement("span");

  closeButton.id = "close-button";
  closeButton.textContent = "X";
  closeButton.addEventListener("click", () => {
    detailPopup.remove();
  });
  document.addEventListener("keydown", (event) => {
    event.key === "Escape" && detailPopup.remove();
  });
  const goUp = document.createElement("img");
  goUp.src = "../../public/assets/goUp.jpg";
  goUp.classList.add("go-up");
  goUp.addEventListener("click", () => {
    window.scrollTo(0, 0);
  });
  popupContent.appendChild(closeButton);
  detailPopup.appendChild(popupContent);
  detailPopup.appendChild(goUp);
  document.body.appendChild(detailPopup);
}

function appendElements(parent, [...children]) {
  for (const child of children) {
    parent.appendChild(child);
  }
}
