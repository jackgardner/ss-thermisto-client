export default socket => store => next => action => {

  switch (action.type) {
    case "USER_LOGIN":

      console.log(action);
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
