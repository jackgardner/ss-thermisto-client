import game from './game';
import users from './users';
import account from './account';
import auth from './auth';

import {combineReducers} from 'redux';

const rootReducer = combineReducers({
  game,
  users,
  auth,
  account
});

export default rootReducer;
