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

  const label = document.createElement("label");
  label.textContent = labelText;
  label.setAttribute("for", name);
  label.appendChild(input);
  return label;
}
