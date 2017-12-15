import React, { Component } from 'react';
import axios from 'axios';

class GuestRegister extends Component {

  state = {
    eventId: '',
    tableHostId: '',
    eventName: '',
    tableHostName: '',
    guestName: '',
    guestEmail: ''
  }
	
  componentDidMount() {
    axios.get(`/GuestRegistration/${this.props.match.params.eventId}/${this.props.match.params.tableHostId}`)
      .then((response) => {
        console.log('Did Mount: ' ,response.data);
        this.setState({
          eventName: response.data.searchedEvent.eventName,
          tableHostName: response.data.tableHost.name,
          eventId: response.data.searchedEvent._id,
          tableHostId: response.data.tableHost._id
        })
        // this.setState({ companies: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
    console.log(this.state);
  }

  registerButton = () => {
    let guest = {
      name: this.state.guestName,
      email: this.state.guestEmail
    }
    // Put this.state into an object before sending???
    axios.post(`/event/guest/${this.props.match.params.tableHostId}`, guest)
    .then( (response) => {
      console.log(response);
      // this.props.history.push({
      //   pathname: "/sponsor",
      //   state: { eventObj: this.props.location.state.eventObj }
      // });
    })
    .catch( (error) => {
      console.log(error);
    });
  }

  render() {
    return(
      <div>
        <h1>Guest Registration</h1>
        <h3>{this.state.eventName}</h3>
        <h3>{this.state.tableHostName}</h3>
        <button onClick={this.registerButton}>Register</button>
        <tr>
            <td>
              <div class="input-field col s6">
                <input name="guestName" onChange={this.handleInputChange} type="text" class="validate" />
                <label for="last_name">Name</label>
              </div>
            </td>
            <td>
              <div class="input-field col s6">
                <input name="guestEmail" onChange={this.handleInputChange} type="text" class="validate" />
                <label for="last_name">Email</label>
              </div>
            </td>
          </tr>
      </div>
    );
  }
}

export default GuestRegister;