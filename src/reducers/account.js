import { USER_AUTH } from '../actions/gameActions';

export default function initialState(state = initialState, action) {
  switch (action.type) {
    case USER_AUTH:
      console.log('action', action);
      return Object.assign({}, state, {
        token: action.token,
        email: action.email
      });
    default:
      return state;
  }
}
