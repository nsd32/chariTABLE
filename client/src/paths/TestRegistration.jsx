import React, { Component } from 'react';
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
    event.preventDefault();
    console.log('Company Submit selected!!')
    if(
  		this.state.username &&
  		this.state.companyName &&
  		this.state.email &&
  		this.state.password &&
  		this.state.confirmPassword
  	) {
      if(this.state.password !== this.state.confirmPassword) {
        console.log('Passwords don\'t Match');
        return;
      }


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
        confirmPassword: this.state.confirmPassword
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
              this.props.history.push({
        				pathname: "/login",
        			});
              // return <Redirect to='/login'  />
            })
            .catch((error) => {
              console.log(error);
            });
        })
        .catch((error) => {
          console.log(error);
        });
      } else {
        console.log('Please fill out all required fields!!')
        // var err = new Error('All fields required.');
        // err.status = 400;
        // return next(err);
    }
  }


  handleInputChange = (event) => {
    // console.log(this.state);
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
