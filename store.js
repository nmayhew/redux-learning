import { applyMiddleware, createStore } from 'redux';
import rootReducer from './reducers/root';
import logMiddleware from './log';

const store = createStore(
    rootReducer,
    applyMiddleware(logMiddleware)
); //Default state provided in reducers 

window.store = store; // Making store globally availably    

export default store; // use export default when only exporting one thing from a file