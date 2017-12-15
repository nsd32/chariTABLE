import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import LoginButton from '../components/buttons/LoginButton';
import LoginContainer from '../components/LoginContainer';


class Login extends Component {

  state = {
    CompanyID: "",
    company: []
  }

  componentDidMount() {

  }

  handleLoginSubmit = (event) => {
    event.preventDefault();
    console.log('Login Submitted')
    axios.post('/login', {
      username: this.state.username,
      password: this.state.password
    })
      .then((response) => {
        console.log('Login Successful');
        console.log('User Information: ', response.data);
        this.setState( {company: response.data});
        this.setState( {companyID: response.data._id});
        console.log('Current State: ', this.state);
        console.log('Current Company ID: ', this.state.companyID);
        return <Redirect to='/account' />
      })
      .catch((error) => {
        console.log(error);
      })
  };





  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return(
      <div>

        <LoginContainer
          onChange={this.handleInputChange}
          onSubmit={this.handleLoginSubmit}
        />
        <LoginButton/>


      </div>


    );
  }
}

export default Login;
