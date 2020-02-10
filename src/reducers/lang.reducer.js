import { LOAD_LITERALS, loadLiterals } from '../actions/lang.action'
const defaultState = {};



export default function literals (state = defaultState, action) {
  switch (action.type) {
    case LOAD_LITERALS:
      return action.payload;
    default:
      return state;
  }
};



