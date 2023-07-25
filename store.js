import { createStore } from 'redux';
import rootReducer from './reducers/root';

const store = createStore(rootReducer); //Default state provided in reducers 

window.store = store; // Making store globally availably    

export default store; // use export default when only exporting one thing from a file