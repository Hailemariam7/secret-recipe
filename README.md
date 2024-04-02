# Recipe-Finder

Many times people do their grocery shopping, but don't know exactly what to cook, or sometimes they know what to cook but they want to try something new. Either case they have a need for a recipe. This project is meant to create a app that will suggest a recipe based on the personal preferences the user provides. It will be using the spoonacular api found in rapidapi.

## Development

It is built using HTML, CSS, JS.

## Installing Dependencies

There are no dependencies required to run this application.

# Structure

The structure of the project is like;
public
src
├── public
└── src
| └── createElements
| | └──createForm.js
| | └──createInput.js
| | └── createHeader.js
| | └── createTextarea.js
| └── fetchRecipes
| | └── fetchRecipes.js
| | └── fetchRecipeDetails.js
| └── renderResults
| | └── renderRecipeDetail.js
| | └── renderRecipes.js
app.js
index.html

```JavaScript

- `public` this contains the static files such as assets.
- `src` this contains all of our JavaScript code.
  - `createElements` here is where the DOM elements are created.
  - `fetchRecipe` here is where the api is call.
  - `renderResults` when the fetch is successful, this will display the result.
- `app.js` this contains the function that will be called upon loading of the page and it will initiate the app.
- `index.html` this is the only html page as a single page that it is.

# Goal and Backlog

We completed the backlocks as seen below.

- [x] (must have) A user must be able to provide information to assist with the search.
- [x] (must have) At least one recipe must be returned of course if the fetch was successful.
- [x] (must have) Add a favicon
- [x] (should have) list of ingredients for the recipe.
- [x] (should have) A user can refresh the page and not lose the returned result.
- [x] (could have) A possibility to provide information on allergic ingredients and any intolerances.
- [ ] (could have) A meal plan functionality like day or week meal plan.
```
