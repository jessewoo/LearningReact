import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';

// Function to return piece of an application state, because our application can have many states
const rootReducer = combineReducers({
  // Mapping of our state, key - name of state, value whatever gets returned
  books: BooksReducer
});

export default rootReducer;
