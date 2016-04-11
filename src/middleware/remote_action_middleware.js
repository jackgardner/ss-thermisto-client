export default socket => store => next => action => {

  switch (action.type) {
    case "INCREMENT_SKILL":
      socket.emit('LOBBY_STAT_ALTER', {
        direction: 'INC',
        skill: action.skill._id
      });
      break;
    case 'DECREMENT_SKILL':
      socket.emit('LOBBY_STAT_ALTER', {
        direction: 'DEC',
        skill: action.skill._id
      });
      break;
    case "USER_LOGIN":
      socket
        .on('authenticated', function () {
          store.dispatch({
            type: 'USER_AUTH',
            token: action.token,
            email: action.email
          });
        })
        .emit('authenticate', { token: action.token });
      break;
  }
  return next(action);
};
