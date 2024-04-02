// query input
export function createInput(name, labelText) {
  const input = document.createElement("input");
  input.type = "text";
  input.id = name;
  input.name = name;

  if (name === "query") {
    input.placeholder = "required";
    input.setAttribute("required", true);
  } else input.placeholder = "optional";
  const openDialog = document.createElement("span");
  const label = document.createElement("label");
  label.textContent = labelText;
  label.setAttribute("for", name);
  label.appendChild(openDialog);
  label.appendChild(input);

  openDialog.textContent = "(Explanation)";
  openDialog.classList.add("open-dialog");
  const dialog = document.createElement("dialog");
  const dialogText = document.createElement("p");
  if (name === "cuisine") {
    dialogText.textContent =
      "Cuisine: the cuisine(s) of the recipes. One or more (comma separated) of the following: african, chinese, japanese, korean, vietnamese, thai, indian, british, irish, french, italian, mexican, spanish, middle eastern, jewish, american, cajun, southern, greek, german, nordic, eastern european, caribbean, or latin american";
  } else if (name === "diet") {
    dialogText.textContent =
      "Diet: the diet to which the recipes must be compliant. Possible values are: pescetarian, lacto vegetarian, ovo vegetarian, vegan, paleo, primal, and vegetarian.";
  } else if (name === "intolerance") {
    dialogText.textContent =
      "Intolerances: a comma-separated list of intolerances. All found recipes must not have ingredients that could cause problems for people with one of the given tolerances. Possible values are: dairy, egg, gluten, peanut, sesame, seafood, shellfish, soy, sulfite, tree nut, and wheat. ";
  } else if (name === "type") {
    dialogText.textContent =
      "Type: the type of the recipes. One of the following: main course, side dish, dessert, appetizer, salad, bread, breakfast, soup, beverage, sauce, or drink.";
  } else if (name === "query") {
    dialogText.textContent =
      "Here you can write the meal you want to prepare like rice, bread, etc";
  }
  dialog.appendChild(dialogText);
  const closeDialog = document.createElement("button");
  closeDialog.textContent = "close";
  dialog.appendChild(closeDialog);
  openDialog.addEventListener("click", () => {
    dialog.showModal();
  });
  closeDialog.addEventListener("click", () => {
    dialog.close();
  });

  const inputDiv = document.createElement("section");
  inputDiv.appendChild(label);

  //inputDiv.appendChild(openDialog);
  inputDiv.appendChild(dialog);

  return inputDiv;
}
