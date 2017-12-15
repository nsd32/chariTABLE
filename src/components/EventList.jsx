import React from 'react';
import '../styles/Registration.css';

let EventList = (props) => {

  return(
    <table className="striped">
      <thead>
        <tr>
            <th>Event Name</th>
            <th>Event Date</th>
            <th>Event Time</th>
            <th>Actions</th>
        </tr>

      </thead>

      <tbody>
        <tr>
          {/* <td></td> */}
          <td>{props.eventData.eventName}</td>
          <td>Eclair</td>
          <td>$0.87</td>
          <td><button>Details</button></td>
        </tr>
      </tbody>
    </table>

    );
  }


export default EventList;
