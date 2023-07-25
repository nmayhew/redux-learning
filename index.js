import store from "./store";
import { addRecipe } from "./actions/recipe";
import { addIngredient } from "./actions/ingredients";

console.log(store.getState());

store.dispatch(addRecipe('Pancakes'));
store.dispatch(addIngredient('Pancakes', 'Egg', 3));

console.log(store.getState()); //returns current state of store