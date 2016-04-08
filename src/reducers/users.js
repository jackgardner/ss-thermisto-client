import { YOUR_DETAILS, UPDATE_USERS, HOST_CHANGE } from '../actions/gameActions';

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

    case HOST_CHANGE:
      return state;
    default:
      return state;
  }
}
