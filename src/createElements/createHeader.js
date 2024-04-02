import { navPopup } from "./navPopup.js";
export function createHeader() {
  //logo
  const logo = document.createElement("img");
  logo.src = "../public/assets/logo.jpg";
  logo.onclick = clearPage;

  const h1 = document.createElement("h1");
  h1.textContent = "Recipe-Finder";
  h1.onclick = clearPage;

  //hamburger menu button
  const hamburgerMenu = document.createElement("img");
  hamburgerMenu.src = "../../public/assets/hamburgerMenu.jpg";
  hamburgerMenu.alt = "menu";
  hamburgerMenu.id = "hamburger_menu";

  //home tab
  const home = document.createElement("p");
  home.textContent = "Home";
  home.onclick = clearPage;

  //about tab
  const aboutTAb = document.createElement("section");
  aboutTAb.classList.add("tab");

  const about = document.createElement("p");
  about.textContent = "About";

  const aboutPopup = document.createElement("pre");
  aboutTAb.appendChild(about);
  aboutTAb.appendChild(aboutPopup);
  aboutPopup.classList.add("about-popup");

  aboutPopup.textContent =
    "This is a HYF project on using APIs. The API used is spoonacular API. This is meant to provide you a recipe based on the data you filled the form with.";

  //services tab
  const servicesTab = document.createElement("section");
  servicesTab.classList.add("tab");

  const services = document.createElement("p");
  services.textContent = "Services";
  const servicesPopup = document.createElement("pre");
  servicesTab.appendChild(services);
  servicesTab.appendChild(servicesPopup);
  servicesPopup.classList.add("services-popup");

  servicesPopup.textContent =
    "Recipe search based on the meal you want to prepare and you can filter the results based on personal preferences like diet type, any intolerance you may have, the ingredients you have at hand, the type of meal you want to prepare like breakfast, soup, supper, etc, or if you want a specific cuisine like chinese or greek.                     After you get the result, you can click on individual recipe for detail. A link is provided for each recipe to the website where you can get steps on how to cook it.";

  //contact tab
  const contactTab = document.createElement("section");
  contactTab.classList.add("tab");

  const contact = document.createElement("p");
  contact.textContent = "Contact";
  const contactPopup = document.createElement("pre");
  contactTab.appendChild(contact);
  contactTab.appendChild(contactPopup);
  contactPopup.classList.add("contact-popup");

  contactPopup.textContent =
    "you can find this project on https://github.com/Hailemariam7/secret-recipe";

  //help tab
  const helpTab = document.createElement("section");
  helpTab.classList.add("tab");

  const help = document.createElement("p");
  help.textContent = "Help";
  const helpPopup = document.createElement("pre");
  helpPopup.classList.add("help-popup");
  helpTab.appendChild(help);
  helpTab.appendChild(helpPopup);

  helpPopup.textContent =
    "Here is how you can perfectly fill the form and get the result you are looking for.                                                     The first input field is the query, here you should write the meal you want to prepare like rice, bread, etc.                                                     Cuisine: the cuisine(s) of the recipes. One or more (comma separated) of the following: african, chinese, japanese, korean, vietnamese, thai, indian, british, irish, french, italian, mexican, spanish, middle eastern, jewish, american, cajun, southern, greek, german, nordic, eastern european, caribbean, or latin american.                                                Diet: the diet to which the recipes must be compliant. Possible values are: pescetarian, lacto vegetarian, ovo vegetarian, vegan, paleo, primal, and vegetarian.                                     Intolerances: a comma-separated list of intolerances. All found recipes must not have ingredients that could cause problems for people with one of the given tolerances. Possible values are: dairy, egg, gluten, peanut, sesame, seafood, shellfish, soy, sulfite, tree nut, and wheat.                                          Ingredients: a comma-separated list of ingredients that should/must be contained in the recipe.                                                Type: the type of the recipes. One of the following: main course, side dish, dessert, appetizer, salad, bread, breakfast, soup, beverage, sauce, or drink.";

  const navTabs = document.createElement("section");
  navTabs.classList.add("nav-tabs");
  navTabs.appendChild(home);
  navTabs.appendChild(aboutTAb);
  navTabs.appendChild(servicesTab);
  navTabs.appendChild(contactTab);
  navTabs.appendChild(helpTab);

  const nav = document.createElement("nav");
  //nav.appendChild(hamburgerMenu);
  nav.appendChild(navTabs);

  const header = document.createElement("header");
  header.appendChild(logo);
  header.appendChild(h1);
  // header.appendChild(nav);
  return header;
}

export function clearPage() {
  console.log("page cleared");
  localStorage.removeItem("recipes");
  location.reload();
}
