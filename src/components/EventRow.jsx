import React from 'react';
import '../styles/Registration.css';

let EventRow = (props) => {

    return(

      <tr>
        <td>{props.eventData.eventName}</td>
        <td>{props.eventData.eventDate}</td>
        <td>{props.eventData.eventTime}</td>
        <td><button>Details</button></td>
      </tr>

    )
  };

export default EventRow;
