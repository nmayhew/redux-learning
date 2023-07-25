const rootReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_RECIPE':
            return Object.assign({}, state, { //ALWAYS return a new object never mutate state
                recipes: state.recipes.concat({ name: action.name })
            }); //concat returns a new array with the new recipe added to the end (push mutates the array so DON'T USE)
        case 'ADD_INGREDIENT':
            const newIngredient = {
                name: action.name,
                quantity: action.quantity,
                recipe: action.recipe
            };
            return Object.assign({}, state, {
                ingredients: state.ingredients.concat(newIngredient)
            });
    }
    return state
};

export default rootReducer; // use export default when only exporting one thing from a file