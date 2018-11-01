import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import logo from '../logo.svg'

import FirstPageContainer from '../containers/FirstPage';
import Menu from './Menu';
import DeviceInfo from './DeviceInfo';
import HomePage from '../containers/HomePage';

class App extends Component {

  render() {
    return (
      <Router>
        <>
          <DeviceInfo render={window => <Menu logo={logo} isMobile={window.isMobile}/>} />
          <Route exact path="/home" component={HomePage}/>
          <Route exact path="/" component={FirstPageContainer} />
        </>
      </Router>
    );
  }
}

export default App;
