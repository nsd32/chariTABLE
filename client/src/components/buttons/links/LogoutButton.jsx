import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class LogoutButton extends Component {

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
        <button
          type="button"
          className="btn btn-raised btn-danger"
          title="Logout"
          style={{margin: "10px"}}
          onClick={this.handleLogoutClick}
          >
            Logout
        </button>
      </Link>
    )
  }

}

export default LogoutButton;
