import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/Main.jsx';

import DevTools from './components/DevTools';
import configureStore from 'stores/GameStore';
import init from 'sources/gameSource';

import { Provider } from 'react-redux';

const store = configureStore(window.__INITIAL_STATE__);
init(store);


// Render the main component into the dom
ReactDOM.render(
  <Provider store={store}>
    <div>
    <App />

    <DevTools />
      </div>
  </Provider>,
  document.getElementById('app'));
