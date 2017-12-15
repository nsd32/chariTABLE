import React, { Component } from 'react';

import EventTitle from '../components/EventTitle'
import EventList from '../components/EventList'
import EventButton from '../components/buttons/EventButton'
import axios from 'axios';
import { Link } from 'react-router-dom';


class Events extends Component {
  constructor(props) {
    super(props);
    this.state = {
      companyInfo: this.props.location.state.companyInfo,
      events: []
    }

  }

  componentDidMount() {
    console.log('Event State: ', this.state);
    console.log('Event Title: ', this.state.companyInfo.companyName);
    axios.get('/api/events')
      .then((response) => {
        console.log(response.data);
        this.setState({ events: response.data });
        console.log('New State: ', this.state);
      })
      .catch((error) => {
        console.log(error);
      });

  }

  addEventButton = () => {
    this.props.history.push({
        pathname: '/addevent',
        state: { companyID: this.props.location.state.companyID }
      });
  }



  render() {
    return(
      <div>
        <EventTitle />
        <EventList />
        <button onClick={this.addEventButton}>Add Event</button>
        <EventButton />
      </div>
    );
  }
}

export default Events;
