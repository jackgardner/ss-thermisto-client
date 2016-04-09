
import { AUTH_ERROR } from '../actions/gameActions';

export default function initialState(state = initialState, action) {
  switch (action.type) {
    case AUTH_ERROR:
      return Object.assign({}, state, {
        error: action.error
      });
    default:
      return state;
  }
}
