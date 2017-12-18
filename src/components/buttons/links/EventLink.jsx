import React from 'react';
import { Link } from 'react-router-dom';
import {Button} from 'react-materialize'

const EventLink = (props) => (


      <Button
        type="button"
        floating
        icon='event'
        className='yellow'
        title="Event"
        onClick={props.onClick}
        >

      </Button>

)

export default EventLink;
