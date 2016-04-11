import React from 'react';
import store from '../../stores/GameStore';

class SkillSlider extends React.Component {

  constructor() {
    super();
    this.incrementSkill = this.incrementSkill.bind(this);
    this.decrementSkill = this.decrementSkill.bind(this);

  }

  incrementSkill() {
    store.dispatch({type: 'INCREMENT_SKILL', skill: this.props.skill});
  }

  decrementSkill() {
    store.dispatch({type: 'DECREMENT_SKILL', skill: this.props.skill});
  }

  render() {

    let incrementButton = null;
    let decrementButton = null;

    if (this.props.showEditButtons) {
      incrementButton = (<input type="button" value="+" onClick={this.incrementSkill}/>);
      decrementButton = (<input type="button" value="-" onClick={this.decrementSkill}/>);
    }
    return (
      <div>
        {this.props.skill.name}
        {decrementButton}
        <strong>{this.props.skill.currentValue}</strong>
        {incrementButton}
      </div>
    );
  }
}

export default SkillSlider;
