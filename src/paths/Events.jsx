import React, { Component } from 'react';
import '../styles/Event.css'
// import EventTitle from '../components/EventTitle'
// import EventRow from '../components/EventRow'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import EventButton from '../components/buttons/EventButton'
import axios from 'axios';
// import { Link } from 'react-router-dom';


class Events extends Component {
  constructor(props) {
    super(props);
    this.state = {
      companyID: "",
      events: []
    }

  }


  componentWillMount() {
    let url = this.props.location.pathname;
    let splitUrl = url.split('/');
    console.log('Split URL: ', splitUrl);
    let companyID = splitUrl[2].trim();
    console.log('URL Company ID: ', companyID);
    this.setState( {companyID: companyID} )

    axios.get(`/api/events/${companyID}`)
      .then((response) => {
        console.log('All Response Data: ', response);
        console.log('Events: ', response.data);
        this.setState({ companyID: companyID});
        this.setState({ events: response.data });
        // eventIDs = {events:this.state.events};
        // console.log('State of Events: ', eventIDs);

      })
      .catch((error) => {
        console.log(error);
      });

  }

  handleDetailClick = (event) => {
    console.log(`Details Clicked ID# ${event.target.id}`);
    let eventID = event.target.id;

    axios.get('/api/eventDetails/' + eventID)
    .then((eventInfo) => {
      console.log(`Event Details for selected: `, eventInfo.data);
      this.setState({ eventInfo: eventInfo.data });
      this.props.history.push({
        pathname: "/event/" + eventInfo.data._id,
        state: {
          companyID: this.state.companyID,
          eventInfo: this.state.eventInfo
         }
      });
    })
  }

  handleEditProfileClick = (event) => {
    event.preventDefault();
    console.log('Edit Profile Button clicked!!!');
    let companyID = this.state.companyID;
    console.log(companyID);

    axios.get('/api/companies/' + companyID)
    .then((companyInfo) => {
      console.log(`Company Info for selected: `, companyInfo.data);
      this.setState({ companyInfo: companyInfo.data });
      console.log(this.state);
      this.props.history.push({
        pathname: "/account",
        state: {
          // companyID: this.state.companyID,
          companyInfo: this.state.companyInfo
         }
      });
    })
  }

  handleDeleteProfileClick = (event) => {
    event.preventDefault();
    console.log('Delete Profile Button clicked!!!');
  }

  addEventButton = (event) => {
    event.preventDefault();
    this.props.history.push({
        pathname: '/addevent',
        state: { companyID: this.state.companyID }
      });
  }

  render() {
    if(!this.state.events.events) {
      return (
        <div id="ms-preload" className="ms-preload">
          <div id="status">
            <div className="spinner">
              <div className="dot1"></div>
              <div className="dot2"></div>
            </div>
          </div>
        </div>
      )
    }
    console.log('State: ', this.state.events)
    var rows = [];
    for (var i = 0; i < this.state.events.events.length; i++) {
        rows.push(
          <tr key={i}>
            <td>
              {this.state.events.events[i].eventName}
            </td>
            <td>
              {this.state.events.events[i].eventDate}
            </td>
            <td className="text-center">
              <a onClick={this.handleDetailClick} id={this.state.events.events[i]._id} href="javascript:void(0)" className="btn btn-raised btn-primary">Details</a>
            </td>
          </tr>
        );
    }
    return(
      <div>
        <div className="ms-site-container">
        <Navbar />

          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <div className="row">
                  <div className="col-lg-12 col-md-6 order-md-1">
                    <div className="card animated fadeInUp animation-delay-7">
                      <div className="ms-hero-bg-primary ms-hero-img-coffee">
                        <h3 className="color-white index-1 text-center no-m pt-4">{this.state.events.companyName}</h3>
                        <div className="color-medium index-1 text-center np-m">{this.state.events.email}</div>
                        <img src="https://yt3.ggpht.com/-VJ74LAidPZ8/AAAAAAAAAAI/AAAAAAAAAAA/FJrUFq0qLbU/s900-c-k-no-mo-rj-c0xffffff/photo.jpg" alt="..." className="img-avatar-circle" /> </div>
                      <div className="card-block pt-4 text-center">
                        <h3 className="color-primary">Address</h3>
                        <p>{this.state.events.addressLine1}</p>
                        <p>{this.state.events.city}</p>
                        <a href="javascript:void(0)" className="btn-circle btn-circle-raised btn-circle-xs mt-1 mr-1 no-mr-md btn-facebook">
                          <i className="zmdi zmdi-facebook"></i>
                        </a>
                        <a href="javascript:void(0)" className="btn-circle btn-circle-raised btn-circle-xs mt-1 mr-1 no-mr-md btn-twitter">
                          <i className="zmdi zmdi-twitter"></i>
                        </a>
                        <a href="javascript:void(0)" className="btn-circle btn-circle-raised btn-circle-xs mt-1 mr-1 no-mr-md btn-instagram">
                          <i className="zmdi zmdi-instagram"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12 order-md-3 order-lg-2">
                    <a href="javascript:void(0)"
                      className="btn btn-warning btn-raised btn-block animated fadeInUp animation-delay-12"
                      onClick={this.handleEditProfileClick}
                    >
                      <i className="zmdi zmdi-edit"></i> Edit Profile</a>
                    <a href="javascript:void(0)"
                        className="btn btn-danger btn-raised btn-block animated fadeInUp animation-delay-12"
                        onClick={this.handleDeleteProfileClick}
                    >
                      <i className="zmdi zmdi-delete"></i> Delete User</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="card card-primary animated fadeInUp animation-delay-12">
                  <div className="card-header">
                    <h3 id="eventsCardTitle" className="card-title">
                      <i className="zmdi zmdi-account-circle"></i> Events
                    </h3>
                    <a onClick={this.addEventButton} id="addEventButton" href="javascript:void(0)" className="btn btn-raised btn-default">Add Event</a>
                  </div>
                  <table className="table table-no-border table-striped">
                    <thead>
                      <tr>
                        <th>Event Name</th>
                        <th>Event Date</th>
                        <th className="text-center">Action</th>
                      </tr>
                    </thead>
                    <tbody>

                      {rows}

                    {/*{this.state.events.events.map((event) => {
                    return (
                      <tr key={event._id}>
                        <td>{event.eventName}</td>
                        <td>{event.eventDate}</td>
                        <td>{event.eventTime}</td>
                        <td
                          style={ { "textAlign": "center" } }
                          >
                          <a
                            className="waves-effect waves-light btn"
                            id={event._id}
                            onClick={this.handleDetailClick}
                            >
                              <i
                                className="material-icons left"
                                >
                                  details
                                </i>
                                Details
                            </a>
                          </td>
                      </tr>
                    );
                  })}*/}

                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

        </div>
        <Footer />
      </div>

    );
  }
}

export default Events;
