
import React, { Component } from 'react';
import Events from '../utils/events';
import Header from './Header';

import '../../styles/index';
import '../styles/components/App';

class App extends Component {

  componentDidMount() {
    Events.on(window, 'resize', window.__setFontSize__);
  }

  render() {
    return (
      <div>
        <Header />
        <div className="app-container">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;