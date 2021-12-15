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
    console.log(err);
  }
};

//show recipe when hash changes
['hashchange', 'load'].forEach(ev =>
  window.addEventListener(ev, controlRecipes)
);
//same as doing the following:
// window.addEventListener('hashchange', controlRecipes);
// window.addEventListener('load', controlRecipes);
