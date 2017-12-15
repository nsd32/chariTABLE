import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Profile extends Component {
	

  render() {
    return(
      <div>
        <h1>Profile Page</h1>
        <button><Link to={{
				  pathname: '/addevent'
				}}> Add Event </Link></button>
      </div>
    );
  }
}

export default Profile;