import game from './game';
import users from './users';
import account from './account';

import {combineReducers} from 'redux';

const rootReducer = combineReducers({
  game,
  users,
  account
});

export default rootReducer;
