import React, { Component } from 'react';
import axios from 'axios';

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

	nextButton = () => {
		// Put state into an object??
		axios.post(`/events/${this.props.location.state.companyID}`, this.state)
	  .then( (response) => {
	    console.log('server response: ', response);
	    this.props.history.push({
				pathname: "/tablehost",
				state: { eventObj: response.data }
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
  	console.log('companyID: ' + this.props.location.state.companyID)
    return(
    	<div>
	      <form class="col s12">
		      <div class="row">
		        <div class="input-field col s6">
		          <input name="eventName" onChange={this.handleInputChange} id="first_name" type="text" class="validate" />
		          <label for="first_name">Event Name</label>
		        </div>
		        <div class="input-field col s6">
		          <input name="eventLocation" onChange={this.handleInputChange} id="last_name" type="text" class="validate" />
		          <label for="last_name">Event Location</label>
		        </div>
		        <div class="input-field col s6">
		          <input name="eventDate" onChange={this.handleInputChange} id="last_name" type="text" class="validate" />
		          <label for="last_name">Event Date</label>
		        </div>
		        <div class="input-field col s6">
		          <input name="eventTime" onChange={this.handleInputChange} id="last_name" type="text" class="validate" />
		          <label for="last_name">Event Time</label>
		        </div>
		        <div class="input-field col s6">
		          <input name="contactName" onChange={this.handleInputChange} id="last_name" type="text" class="validate" />
		          <label for="last_name">Contact Name</label>
		        </div>
		        <div class="input-field col s6">
		          <input name="contactPhone" onChange={this.handleInputChange} id="last_name" type="text" class="validate" />
		          <label for="last_name">Contact Phone</label>
		        </div>
		        <div class="input-field col s6">
		          <input name="contactEmail" onChange={this.handleInputChange} id="last_name" type="text" class="validate" />
		          <label for="last_name">Contact Email</label>
		        </div>
		        <div class="input-field col s6">
		          <input name="numberOfTables" onChange={this.handleInputChange} id="last_name" type="text" class="validate" />
		          <label for="last_name">Number of Tables</label>
		        </div>
		        <div class="input-field col s6">
		          <input name="numberOfTableHosts" onChange={this.handleInputChange} id="last_name" type="text" class="validate" />
		          <label for="last_name">Number of Table Hosts</label>
		        </div>
		        <div class="input-field col s6">
		          <input name="numberOfGuestsPerTable" onChange={this.handleInputChange} id="last_name" type="text" class="validate" />
		          <label for="last_name">Number of Guests Per Table</label>
		        </div>
		        <div class="input-field col s6">
		          <input name="numberOfSponsors" onChange={this.handleInputChange} id="last_name" type="text" class="validate" />
		          <label for="last_name">Number of Sponsors</label>
		        </div>
		      </div>
	      </form>
        <button onClick={this.nextButton}>Next</button>
      </div>
    );
  }
}

export default AddEvent;