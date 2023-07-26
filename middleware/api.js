import axios from 'axios';
import { FETCH_RECIPES } from '../constants/actionTypes';
import { setRecipes } from '../actions/recipes';
import { setIngredients } from '../actions/ingredients';

const URL = 'https://s3.amazonaws.com/500tech-shared/db.json';

function fetchRecipes(url, callback) {
    axios.get(url)
        .then(callback)
        .catch((error) => { console.log(`Error fetching recipes: ${error}`); });
}

const apiMiddleware = ({ dispatch }) => next => action => {
    if (action.type === FETCH_RECIPES) {
        fetchRecipes(URL, data => {
            dispatch(setRecipes(data.recipes));//New action of setting after catching fetch inbetween
            dispatch(setIngredients(data.ingredients));
        });
    }

    next(action); //Always have next so moves on to next middleware 
}

export default apiMiddleware;