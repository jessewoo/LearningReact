import { FETCH_POSTS, FETCH_POST } from "../actions/index";

// There are two objects in the STATE
const INITIAL_STATE = { all: [], post: null };

// Data is located on action.payload.data
// Our reducers need to produce a new object, dont' return our state
export default function(state = INITIAL_STATE, action) {
  console.log("Action:", action)
  switch(action.type) {
  case FETCH_POSTS:
    return { ...state, all: action.payload.data };

  case FETCH_POST:
    return { ...state, post: action.payload.data };

  default:
    return state;
  }
}
