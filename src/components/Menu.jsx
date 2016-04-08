
import React from 'react';

class Menu extends React.Component {

  componentDidMount() {
  }

  render () {
    return (
      <div className="ui fixed inverted menu">
        <div className="ui container">
          <a href="#" className="header item">
              SS Thermisto
          </a>
          <a href="#" className="item">{this.props.account.email}</a>
        </div>
      </div>
    );
  }
}

Menu.defaultProps = {
};

export default Menu;
