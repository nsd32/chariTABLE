import React, {Component} from 'react';
import axios from 'axios';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import LandingPageUpdated2 from './paths/LandingPageUpdated2'
import Events from './paths/Events'
import EventDetail from './paths/EventDetail'
import Account from './paths/Account'
import Profile from './paths/Profile'
import AddEvent from './paths/AddEvent'
import TableHost from './paths/TableHost'
import Sponsor from './paths/Sponsor'
import ErrorMessage from './paths/Error'
import GuestRegister from './paths/GuestRegister'
import ThanksForRegistering from './paths/ThanksForRegistering'
import './App.css';

class App extends Component {

  // state = {
  //   companyId: ""
  // }
  //
  // componentWillMount() {
  //   axios.get('/login')
  //   .then((companyID) => {
  //     console.log('CompanyID: ', companyID);
  //     let companyId = companyID.data.companyID;
  //     console.log('This is the companyID getting transferred: ', companyID);
  //     this.setState({companyID: companyID});
  //     console.log('App State: ', this.state)
  //   });
  // }


  render() {
    return(
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPageUpdated2} />
          <Route exact path="/profile/:companyId" component={Events} />
          <Route exact path="/event/:eventId" component={EventDetail} />
          <Route exact path="/account" component={Account} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/addevent" component={AddEvent} />
          <Route exact path="/tablehost" component={TableHost} />
          <Route exact path="/sponsor" component={Sponsor} />
          <Route exact path="/thanksforregistering" component={ThanksForRegistering} />
          <Route exact path="/GuestRegistration/:eventId/:tableHostId" component={GuestRegister} />
          <Route exact path="/error" component={ErrorMessage} />
        </Switch>
      </Router>
    );
  }
}


export default App;
