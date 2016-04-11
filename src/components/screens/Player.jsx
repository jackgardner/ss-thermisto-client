

import React from 'react';
import SkillSlider from './SkillSlider.jsx';

class Player extends React.Component {

  render () {
    return (
      <div>
        <h4>{this.props.player.name}</h4>
        <h5>{this.props.player.skillPoints}</h5>
        <ul>
        {this.props.player.skills.map((skill) =>
          {
            return (<li key={skill._id}><SkillSlider showEditButtons={this.props.currentPlayer} skill={skill}/></li>)
          }
        )}
        </ul>
      </div>
    )
  }
}


export default Player;
