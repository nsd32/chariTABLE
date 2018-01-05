import React, { Component } from 'react';
import axios from 'axios';
import NavbarLogOut from '../components/NavbarLogOut'
import Footer from '../components/Footer';

class AddEvent extends Component {

	state = {
		eventName: 'College Track Breakfast',
		eventLocation: 'Denver, CO',
		eventDate: 'January 1, 2018',
		eventTime: '8pm',
		contactName: 'Lea',
		contactPhone: '303-555-5555',
		contactEmail: 'a@a.com',
		numberOfTables: 0,
		numberOfTableHosts: 4,
		numberOfGuestsPerTable: 0,
		numberOfSponsors: 5,
		tableHosts: [],
		sponsors: []
	}

	componentDidMount() {
		console.log('Event Props: ', this.props)
		console.log('Add Event Company ID: ', this.props.location.state)
	}

	nextButton = (event) => {
		event.preventDefault();
		// Put state into an object??
		axios.post(`/events/${this.props.location.state.companyID}`, this.state)
	  .then( (response) => {
	    console.log('server response: ', response);
	    this.props.history.push({
				pathname: "/tablehost",
				state: {
					eventObj: response.data,
					companyID: this.props.location.state.companyID
				 }
			});
	  })
	  .catch( (error) => {
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
    <div>

      <NavbarLogOut />

      <div className="ms-hero-page-override ms-hero-img-airplane ms-bg-fixed ms-hero-bg-dark-light">
        <div className="container">
          <div className="text-center">
            <h1 className="no-m ms-site-title color-white center-block ms-site-title-lg mt-2 animated zoomInDown animation-delay-5">Add Event Details</h1>
            {/*<p className="lead lead-lg color-light text-center center-block mt-2 mw-800 text-uppercase fw-300 animated fadeInUp animation-delay-7">Do not wait more register now! Access our great community and benefit from
              <span className="color-info">exclusive membership</span> conditions.</p>*/}
          </div>
        </div>
      </div>
      <div className="container">
        <div className="card card-primary card-hero animated fadeInUp animation-delay-7">
          <div className="card-header">
            <h3 className="card-title">
              <i className="zmdi zmdi-graduation-cap"></i> Event Details
            </h3>
          </div>
          <div className="card-block">
            <form className="form-horizontal">
              <fieldset>
                <div className="row form-group">
                  <label htmlFor="eventName" className="col-md-2 control-label">Event Name</label>
                  <div className="col-md-9">
                    <input name="eventName" onChange={this.handleInputChange} type="text" className="form-control" id="eventName" placeholder="Event Name" /> </div>
                </div>
                <div className="row form-group">
                  <label htmlFor="eventLocation" className="col-md-2 control-label">Event Location</label>
                  <div className="col-md-9">
                    <input name="eventLocation" onChange={this.handleInputChange} type="text" className="form-control" id="eventLocation" placeholder="Event Location" /> </div>
                </div>
                <div className="row form-group">
                  <label htmlFor="inputDate" className="col-md-2 control-label">Event Date</label>
                  <div className="col-md-9">
                    <input name="eventDate" onChange={this.handleInputChange} id="eventDate" type="date" className="form-control" placeholder="mm/dd/yy" /> </div>
                </div>
                <div className="row form-group">
                  <label htmlFor="eventTime" className="col-md-2 control-label">Event Time</label>
                  <div className="col-md-9">
                    <input name="eventTime" onChange={this.handleInputChange} type="time" className="form-control" id="eventTime" placeholder="Event Time" /> </div>
                </div>
                <div className="row form-group">
                  <label htmlFor="contactName" className="col-md-2 control-label">Contact Name</label>
                  <div className="col-md-9">
                    <input name="contactName" onChange={this.handleInputChange} type="text" className="form-control" id="contactName" placeholder="Contact Name" /> </div>
                </div>
                <div className="row form-group">
                  <label htmlFor="contactPhone" className="col-md-2 control-label">Contact Phone</label>
                  <div className="col-md-9">
                    <input name="contactPhone" onChange={this.handleInputChange} type="tel" className="form-control" id="contactPhone" pattern="^\d{3}-\d{3}-\d{4}$" placeholder="Contact Phone  ex(xxx-xxx-xxxx)" /> </div>
                </div>
                <div className="row form-group">
                  <label htmlFor="contactEmail" className="col-md-2 control-label">Contact Email</label>
                  <div className="col-md-9">
                    <input name="contactEmail" onChange={this.handleInputChange} type="email" className="form-control" id="contactEmail" placeholder="Contact Email" /> </div>
                </div>
                <div className="row form-group">
                  <label htmlFor="numberOfTables" className="col-md-2 control-label">Number of Tables</label>
                  <div className="col-md-9">
                    <input name="numberOfTables" onChange={this.handleInputChange} type="Number" className="form-control" id="numberOfTables" placeholder="Number of Tables" /> </div>
                </div>
                <div className="row form-group">
                  <label htmlFor="numberOfTableHosts" className="col-md-2 control-label">Number of Table Hosts</label>
                  <div className="col-md-9">
                    <input name="numberOfTableHosts" onChange={this.handleInputChange} type="Number" className="form-control" id="numberOfTableHosts" placeholder="Number of Table Hosts" /> </div>
                </div>
                <div className="row form-group">
                  <label htmlFor="numberOfGuestsPerTable" className="col-md-2 control-label">Number of Guests Per Table</label>
                  <div className="col-md-9">
                    <input name="numberOfGuestsPerTable" onChange={this.handleInputChange} type="Number" className="form-control" id="numberOfGuestsPerTable" placeholder="Number of Guests Per Table" /> </div>
                </div>
                <div className="row form-group">
                  <label htmlFor="numberOfSponsors" className="col-md-2 control-label">Number of Sponsors</label>
                  <div className="col-md-9">
                    <input name="numberOfSponsors" onChange={this.handleInputChange} type="Number" className="form-control" id="numberOfSponsors" placeholder="Number of Sponsors" /> </div>
                </div>

                <div className="row mt-2">
                  <div className="offset-lg-2 col-lg-6">

                  </div>
                  <div className="col-lg-3">
                    <button className="btn btn-raised btn-primary btn-block" onClick={this.nextButton}>Next</button>
                  </div>
                </div>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
      <Footer />
			<div className="btn-back-top">
        <a href="#" data-scroll id="back-top" className="btn-circle btn-circle-primary btn-circle-sm btn-circle-raised ">
          <i className="zmdi zmdi-long-arrow-up"></i>
        </a>
      </div>
     </div>
    );
  }
}

export default AddEvent;
