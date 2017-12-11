import React from 'react';
import { Link } from 'react-router-dom';
import {Button} from 'react-materialize'

const EventLink = () => (

  <Link to="/events">
      <Button
        type="button"
        floating
        icon='event'
        className='yellow'
        title="Event"
        >

      </Button>
  </Link>
)

export default EventLink;
