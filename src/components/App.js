import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import logo from '../logo.svg';

import Menu from './Menu';
import DeviceInfo from './DeviceInfo';
import HomePageContainer from '../containers/HomePageContainer';
import FirstPageContainer from '../containers/FirstPageContainer';
import BreedOverviewContainer from '../containers/BreedOverviewContainer';

function App() {
  return (
    <Router>
      <React.Fragment>
        <DeviceInfo render={window => <Menu logo={logo} isMobile={window}/>} />
        <Route exact path="/home" component={HomePageContainer}/>
        <Route exact path="/" component={FirstPageContainer} />
        <Route path="/breed/:breed" component={BreedOverviewContainer} />
      </React.Fragment>
    </Router>
  );
}

export default App;
