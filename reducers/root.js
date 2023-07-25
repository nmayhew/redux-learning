import { combineReducers } from 'redux';//Very common code so just reuse this code //peforms role of rootReducer
import recipesReducer from './recipes';
import ingredientsReducer from './ingredients';

const rootReducer = combineReducers({ //runs the reducers and creates new state
    recipes: recipesReducer,
    ingredients: ingredientsReducer
});

export default rootReducer; // use export default when only exporting one thing from a file

