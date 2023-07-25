import { createStore } from 'redux';
import rootReducer from './reducers/root';

//Default state usually done in server rendering 
const defaultState = {
    recipes: [{
        name: 'Omelette'
    }],
    ingredients: [{
        recipe: 'Omelette',
        name: 'Eggs',
        quantity: 2
    }]
};

const store = createStore(rootReducer, defaultState);

window.store = store; // Making store globally availably    

export default store; // use export default when only exporting one thing from a file