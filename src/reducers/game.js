import { GAME_INFO, STATE_CHANGE } from '../actions/gameActions'

export default function initialState(state = initialState, action) {
  switch (action.type) {
    case GAME_INFO:

      return Object.assign({}, state, {
        info: action.info
      });

    case STATE_CHANGE:
      return Object.assign({}, state, {
        state: action.state
      });
    default:
      return state;
  }
}
