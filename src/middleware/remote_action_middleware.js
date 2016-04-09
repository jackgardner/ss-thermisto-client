export default socket => store => next => action => {

  switch (action.type) {
    case "USER_LOGIN":
      socket
        .on('authenticated', function () {
          console.log("Should Dispatch");
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
