import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import RegisterButton from '../components/buttons/RegisterButton';
import TestForm from '../components/TestForm'
import '../styles/Register.css';
import axios from 'axios';

class TestRegistration extends Component {
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

  handleCompanySubmit = (event) => {
    console.log('Company Submit selected!!')
    event.preventDefault();
    axios.post('/register', {
      companyName: this.state.companyName,
      addressLine1: this.state.addressLine1,
      addressLine2: this.state.addressLine2,
      city: this.state.city,
      state: this.state.state,
      zipCode: this.state.zipCode,
      phoneNumber: this.state.phoneNumber,
      website: this.state.website,
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
    })
      .then((response) => {
        this.setState({ companies: response.data });
        axios.get('/api/companies')
          .then((response) => {
            console.log('Company Submit: ' ,response.data);
            console.log('Company Length: ', response.data.length-1);
            let companyID = response.data[response.data.length-1]._id;
            console.log('Company ID: ', companyID)
            this.setState({ companyID: companyID });
            console.log('Company ID State: ', this.state.companyID);
          }).then(() => {
            return <Redirect to='/account'  />
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  // handleUserSubmit = (event) => {
  //   event.preventDefault();
  //   console.log('Company Submit selected!!')
  //   axios.post(`/api/companies/${this.state.companyID}`, {
  //     firstName: this.state.firstName,
  //     lastName: this.state.lastName,
  //     email: this.state.email,
  //     password: this.state.password,
  //   })
  //     .then((response) => {
  //       console.log(response.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }

  handleInputChange = (event) => {
    console.log(this.state);
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return(
      <div className="Registration">
        <TestForm
          onChange={this.handleInputChange}
          onSubmit={this.handleCompanySubmit}
        />
        <RegisterButton />
      </div>
    );
  }
}

export default TestRegistration;
