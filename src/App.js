import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import LandingPage from './paths/LandingPage'
import LandingPageUpdated from './paths/LandingPageUpdated'
import LandingPageUpdated2 from './paths/LandingPageUpdated2'
import TestRegistration from './paths/TestRegistration'
// import Login from './paths/Login'
import Login_Register from './paths/Login_Register'
import Events from './paths/Events'
import EventDetail from './paths/EventDetail'
import Account from './paths/Account'
import Profile from './paths/Profile'
import AddEvent from './paths/AddEvent'
import TableHost from './paths/TableHost'
import Sponsor from './paths/Sponsor'
import GuestRegister from './paths/GuestRegister'
import ThanksForRegistering from './paths/ThanksForRegistering'
import './App.css';

const App = () =>
  <Router>
    <div>
      <Route exact path="/" component={LandingPageUpdated2} />
      {/* <Route exact path="/" component={Login_Register} /> */}
      <Route exact path="/register" component={TestRegistration} />
      {/* <Route exact path="/login" component={Login} /> */}
      <Route exact path="/login" component={Login_Register} />
      <Route exact path="/profile/:companyId" component={Events} />
      <Route exact path="/event/:eventId" component={EventDetail} />
      <Route exact path="/account" component={Account} />
      <Route exact path="/profile" component={Profile} />
      <Route exact path="/addevent" component={AddEvent} />
      <Route exact path="/tablehost" component={TableHost} />
      <Route exact path="/sponsor" component={Sponsor} />
      <Route exact path="/thanksforregistering" component={ThanksForRegistering} />
      <Route exact path="/GuestRegistration/:eventId/:tableHostId" component={GuestRegister} />
    </div>
  </Router>


export default App;
