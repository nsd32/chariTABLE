import React, { Component } from 'react';
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
        this.setState( {companyInfo: response.data});
        this.setState( {companyID: response.data._id});
        console.log('Current State: ', this.state);
        console.log('Current Company ID: ', this.state.companyID);
        this.props.history.push({
          pathname: "/events",
          state: {
            companyInfo: response.data,
            companyID: response.data._id,
            companyTitle: response.data.companyName
          }
        });
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
