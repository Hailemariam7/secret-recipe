export function createHeader() {
  const logo = document.createElement("img");
  logo.src = "../public/assets/logo";

  const h1 = document.createElement("h1");
  h1.textContent = "Secret-Recipe";

  const home = document.createElement("li");
  home.textContent = "Home";

  const about = document.createElement("li");
  about.textContent = "About";

  const services = document.createElement("li");
  services.textContent = "Services";

  const contact = document.createElement("li");
  contact.textContent = "Contact";

  const ul = document.createElement("ul");
  ul.appendChild(home);
  ul.appendChild(about);
  ul.appendChild(services);
  ul.appendChild(contact);

  const nav = document.createElement("nav");
  nav.appendChild(ul);

  const header = document.createElement("header");
  header.appendChild(logo);
  header.appendChild(h1);
  header.appendChild(nav);
  return header;
}
