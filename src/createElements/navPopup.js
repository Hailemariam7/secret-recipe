const tabDisplayed = {
  about: 0,
  services: 0,
  contact: 0,
  help: 0,
  displayOccupied: false,
};
export function navPopup(tab) {
  //tab Name
  /* 
  if (tabDisplayed[tab] > 1 || tabDisplayed.displayOccupied) return;

  tabDisplayed[tab]++; */
  // nav tabs info display
  const container = document.createElement("div");

  container.classList.add("popup-text");
  const popupText = document.createElement("p");
  popupText.textContent = navInfo[tab];
  const navContent = document.createElement("section");
  navContent.classList.add("nav-popup");

  //popup closing X button.
  const closeButton = document.createElement("span");
  closeButton.id = "close-button";
  closeButton.textContent = "X";
  closeButton.addEventListener("click", () => {
    navContent.remove();
    document.querySelector("form").style.display = "initial";
    tabDisplayed[tab] = 0;
    tabDisplayed.displayOccupied = false;
  });
  document.addEventListener("keydown", (event) => {
    event.key === "Escape" && navContent.remove();
    document.querySelector("form").style.display = "initial";
    tabDisplayed[tab] = 0;
    tabDisplayed.displayOccupied = false;
  });

  container.appendChild(closeButton);
  container.appendChild(popupText);
  navContent.appendChild(container);
  const tabInfo = document.querySelector("#form_container");
  document.querySelector("form").style.display = "none";
  tabInfo.appendChild(navContent);
  tabDisplayed.displayOccupied = true;
  //document.body.appendChild(navContent);
}

export const navInfo = {
  about:
    "This is a HYF project on using APIs. The API used is spoonacular API. This is meant to provide you a recipe based on the data you filled the form with.",
  services:
    "Recipe search based on the meal you want to prepare and you can filter the results based on personal preferences like diet type, any intolerance you may have, the ingredients you have at hand, the type of meal you want to prepare like breakfast, soup, supper, etc, or if you want a specific cuisine like chinese or greek.                                                                                                       After you get the result, you can click on individual recipe for detail.A link is provided for each recipe to the website where you can get steps on how to cook it.",
  contact:
    "you can find this project on https://github.com/Hailemariam7/Recipe-Finder",
  help: "Here is how you can perfectly fill the form and get the result you are looking for.                                                                                                             The first input field is the query, here you should write the meal you want to prepare like rice, bread, etc.                                                                                                         Cuisine: the cuisine(s) of the recipes. One or more (comma separated) of the following: african, chinese, japanese, korean, vietnamese, thai, indian, british, irish, french, italian, mexican, spanish, middle eastern, jewish, american, cajun, southern, greek, german, nordic, eastern european, caribbean, or latin american.                                                                                                      Diet: the diet to which the recipes must be compliant. Possible values are: pescetarian, lacto vegetarian, ovo vegetarian, vegan, paleo, primal, and vegetarian.                                                      Intolerances: a comma-separated list of intolerances. All found recipes must not have ingredients that could cause problems for people with one of the given tolerances. Possible values are: dairy, egg, gluten, peanut, sesame, seafood, shellfish, soy, sulfite, tree nut, and wheat.                                                    Ingredients: a comma-separated list of ingredients that should/must be contained in the recipe.                                                                                                        Type: the type of the recipes. One of the following: main course, side dish, dessert, appetizer, salad, bread, breakfast, soup, beverage, sauce, or drink.",
};
