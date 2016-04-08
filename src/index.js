import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/Main.jsx';

import DevTools from './components/DevTools';
import store from './stores/GameStore';

import { Provider } from 'react-redux';

// Render the main component into the dom
ReactDOM.render(
  <Provider store={store}>
    <div>
    <App />

    <DevTools />
      </div>
  </Provider>,
  document.getElementById('app'));
