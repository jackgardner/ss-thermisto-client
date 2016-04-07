import { YOUR_DETAILS, UPDATE_USERS } from '../actions/gameActions';

export default function initialState(state = initialState, action) {
  switch (action.type) {
    case UPDATE_USERS:
      return Object.assign({}, state, {
        all: action.users
      });

    case YOUR_DETAILS:
      return Object.assign({}, state, {
        current: action.details
      });
    default:
      return state;
  }
}
