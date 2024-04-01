export async function recipeDetail(recipeId) {
  const url = `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${recipeId}/information`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "430bd9ae04msh1bff2aa9e80afc3p1a2e40jsnf66198f950ed",
      "X-RapidAPI-Host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
    },
  };
  //create a constants.js and put the api-key and api-host variables there
  //modularize...create a rendering function and put it in the renderingResult folder
  //add a X closing button for this modal popup.
  //front page doesn't look good
  try {
    const response = await fetch(url, options);
    const recipeInDetail = await response.json();

    //Recipe name and photo
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
    const isVegetarian = document.createElement("li");
    isVegetarian.textContent = `${
      recipeInDetail.vegetarian ? "Vegetarian: yes" : "Vegetarian: No"
    }`;
    const isVegan = document.createElement("li");
    isVegan.textContent = `${
      recipeInDetail.vegan ? "Vegan: yes" : "Vegan: No"
    }`;
    const isGlutenFree = document.createElement("li");
    isGlutenFree.textContent = `${
      recipeInDetail.glutenFree ? "Gluten free: yes" : "Gluten free: No"
    }`;
    const isCheap = document.createElement("li");
    isCheap.textContent = `${
      recipeInDetail.cheap ? "Cheap: yes" : "Cheap: No"
    }`;

    ul.classList.add("recipe-info");
    ul.appendChild(isVegetarian);
    ul.appendChild(isVegan);
    ul.appendChild(isGlutenFree);
    ul.appendChild(isCheap);

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
    recipeLink.textContent =
      "Click here for a more detailed recipe information";

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
    const closeButton = document.createElement("img");
    closeButton.src = "../public/assets/closeButton.jpg";
    closeButton.alt = "Close pop-up";
    closeButton.id = "close-button";
    closeButton.addEventListener("click", () => {
      detailPopup.remove();
    });
    document.addEventListener("keydown", () => {
      event.key === "Escape" && detailPopup.remove();
    });

    popupContent.appendChild(closeButton);
    detailPopup.appendChild(popupContent);
    document.body.appendChild(detailPopup);
  } catch (error) {
    //display error not to console, but to the user.
    console.error(error);
  }
}

function appendElements(parent, [...children]) {
  for (const child of children) {
    parent.appendChild(child);
  }
}
