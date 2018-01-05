import React, { Component } from 'react';
import '../styles/Registration.css';
import NavbarLogOut from '../components/NavbarLogOut';
import Footer from '../components/Footer';
import axios from 'axios';

class Account extends Component {
  state={

  }

  componentWillMount() {
    console.log('Account Company Info from Events: ', this.props.location.state.companyInfo[0]);
    this.setState({
      companyName: this.props.location.state.companyInfo[0].companyName,
      username: this.props.location.state.companyInfo[0].username,
      addressLine1: this.props.location.state.companyInfo[0].addressLine1,
      addressLine2: this.props.location.state.companyInfo[0].addressLine2,
      city: this.props.location.state.companyInfo[0].city,
      state: this.props.location.state.companyInfo[0].state,
      zipCode: this.props.location.state.companyInfo[0].zipCode,
      phoneNumber: this.props.location.state.companyInfo[0].phoneNumber,
      website: this.props.location.state.companyInfo[0].website,
      email: this.props.location.state.companyInfo[0].email,
      createdOn: this.props.location.state.companyInfo[0].createdOn,
      companyID: this.props.location.state.companyInfo[0]._id

    });
    console.log(this.state);
}

  componentWillUnmount() {
    this.setState({
      companyName: "",
      username: "",
      addressLine1: "",
      addressLine2: "",
      city: "",
      state: "",
      zipCode: "",
      phoneNumber: "",
      website: "",
      email: "",
      createdOn: "",
      companyID: "",
    });
  }

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
    console.log(this.state);
  }

  handleAccountUpdateChanges = (event) => {
    event.preventDefault();
    console.log('Account Update Changes clilcked');
    console.log('Company Info to be updated: ', this.state);
    let companyID =  this.state.companyID;
    // console.log('Account Company ID: ', companyID);
    axios.post(`/api/companies/${companyID}`, {
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
      createdOn: this.state.createdOn
    })
      .then((response) => {
        console.log('Updated from Server: ', response);
        this.props.history.push({
          pathname: `/profile/${this.state.companyID}`
        });

      })
      .catch((error) => {
        console.log(error);
      });
  }

  handleBackButtonClick = (event) => {
    event.preventDefault();
    console.log('Back to Company Events Button Clicked!!');
    let companyID = this.state.companyID;
    console.log('Back Button Company ID: ', companyID);
    this.props.history.push({
      pathname: "/profile/" + companyID
    });
  }


  render() {

    return(

  <div>
    <div className="ms-site-container">

    <NavbarLogOut />

      <div className="ms-hero-page-override ms-hero-img-coffee ms-bg-fixed ms-hero-bg-primary">
        <div className="container">
          <div className="text-center mt-2">
            {/* <img src="assets/img/demo/avatar1.jpg" alt="..." className="ms-avatar-hero animated zoomIn animation-delay-7" /> */}
            <h1 className="color-white mt-4 animated fadeInUp animation-delay-10">{this.state.companyName}</h1>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="card card-hero card-primary animated fadeInUp animation-delay-7">
          <div className="card-header-100 bg-primary-dark">
            <div className="row justify-content-center">
              <div className="col col-md-4">
                <div className="text-center">
                  <h3>
                    <strong><i>Company Information</i></strong>
                  </h3>
                 </div>
              </div>
            </div>
          </div>
          <div className="card-block">
            <form className="form-horizontal">
              <fieldset>
                <div className="row form-group">
                  <label htmlFor="username" className="col-md-4 control-label text-left"><i className="zmdi zmdi-account mr-1 color-royal"></i> Username</label>
                  <div className="col-md-8">
                    <input name="username" onChange={this.handleInputChange} defaultValue={this.state.username} type="text" className="form-control" disabled /> </div>
                </div>
                <div className="row form-group">
                  <label htmlFor="companyName" className="col-md-4 control-label text-left"><i className="zmdi zmdi-store mr-1 color-warning"></i> Company Name</label>
                  <div className="col-md-8">
                    <input name="companyName" onChange={this.handleInputChange} defaultValue={this.state.companyName} type="text" className="form-control" /> </div>
                </div>
                <div className="row form-group">
                  <label htmlFor="email" className="col-md-4 control-label text-left"><i className="zmdi zmdi-email mr-1 color-primary"></i> Email Address</label>
                  <div className="col-md-8">
                    <input name="email" onChange={this.handleInputChange} defaultValue={this.state.email} type="email" className="form-control" /> </div>
                </div>
                <div className="row form-group">
                  <label htmlFor="website" className="col-md-4 control-label text-left"><i className="zmdi zmdi-store mr-1 color-danger"></i> Website</label>
                  <div className="col-md-8">
                    <input name="website" onChange={this.handleInputChange} defaultValue={this.state.website} type="text" className="form-control" /> </div>
                </div>
                <div className="row form-group">
                  <label htmlFor="addressLine1" className="col-md-4 control-label text-left"><i className="zmdi zmdi-pin mr-1 color-warning"></i> Address Line 1</label>
                  <div className="col-md-8">
                    <input name="addressLine1" onChange={this.handleInputChange} defaultValue={this.state.addressLine1} type="text" className="form-control" /> </div>
                </div>
                <div className="row form-group">
                  <label htmlFor="addressLine2" className="col-md-4 control-label text-left"><i className="zmdi zmdi-pin mr-1 color-warning"></i> Address Line 2</label>
                  <div className="col-md-8">
                    <input name="addressLine2" onChange={this.handleInputChange} defaultValue={this.state.addressLine2} type="text" className="form-control" /> </div>
                </div>
                <div className="row form-group">
                  <label htmlFor="city" className="col-md-4 control-label text-left"><i className="zmdi zmdi-map mr-1 color-warning"></i> City</label>
                  <div className="col-md-8">
                    <input name="city" onChange={this.handleInputChange} defaultValue={this.state.city} type="text" className="form-control" /> </div>
                </div>
                <div className="row form-group">
                  <label htmlFor="state" className="col-md-4 control-label text-left"><i className="zmdi zmdi-map mr-1 color-warning"></i> State</label>
                  <div className="col-md-8">
                    <input name="state" onChange={this.handleInputChange} defaultValue={this.state.state} type="text" className="form-control" /> </div>
                </div>
                <div className="row form-group">
                  <label htmlFor="zipCode" className="col-md-4 control-label text-left"><i className="zmdi zmdi-map mr-1 color-warning"></i> Zip Code</label>
                  <div className="col-md-8">
                    <input name="zipCode" onChange={this.handleInputChange} defaultValue={this.state.zipCode} type="text" className="form-control" /> </div>
                </div>
                <div className="row form-group">
                  <label htmlFor="phone" className="col-md-4 control-label text-left"><i className="zmdi zmdi-phone mr-1 color-royal-light"></i> Phone (ex: xxx-xxx-xxxx)</label>
                  <div className="col-md-8">
                    <input name="phoneNumber" onChange={this.handleInputChange} defaultValue={this.state.phoneNumber} type="tel" pattern="^\d{3}-\d{3}-\d{4}$" className="form-control" /> </div>
                </div>
                <div className="row form-group">
                  <label htmlFor="createdOn" className="col-md-4 control-label text-left"><i className="zmdi zmdi-calendar mr-1 color-primary"></i> Date Created</label>
                  <div className="col-md-8">
                    <input name="createdOn" onChange={this.handleInputChange} defaultValue={this.state.createdOn} type="text" className="form-control" disabled/> </div>
                </div>

                <div className="row mt-2">
                  <div className="offset-lg-2 col-lg-6">

                  </div>
                  <div className="">
                    <button className="btn btn-raised btn-primary" onClick={this.handleAccountUpdateChanges} style={ {margin: "5px"} }>Save Changes</button>
                    <button className="btn btn-raised btn-warning" onClick={this.handleBackButtonClick} style={ {margin: "5px"} }>Back</button>
                  </div>
                </div>

              </fieldset>
            </form>
          </div>
        </div>
      </div>

      {/* <!-- container --> */}
      <Footer />
      <div className="btn-back-top">
        <a href="#" data-scroll id="back-top" className="btn-circle btn-circle-primary btn-circle-sm btn-circle-raised ">
          <i className="zmdi zmdi-long-arrow-up"></i>
        </a>
      </div>
    </div>
  </div>
    );
  }
}

export default Account;
