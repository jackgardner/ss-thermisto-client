import React from 'react';
import Player from './Player.jsx';
class LobbyScreen extends React.Component {

  render () {
    return (
      <div>
        <h2> The lobby  </h2>
        <h3> This GameID : {this.props.info.gameid} </h3>
        <h3> Users: </h3>
        {[...this.props.game.players].map((x, i) => {
          return (<Player key={x._id} player={x} {...this.props} />);
        }
        )}
      </div>
    )
  }
}


export default LobbyScreen;
