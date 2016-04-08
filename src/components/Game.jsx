import 'styles/Game.css';
import React from 'react';
import * as gameStates from '../constants/states';
import Menu from './Menu.jsx';

import LobbyScreen from '../components/screens/LobbyScreen.jsx';
import LoginScreen from '../components/screens/LoginScreen.jsx';

class Game extends React.Component {

  componentDidMount() {
  }

  render () {
    var content = null;
    if (!this.props.game) return null;


    if (!this.props.account) return <LoginScreen {...this.props} />;


    switch (this.props.game.state) {
      case gameStates.LOBBY:
        content = <LobbyScreen {...this.props} />;
        break;
      default:
        return null;
    }

    return (
      <div>
        <Menu  {...this.props} />
        <div className="ui container content">
          {content}
        </div>
      </div>
    );
  }
}

Game.defaultProps = {
};

export default Game;
