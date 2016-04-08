import { createStore, compose, applyMiddleware } from 'redux';
import DevTools from '../components/DevTools';

import rootReducer from '../reducers';
import init from 'sources/gameSource';
import remoteActionsMiddleware from '../middleware/remote_action_middleware';
import socket from '../socket';

const finalCreateStore = compose(
  applyMiddleware(remoteActionsMiddleware(socket)),
  DevTools.instrument()
)(createStore);

function configureStore(initialState) {
  const store = finalCreateStore(rootReducer, initialState);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}


const store = configureStore({
  account: null
});

init(store);

export default store;
