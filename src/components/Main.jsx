require('normalize.css');
require('styles/App.css');

import '../../semantic/dist/semantic.css';
// import '../../semantic/dist/components/dimmer';
// import '../../semantic/dist/components/transition';
// import '../../semantic/dist/components/dropdown';
// import '../../semantic/dist/components/modal';
// import '../../semantic/dist/components/rating';
// import '../../semantic/dist/components/tab';
// import '../../semantic/dist/components/popup';
// import '../../semantic/dist/components/sticky';

import React from 'react';
import Game from '../containers/GameContainer';


class AppComponent extends React.Component {

  componentDidMount() {
  }

  render () {
    return (
      <div >
        <Game />
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
