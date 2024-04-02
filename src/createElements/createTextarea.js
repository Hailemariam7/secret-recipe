export function createTextarea() {
  const textarea = document.createElement("textarea");
  textarea.id = "ingredients";
  textarea.name = "ingredients";
  textarea.cols = 20;
  textarea.rows = 2;
  textarea.placeholder = "e.g. flour, banana, sugar (optional)";

  const label = document.createElement("label");
  label.textContent = "Ingredients.";
  label.setAttribute("for", "ingredients");

  const openDialog = document.createElement("span");
  label.appendChild(openDialog);
  label.appendChild(textarea);

  openDialog.textContent = "(Explanation)";
  openDialog.classList.add("open-dialog");

  const dialog = document.createElement("dialog");
  const dialogText = document.createElement("p");

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

  dialogText.textContent =
    "Ingredients: a comma-separated list of ingredients that should/must be contained in the recipe. Please try to use only one space between the ingredients. Thank you!";
  const textDiv = document.createElement("section");
  textDiv.appendChild(label);
  textDiv.appendChild(dialog);

  return textDiv;
}
