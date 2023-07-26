import store from "./store";
import loadUI from "./ui";
import { fetchRecipes } from "./actions/recipes";
import { addIngredient } from "./actions/ingredients";

loadUI();

console.log(store.getState());

store.dispatch(fetchRecipes());
store.dispatch(addIngredient('Pancakes', 'Egg', 3));

console.log(store.getState()); //returns current state of store