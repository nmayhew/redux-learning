
const logMiddleware = ({ getState, dispatch }) => (next) => (action) => {
    console.log(`Action: ${JSON.stringify(action)}`);
    console.log(`Before: ${JSON.stringify(getState())}`);
    next(action);
    console.log(`After: ${JSON.stringify(getState())}`);
};
//Next is the next middleware in the chain, or the actual dispatch function if there are no more middleware in the chain.
//Action is the action that was dispatched.
//getState and dispatch are also available on the store instance itself, but they are passed as arguments to the middleware
export default logMiddleware;