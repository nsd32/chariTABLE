import React, { Component } from 'react';
import '../styles/Registration.css';
import AccountLayout from '../components/AccountLayout';
import AccountButton from '../components/buttons/AccountButton';
import axios from 'axios';

class Account extends Component {
  state={
    sessionID: ""
  }

  handleSession() {
    axios.get('/login')
      .then((response) => {
        console.log('Session Data: ' ,response.data);
        this.setState({ company: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return(
      <div>


        <AccountLayout />
        <AccountButton />
      </div>
    );
  }
}

export default Account;
