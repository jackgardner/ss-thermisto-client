import {combineReducers} from 'redux';
import { error, gameInfo } from '../actions/gameActions'

export default function (initialState) {
  function messages(currentMessages=initialState.messages, action) {
    const messages = currentMessages.map(message => Object.assign({}, message));

    switch(action.type) {
      case error:
        messages.push(Object.assign({}, action.message));
        break;
    }

    return messages;
  }

  function currentMessage(currentMessage=initialState.currentMessage, action) {
    switch(action.type) {
      case UPDATE_MESSAGE:
        return action.message;
      case ADD_MESSAGE:
        return '';
      default:
        return currentMessage;
    }
  }

  return combineReducers({currentMessage, messages});
}
