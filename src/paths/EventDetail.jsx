import React, { Component } from 'react';
import { Col, Row } from 'react-materialize';
import EventDetailButton from '../components/buttons/EventDetailButton'
// import BackButton from '../components/buttons/BackButton'
// import axios from 'axios';

// import { Link } from 'react-router-dom';


class Events extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eventInfo: [],
      companyID: ""
    }
  }

  componentDidMount() {
    console.log('Event State: ', this.props.location.state.eventInfo);
    console.log('Event CompanyID: ', this.props.location.state.companyID);
    this.setState({eventInfo: this.props.location.state.eventInfo})
    console.log('EventDetails Company State: ', this.props.location.state.companyInfo);
    this.setState({companyID: this.props.location.state.companyID})
    console.log(this.state.companyID);

  }

  handleBackButtonClick = (event) => {
    event.preventDefault();
    console.log('Back to Company Events Button Clicked!!');
    let companyID = event.target.id;
    console.log('Back Button Company ID: ', companyID);
    this.props.history.push({
      pathname: "/profile/" + companyID
    });
  }


  render() {
    return(
      <Row>
        <Col s={12} m={6}>
          <div>
            <p>Event Name: {this.state.eventInfo.eventName}</p>
            <p>Event Date: {this.state.eventInfo.eventDate}</p>
            <p>Event Time: {this.state.eventInfo.eventTime}</p>
            <p>Event Location: {this.state.eventInfo.eventLocation}</p>
            <p>Event Contact:{this.state.eventInfo.contactName}</p>
            <p>Conatact Email: {this.state.eventInfo.contactEmail}</p>
            <p>Contact Phone: {this.state.eventInfo.contactPhone}</p>
            <p>Number of Tables: {this.state.eventInfo.numberOfTables}</p>
            <p>Number of Guest per Table: {this.state.eventInfo.numberOfGuestsPerTable}</p>
            <p>Number of Table Hosts: {this.state.eventInfo.numberOfTableHosts}</p>

            <EventDetailButton
              companyID={this.state.companyID}
               />
            <button
              id={this.state.companyID}
              onClick={this.handleBackButtonClick}
            >
              Go Back
            </button>
            {/* <BackButton
              companyData={this.state.companyInfo}
              onClick={this.handleBackButtonClick}
            /> */}
          </div>
        </Col>
      </Row>

    );
  }
}

export default Events;
