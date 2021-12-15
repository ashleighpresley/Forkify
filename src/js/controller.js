import 'core-js/stable';
import 'regenerator-runtime/runtime';
import * as model from './model.js';
import recipeView from './views/recipeView.js';

///////////////////////////////////////

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);

    if (!id) return;

    //render spinner
    recipeView.renderSpinner();

    //Load recipe
    await model.loadRecipe(id);

    //Render recipe
    recipeView.render(model.state.recipe);
  } catch (err) {
    recipeView.renderError();
  }
};

const init = function () {
  //subscribing to controlRecipes
  recipeView.addHandlerRender(controlRecipes);
};

//init function is immediataly called
init();
