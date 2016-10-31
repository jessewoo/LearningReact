import { combineReducers } from 'redux';

// Function to return piece of an application state, because our application can have many states

const rootReducer = combineReducers({
  state: (state = {}) => state
});

export default rootReducer;
