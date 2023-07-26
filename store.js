import { applyMiddleware, createStore } from 'redux';
import rootReducer from './reducers/root';
import logMiddleware from './middleware/log';
import apiMiddleware from './middleware/api';

const store = createStore(
    rootReducer,
    applyMiddleware(logMiddleware, apiMiddleware)
); //Default state provided in reducers 

window.store = store; // Making store globally availably    
export default store; // use export default when only exporting one thing from a file