import { USER_AUTH } from '../actions/gameActions';

export default function initialState(state = initialState, action) {
  switch (action.type) {
    case USER_AUTH:
      return Object.assign({}, state, {
        account: action.account
      });
    default:
      return state;
  }
}
