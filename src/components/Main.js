require('normalize.css');
require('styles/App.css');

import DebugLog from './DebugLog/index.jsx';


import React from 'react';
class AppComponent extends React.Component {
  componentDidMount() {
  },
  render () {
    return (
      <div className="index">
        <div className="notice">
          <DebugLog />
        </div>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
