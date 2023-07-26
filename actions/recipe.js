import { ADD_RECIPE } from "../constants/actionTypes";
// Use Action Creators to simplify structure from user 
// Can do default values, perform cleanup, name checks etc...
export const addRecipe = (name) => ({
    type: ADD_RECIPE,
    name
});