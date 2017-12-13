import React, { Component } from 'react';
import axios from 'axios';
import LoginButton from '../components/buttons/LoginButton';
import LoginContainer from '../components/LoginContainer';


class Login extends Component {

  state = {
    credentials: '',
    companies: []
  }

  componentDidMount() {
    axios.get('/api/companies')
      .then((response) => {
        console.log('Did Mount: ' ,response.data);
        this.setState({ companies: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  handleLoginSubmit(event) {
    event.preventDefault();
    console.log('Login Submitted')
  }

  handleInputChange = (event) => {
    console.log(this.state);
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
