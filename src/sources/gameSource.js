import * as actions from '../actions/gameActions';
import socket from '../socket';

export default function (store) {
  socket.on(actions.GAME_INFO, function (packet) {
    store.dispatch({ type: actions.GAME_INFO, info: packet });
  });

  socket.on(actions.YOUR_DETAILS, function (packet) {
    store.dispatch({ type: actions.YOUR_DETAILS, details: packet });
  });

  socket.on(actions.STATE_CHANGE, function (packet) {
    store.dispatch({ type: actions.STATE_CHANGE, state: packet });
    store.dispatch({ type: actions.UPDATE_USERS, users: packet.players });
  });
}
