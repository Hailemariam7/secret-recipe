export function createTextarea() {
  const textarea = document.createElement("textarea");
  textarea.id = "ingredients";
  textarea.name = "ingredients";
  textarea.cols = 20;
  textarea.rows = 2;
  textarea.placeholder = "e.g. flour, banana, sugar (optional)";

  const label = document.createElement("label");
  label.textContent = "Any ingredients at hand.";
  label.setAttribute("for", "ingredients");
  label.appendChild(textarea);
  return label;
}
