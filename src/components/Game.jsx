import 'styles/Game.css';
import React from 'react';

class Game extends React.Component {

  componentDidMount() {
  }

  render () {

    console.log(this.props);
    if (!this.props.game) return null;

    return (
      <div className="ui main text container">
        <div>Game is currently in <strong>{this.props.game.state}</strong></div>
        <div>Players in game: {this.props.game.players.length}</div>

        <ul>
          {this.props.game.players.map((player) => {
            return <li>{player.name} {(this.props.users.current._id == player._id)?<span>(you)</span>:null}</li>
          })}
        </ul>
      </div>
    );
  }
}

Game.defaultProps = {
};

export default Game;
