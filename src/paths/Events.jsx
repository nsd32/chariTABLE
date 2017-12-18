import React, { Component } from 'react';
import { Col, Row } from 'react-materialize';
// import EventTitle from '../components/EventTitle'
// import EventRow from '../components/EventRow'
import EventButton from '../components/buttons/EventButton'
import axios from 'axios';
// import { Link } from 'react-router-dom';


class Events extends Component {
  constructor(props) {
    super(props);
    this.state = {
      companyID: "",
      events: []
    }

  }


  componentDidMount() {
    let url = this.props.location.pathname;
    let splitUrl = url.split('/');
    console.log('Split URL: ', splitUrl);
    let companyID = splitUrl[2].trim();
    console.log('URL Company ID: ', companyID);
    this.setState( {companyID: companyID} )

    axios.get(`/api/events/${companyID}`)
      .then((response) => {
        console.log('All Response Data: ', response);
        console.log('Events: ', response.data.events);
        this.setState({ companyID: companyID});
        this.setState({ events: response.data.events });
        // eventIDs = {events:this.state.events};
        // console.log('State of Events: ', eventIDs);
        console.log(this.state);
      })
      .catch((error) => {
        console.log(error);
      });

  }

  handleDetailClick = (event) => {
    console.log(`Details Clicked ID# ${event.target.id}`);
    let eventID = event.target.id;

    axios.get('/api/eventDetails/' + eventID)
    .then((eventInfo) => {
      console.log(`Event Details for selected: `, eventInfo.data);
      this.setState({ eventInfo: eventInfo.data });
      this.props.history.push({
        pathname: "/event/" + eventInfo.data._id,
        state: {
          companyID: this.state.companyID,
          eventInfo: this.state.eventInfo
         }
      });
    })
  }

  addEventButton = (event) => {
    event.preventDefault();
    this.props.history.push({
        pathname: '/addevent',
        state: { companyID: this.state.companyID }
      });
  }

  render() {
    return(
      <div>
        <div className="eventTitleContainer">
          <h3 className="eventTitle">{this.state.companID}</h3>

        </div>
        <Row>
          <Col className="" m={1} s={12}></Col>
          <Col className="" m={10} s={12}>
            <div className="Event">
              <table className="striped eventList">
                <thead>
                  <tr>
                      <th>Event Name</th>
                      <th>Event Date</th>
                      <th>Event Time</th>
                      <th style={ { "textAlign": "center" } }>Actions</th>
                  </tr>

                </thead>

                <tbody>

                  {this.state.events.map((event) => {
          					return (
                      <tr key={event._id}>
                        <td>{event.eventName}</td>
                        <td>{event.eventDate}</td>
                        <td>{event.eventTime}</td>
                        <td
                          style={ { "textAlign": "center" } }
                          >
                          <a
                            className="waves-effect waves-light btn"
                            id={event._id}
                            onClick={this.handleDetailClick}
                            >
                              <i
                                className="material-icons left"
                                >
                                  details
                                </i>
                                Details
                            </a>
                          </td>
                      </tr>
          					);
          				})}
                </tbody>
              </table>
            </div>
          </Col>
          <Col className="" m={1} s={12}></Col>
        </Row>
        <button onClick={this.addEventButton}>Add Event</button>
        <EventButton />
      </div>

    );
  }
}

export default Events;
