import store from "./store";
import loadUI from "./ui";
import { addRecipe } from "./actions/recipe";
import { addIngredient } from "./actions/ingredients";

loadUI();

console.log(store.getState());

store.dispatch(addRecipe('Pancakes'));
store.dispatch(addIngredient('Pancakes', 'Egg', 3));

console.log(store.getState()); //returns current state of store