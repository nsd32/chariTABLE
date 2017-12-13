import React, { Component } from 'react';
import RegisterButton from '../components/buttons/RegisterButton';
import UserForm from '../components/UserForm'
import '../styles/Register.css';
import axios from 'axios';

class UserRegistration extends Component {
  state ={
    companyID: '',
    companies: [],
    users: []
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

  handleUserSubmit = (event) => {
    event.preventDefault();
    console.log('Company Submit selected!!')
    axios.post(`/api/companies/${this.state.companyID}`, {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      password: this.state.password,
    })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return(
      <div className="Registration">
        <UserForm
          onChange={this.handleInputChange}
          onSubmit={this.handleUserSubmit}
        />
        <RegisterButton />
      </div>
    );
  }
}

export default UserRegistration;
