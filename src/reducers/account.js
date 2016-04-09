import { USER_AUTH, AUTH_ERROR } from '../actions/gameActions';

export default function initialState(state = initialState, action) {
  switch (action.type) {

    case USER_AUTH:
      return Object.assign({}, state, {
        token: action.token,
        email: action.email
      });
    default:
      return state;
  }
}
