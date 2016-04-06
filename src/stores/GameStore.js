import { createStore } from 'redux';
import reducers from 'reducers';

export createStore(reducers(window.INITIAL_STATE));
