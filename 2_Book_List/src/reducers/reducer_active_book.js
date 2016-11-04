// State argument is not application state, only the state this reducer is responsible for
// Set it to null when the user first comes in
// Return fresh object
// If we don't care about the action, need a base case to return the current state
export default function(state = null, action) {
  switch(action.type) {
  case 'BOOK_SELECTED':
    return action.payload;
  }

  return state;
}
