import React, { Component } from 'react';
import EventButton from '../components/buttons/EventButton';
import { Link } from 'react-router-dom';

class Events extends Component {
  render() {
    return(
      <div>
        Events Page
        <EventButton />
        <button><Link to={{
		  pathname: '/addevent'
		}}> Add Event </Link></button>
      </div>
    );
  }
}

export default Events;
