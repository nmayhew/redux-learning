import { ADD_INGREDIENT, FETCH_INGREDIENTS, SET_INGREDIENTS } from "../constants/actionTypes";
// Use Action Creators to simplify structure from user 
// Can do default values, perform cleanup, name checks etc...
export const addIngredient = (recipe, name, quantity) => ({
    type: ADD_INGREDIENT,
    recipe,
    name,
    quantity
});

export const fetchIngredients = () => ({
    type: FETCH_INGREDIENTS
});

export const setIngredients = (ingredients) => ({
    type: SET_INGREDIENTS, ingredients
});