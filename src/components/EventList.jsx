import React, { Component } from 'react';
import axios from 'axios';
import EventRow from '../components/EventRow'
import '../styles/Registration.css';

class EventList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: []
    }

  }
  componentDidMount() {
    console.log('Event Props: ', this.props.companyEventData);
    // axios.get('/api/events')
    //   .then((response) => {
    //     console.log(response.data);
    //     this.setState({ events: response.data });
    //     console.log('New  EventList State: ', this.state);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  }

  render() {
    return(
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
  						<EventRow eventData={event}/>
  					);
  				})}
        </tbody>
      </table>

      );
    };
  }


export default EventList;
