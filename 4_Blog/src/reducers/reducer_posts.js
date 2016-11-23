// Create a REDUCER to CATCH the ACTIONCREATOR data to produce our application state
// Intial_State = object, not an object - just return that state
import { FETCH_POSTS } from "../actions/index";

// Need solid understand of what the state should be - an array or an object
// One state can be ARRAY to hold the list of posts, 2nd state can be OBJECT, individual viewing on blog post
const INITIAL_STATE = { all: [], post: null };

// Data is located on action.payload.data
// Our reducers need to produce a new object, dont' return our state
export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
  case FETCH_POSTS:
    return { ...state, all: action.payload.data };

  default:
    return state;
  }
}
