import React from 'react';
import '../styles/Registration.css';

let EventRow = (props) => {
    return(
      <tr>
        <td>{props.eventData[i].eventName}</td>
        <td>{props.eventData[i].eventDate}</td>
        <td>{props.eventData[i].eventTime}</td>
        <td style={ { "textAlign": "center" } }><a className="waves-effect waves-light btn"><i className="material-icons left">details</i>Details</a></td>
      </tr>
    );
  };

export default EventRow;
