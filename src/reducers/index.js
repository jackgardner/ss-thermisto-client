import game from './game';
import users from './users';

import {combineReducers} from 'redux';

const rootReducer = combineReducers({
  game,
  users
});

export default rootReducer;
