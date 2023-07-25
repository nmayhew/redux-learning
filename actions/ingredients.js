// Use Action Creators to simplify structure from user 
// Can do default values, perform cleanup, name checks etc...
export const addIngredient = (recipe, name, quantity) => ({
    type: 'ADD_INGREDIENT',
    recipe,
    name,
    quantity
});