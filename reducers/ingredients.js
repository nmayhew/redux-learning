import { ADD_INGREDIENT } from '../actions/ingredients';
const initialState = [];

const ingredientsReducer = (ingredients = initialState, action) => {
    switch (action.type) {
        case ADD_INGREDIENT:
            const newIngredient = {
                name: action.name,
                quantity: action.quantity,
                recipe: action.recipe
            };
            return ingredients.concat(newIngredient);
    }
    return ingredients;

};

export default ingredientsReducer;