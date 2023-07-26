import { ADD_RECIPE, FETCH_RECIPES, SET_RECIPES } from "../constants/actionTypes";
// Use Action Creators to simplify structure from user 
// Can do default values, perform cleanup, name checks etc...
export const addRecipe = (name) => ({
    type: ADD_RECIPE,
    name
});

export const fetchRecipes = () => ({
    type: FETCH_RECIPES
});

export const setRecipes = (recipes) => ({
    type: SET_RECIPES, recipes
});
