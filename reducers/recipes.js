import { ADD_RECIPE, SET_RECIPES } from "../constants/actionTypes";

const initialState = [];

const recipesReducer = (recipes = initialState, action) => {
    switch (action.type) {
        case ADD_RECIPE:
            return recipes.concat({ name: action.name });

        case SET_RECIPES: // return the recipes from the server in fetch call
            return action.recipes;
    }

    return recipes;
};

export default recipesReducer;