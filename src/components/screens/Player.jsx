

import React from 'react';
class Player extends React.Component {

  render () {
    return (
      <div>
        <h4> {this.props.player._id} : {this.props.player.name} </h4>
        {this.props.player.skills.map((a, b) =>
          {
          return (<h5 key={a._id}> {a.name} </h5>)
        }
        )}
      </div>
    )
  }
}


export default Player;
