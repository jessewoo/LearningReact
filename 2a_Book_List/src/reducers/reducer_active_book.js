// Always has 2 arguments - state and action - always will have an action
// State argument is NOT application state, only the state this reducer is responsible for
// If state was an integer, it will increment 1 for everytime it is called. Again, not the application state
// Reducer will be called when our app dispatches
// ES6 syntax, "state = null", if undefined, set it to null
export default function(state = null, action) {

  switch(action.type) {
    case 'BOOK_SELECTED':
      return action.payload;
  }

  return state

}
