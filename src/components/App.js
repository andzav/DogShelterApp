import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import logo from '../logo.svg';

import FirstPageContainer from '../containers/FirstPageContainer';
import Menu from './Menu';
import DeviceInfo from './DeviceInfo';
import HomePage from '../containers/HomePageContainer';

function App() {
  return (
    <Router>
      <React.Fragment>
        <DeviceInfo render={window => <Menu logo={logo} isMobile={window}/>} />
        <Route exact path="/home" component={HomePage}/>
        <Route exact path="/" component={FirstPageContainer} />
      </React.Fragment>
    </Router>
  );
}

export default App;
