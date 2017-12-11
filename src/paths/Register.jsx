import React, { Component } from 'react';
import RegisterButton from '../components/buttons/RegisterButton';
import Registration from '../components/Registration'
import '../styles/Register.css';
import axios from 'axios';

class Register extends Component {
  state ={
    companies: []
  }

  componentDidMount() {
    axios.get('/api/companies')
      .then((response) => {
        console.log(response.data);
        this.setState({ companies: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  handleCompanySubmit = (event) => {
    event.preventDefault();
    console.log('Company Submit selected!!')
    axios.post('/api/companies', {
      companyName: this.state.companyName,
      addressLine1: this.state.addressLine1,
      addressLine2: this.state.addressLine2,
      city: this.state.city,
      state: this.state.state,
      zipCode: this.state.zipCode,
      phoneNumber: this.state.phoneNumber,
      website: this.state.website
    })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  handleInputChange = (event) => {
    console.log(this.state)
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return(
      <div className="Registration">
        <Registration
          onChange={this.handleInputChange}
          onSubmit={this.handleCompanySubmit}
        />
        <RegisterButton />
      </div>
    );
  }
}

export default Register;
