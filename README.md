# Free recipe

Many times people do their grocery shopping, but don't know exactly what to cook, or sometimes they know what to cook but they want to try something new. Either case they have a need for a recipe. This project is meant to create a app that will suggest a recipe based on the ingredients the user provides. It will be using the spoonacular api found in rapidapi.

## Development

The development is not yet finished nor is this readme file the last version, hopefully it will be improved at the completion of the project. It will be built using HTML, CSS, JS.

## Installing Dependencies

There are no dependencies required to run this application.

# Structure

The structure of the project is like;
public
src
└── app.js
└── createElements.js
└── fetchRecipe.js
└── displayRecipe.js

index.html

```JavaScript

- `public` this contains the static files such as assets.
- `src` this contains all of our JavaScript code.
  - `app.js` this will contain the function that will be called upon loading of the page and it will initiate the app.
  - `createElements.js` here will be where the DOM elements are created.
  - `fetchRecipe.js` here will be the api call to
  - `displayRecipe` when the fetch is successful, this will display the result.


# Goal and Backlog

We completed the backlocks as seen below.

- [ ] (must have) A user must be able to provide available ingredients.
- [ ] (must have) At least one recipe must be returned of course if the fetch was successful.
- [ ] (must have) Even when no ingredients are provided by the user a random recipe must be returned.
- [ ] (must have) Add a favicon
- [ ] (should have) Image of the cooked recipe.
- [ ] (should have) When applicable also should display image of the missing ingredients not just their names.
- [ ] (should have) A user can refresh the page and not lose the returned result.
- [ ] (could have) A possibility to provide information on allergic ingredients and must include ingredients.
- [ ] (could have) A meal plan functionality like day or week meal plan.
```
