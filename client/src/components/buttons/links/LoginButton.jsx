import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class LogoutButton extends Component {

  // handleLogintClick = (event) => {
  //   // event.preventDefault();
  //   console.log('Login Clicked');
  //   axios.get('/login')
  //     .then((login) => {
  //       console.log('Login Details: ', login);
  //       console.log('You are Logged In!!');
  //
  //     })
  // }

  render() {
  return(

        <button
          type="button"
          className="btn btn-raised color-primary btn-white no-focus animated zoomInDown animation-delay-8"
          title="Login"
          data-toggle="modal"
          data-target="#ms-account-modal"
          // onClick={this.handleLoginClick}
          >
            Login
        </button>
    )
  }

}

export default LogoutButton;
