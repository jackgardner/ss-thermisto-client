export default socket => store => next => action => {

  switch (action.type) {
    case "USER_LOGIN":
      socket
        .on('authenticated', function () {
          store.dispatch({
            type: 'USER_AUTH',
            token: action.account.token,
            email: action.account.email
          });
        })
        .emit('authenticate', { token: action.account.token });
      break;
  }
  return next(action);
};
