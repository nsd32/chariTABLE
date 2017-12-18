import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Button} from 'react-materialize';
import axios from 'axios';

class LogoutLink extends Component {

  handleLogoutClick = (event) => {
    // event.preventDefault();
    console.log('Logout Clicked');
    axios.get('/logout')
      .then((logout) => {
        console.log('Logged out Details: ', logout);
        console.log('You are logged Out!!');

      })
  }

  render() {
    return(
      <Link to="/">
        <Button
          type="button"
          floating
          icon='exit_to_app'
          className='blue'
          title="Logout"
          onClick={this.handleLogoutClick}
          >
        </Button>
      </Link>
    )
  }

}

export default LogoutLink;
