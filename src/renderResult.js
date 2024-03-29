import { recipeDetail } from "./recipeDetail.js";
const recipes = [
  {
    id: 618390,
    title: "Quick Apple Pies",
    image: "https://img.spoonacular.com/recipes/618390-312x231.jpg",
    imageType: "jpg",
    usedIngredientCount: 1,
    missedIngredientCount: 2,
    missedIngredients: [
      {
        id: 1123,
        amount: 1,
        unit: "",
        unitLong: "",
        unitShort: "",
        aisle: "Milk, Eggs, Other Dairy",
        name: "egg",
        original: "1 Egg",
        originalName: "Egg",
        meta: [],
        image: "https://img.spoonacular.com/ingredients_100x100/egg.png",
      },
      {
        id: 10018338,
        amount: 1,
        unit: "sheet",
        unitLong: "sheet",
        unitShort: "sheet",
        aisle: "Frozen",
        name: "pastry dough",
        original: "1 sheet Pastry Dough",
        originalName: "Pastry Dough",
        meta: [],
        image: "https://img.spoonacular.com/ingredients_100x100/dough.jpg",
      },
    ],
    usedIngredients: [
      {
        id: 9003,
        amount: 5,
        unit: "medium",
        unitLong: "mediums",
        unitShort: "medium",
        aisle: "Produce",
        name: "apples",
        original: "5 medium Apples",
        originalName: "Apples",
        meta: [],
        image: "https://img.spoonacular.com/ingredients_100x100/apple.jpg",
      },
    ],
    unusedIngredients: [],
    likes: 1005,
  },
  {
    id: 615374,
    title: "Mom's Apple Pie",
    image: "https://img.spoonacular.com/recipes/615374-312x231.jpg",
    imageType: "jpg",
    usedIngredientCount: 1,
    missedIngredientCount: 2,
    missedIngredients: [
      {
        id: 2010,
        amount: 1,
        unit: "tsp",
        unitLong: "teaspoon",
        unitShort: "tsp",
        aisle: "Spices and Seasonings",
        name: "cinnamon",
        original: "1 to 1 ½ tsp. cinnamon",
        originalName: "cinnamon",
        meta: [],
        image: "https://img.spoonacular.com/ingredients_100x100/cinnamon.jpg",
      },
      {
        id: 1145,
        amount: 3,
        unit: "tbsp",
        unitLong: "tablespoons",
        unitShort: "Tbsp",
        aisle: "Milk, Eggs, Other Dairy",
        name: "butter",
        original: "3 tbsp. unsalted butter",
        originalName: "unsalted butter",
        meta: ["unsalted"],
        extendedName: "unsalted butter",
        image:
          "https://img.spoonacular.com/ingredients_100x100/butter-sliced.jpg",
      },
    ],
    usedIngredients: [
      {
        id: 9003,
        amount: 8,
        unit: "large",
        unitLong: "larges",
        unitShort: "large",
        aisle: "Produce",
        name: "apples",
        original: "8 large apples, peeled, cored and sliced",
        originalName: "apples, peeled, cored and sliced",
        meta: ["cored", "peeled", "sliced"],
        image: "https://img.spoonacular.com/ingredients_100x100/apple.jpg",
      },
    ],
    unusedIngredients: [],
    likes: 434,
  },
  {
    id: 611026,
    title: "Apple Crisp III",
    image: "https://img.spoonacular.com/recipes/611026-312x231.jpg",
    imageType: "jpg",
    usedIngredientCount: 1,
    missedIngredientCount: 2,
    missedIngredients: [
      {
        id: 1077,
        amount: 0.75,
        unit: "cup",
        unitLong: "cups",
        unitShort: "cup",
        aisle: "Milk, Eggs, Other Dairy",
        name: "milk",
        original: "3/4 cup milk",
        originalName: "milk",
        meta: [],
        image: "https://img.spoonacular.com/ingredients_100x100/milk.png",
      },
      {
        id: 8120,
        amount: 2,
        unit: "cups",
        unitLong: "cups",
        unitShort: "cup",
        aisle: "Cereal",
        name: "rolled oats",
        original: "2 cups rolled oats",
        originalName: "rolled oats",
        meta: [],
        image:
          "https://img.spoonacular.com/ingredients_100x100/rolled-oats.jpg",
      },
    ],
    usedIngredients: [
      {
        id: 9003,
        amount: 2.5,
        unit: "cups",
        unitLong: "cups",
        unitShort: "cup",
        aisle: "Produce",
        name: "macintosh apples",
        original: "2 1/2 cups Macintosh apples - peeled, cored and quartered",
        originalName: "Macintosh apples - peeled, cored and quartered",
        meta: ["cored", "peeled", "quartered"],
        image: "https://img.spoonacular.com/ingredients_100x100/apple.jpg",
      },
    ],
    unusedIngredients: [],
    likes: 138,
  },
  {
    id: 47950,
    title: "Cinnamon Apple Crisp",
    image: "https://img.spoonacular.com/recipes/47950-312x231.jpg",
    imageType: "jpg",
    usedIngredientCount: 1,
    missedIngredientCount: 2,
    missedIngredients: [
      {
        id: 93674,
        amount: 0.5,
        unit: "cup",
        unitLong: "cups",
        unitShort: "cup",
        aisle: "Milk, Eggs, Other Dairy",
        name: "land o cinnamon sugar butter spread",
        original: "1/2 cup Land O Lakes® Cinnamon Sugar Butter Spread",
        originalName: "Land O Lakes® Cinnamon Sugar Butter Spread",
        meta: ["lakes®"],
        image:
          "https://img.spoonacular.com/ingredients_100x100/cinnamon-sugar-butter.png",
      },
      {
        id: 8120,
        amount: 0.75,
        unit: "cup",
        unitLong: "cups",
        unitShort: "cup",
        aisle: "Cereal",
        name: "old-fashioned oats",
        original: "3/4 cup uncooked old-fashioned oats",
        originalName: "uncooked old-fashioned oats",
        meta: ["uncooked"],
        image:
          "https://img.spoonacular.com/ingredients_100x100/rolled-oats.jpg",
      },
    ],
    usedIngredients: [
      {
        id: 9003,
        amount: 6,
        unit: "cups",
        unitLong: "cups",
        unitShort: "cup",
        aisle: "Produce",
        name: "apples",
        original: "6 medium (6 cups) apples, peeled, cored, sliced",
        originalName: "medium apples, peeled, cored, sliced",
        meta: ["cored", "peeled", "sliced"],
        image: "https://img.spoonacular.com/ingredients_100x100/apple.jpg",
      },
    ],
    unusedIngredients: [],
    likes: 35,
  },
  {
    id: 70306,
    title: "Easy Cinnamon Apple Pie",
    image: "https://img.spoonacular.com/recipes/70306-312x231.jpg",
    imageType: "jpg",
    usedIngredientCount: 1,
    missedIngredientCount: 2,
    missedIngredients: [
      {
        id: 11408,
        amount: 1.6666666,
        unit: "cups",
        unitLong: "cups",
        unitShort: "cup",
        aisle: "Frozen",
        name: "hershey's cinnamon chips",
        original: "1-2/3 cups (10-oz. pkg.) HERSHEY'S Cinnamon Chips, divided",
        originalName: "(10-oz. pkg.) HERSHEY'S Cinnamon Chips, divided",
        meta: ["divided", "(10-oz. pkg.)"],
        image:
          "https://img.spoonacular.com/ingredients_100x100/french-fries-isolated.jpg",
      },
      {
        id: 18334,
        amount: 15,
        unit: "oz",
        unitLong: "ounces",
        unitShort: "oz",
        aisle: "Refrigerated",
        name: "pie crusts",
        original:
          "1 package (15 oz.) refrigerated pie crusts, or pastry for double-crust 9-inch pie",
        originalName:
          "package refrigerated pie crusts, or pastry for double-crust 9-inch pie",
        meta: ["refrigerated", "for double-crust pie"],
        extendedName: "refrigerated pie crusts",
        image: "https://img.spoonacular.com/ingredients_100x100/pie-crust.jpg",
      },
    ],
    usedIngredients: [
      {
        id: 9003,
        amount: 40,
        unit: "oz",
        unitLong: "ounces",
        unitShort: "oz",
        aisle: "Produce",
        name: "apples",
        original:
          "2 cans (20-oz. each) sliced apples (not pie filling), drained *",
        originalName: "cans each) sliced apples (not pie filling), drained",
        meta: ["drained", "sliced", "canned", "(not pie filling)"],
        extendedName: "canned apples",
        image: "https://img.spoonacular.com/ingredients_100x100/apple.jpg",
      },
    ],
    unusedIngredients: [],
    likes: 5,
  },
];
export function renderResult() {
  const display = document.createElement("section");

  recipes.forEach((recipe) => {
    const figcaption = document.createElement("figcaption");
    figcaption.textContent = recipe.title;
    const image = document.createElement("img");
    image.src = recipe.image;
    const figure = document.createElement("figure");
    figure.appendChild(image);
    figure.appendChild(figcaption);
    figure.addEventListener("click", () => {
      console.log("recipe detailed will be given.");
      recipeDetail(recipe.id);
    });
    display.appendChild(figure);
  });

  display.classList.add("displayRecipes");
  const main = document.querySelector("main");
  main.appendChild(display);
}
