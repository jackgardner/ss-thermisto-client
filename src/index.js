import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/Main';

import store from '../stores/GameStore';
import startGame from '../sources/gameSource';
import { Provider } from 'react-redux';


startGame(store);


// Render the main component into the dom
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('app'));
