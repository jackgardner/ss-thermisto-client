import * as actions from '../actions/gameActions';
import socket from '../socket';

export default function (store) {
  socket.on('ERROR', function (err) {
    console.error(err);
    store.dispatch(actions.error(err));
  });

  socket.on('GAME_INFO', function (packet) {
    store.dispatch(actions.gameInfo(packet));
  })


}
