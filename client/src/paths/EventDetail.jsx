import React, { Component } from 'react';
import { Col, Row } from 'react-materialize';
import NavbarLogOut from '../components/NavbarLogOut'
import Footer from '../components/Footer'
import axios from 'axios';
import { Link } from 'react-router-dom';

class Events extends Component {
  constructor(props) {
    super(props);
    this.state = {
      companyID: "",
      tablehosts: []
    }
  }


  componentWillMount() {

    this.setState({companyID: this.props.location.state.companyID});

    let eventID = this.props.location.state.eventInfo._id
    console.log("eventID: ", this.props.location.state.eventInfo._id)

    axios.get('/api/eventDetails/' + eventID)
    .then((eventInfo) => {

      this.setState({
        eventId: eventInfo.data._id,
        eventName: eventInfo.data.eventName,
        eventLocation: eventInfo.data.eventLocation,
        eventDate: eventInfo.data.eventDate,
        eventTime: eventInfo.data.eventTime,
        contactName: eventInfo.data.contactName,
        contactPhone: eventInfo.data.contactPhone,
        contactEmail: eventInfo.data.contactEmail,
        numberOfTables: eventInfo.data.numberOfTables,
        numberOfTableHosts: eventInfo.data.numberOfTableHosts,
        numberOfGuestsPerTable: eventInfo.data.numberOfGuestsPerTable,
        numberOfSponsors: eventInfo.data.numberOfSponsors
      })

      for (let i = 0; i < eventInfo.data.tableHosts.length; i++) {

        let tablehost = eventInfo.data.tableHosts[i]._id;
        let tablehostProperty = eventInfo.data.tableHosts[i];

        this.setState({
          tablehosts: [...this.state.tablehosts, eventInfo.data.tableHosts[i]]
        }, () => {
        console.log("Tablehost array: ", this.state.tablehosts);
      });

        this.setState({

          [tablehost]: {
            name: tablehostProperty.name,
            email: tablehostProperty.email,
          }

        }, () => {

          // console.log('Tablehosts: ', this.state)

        });

        // Setting state for each guest
        for (let j = 0; j < eventInfo.data.tableHosts[i].guests.length; j++) {

          let guest = eventInfo.data.tableHosts[i].guests[j]._id;
          let guestProperty = eventInfo.data.tableHosts[i].guests[j];

          this.setState({

            [guest]: {
              name: guestProperty.name,
              email: guestProperty.email,
            }

          }, () => {

            // console.log('Guest: ', this.state)

          });

        }

    }



    })

    {/*this.setState({
      eventId: this.props.location.state.eventInfo._id,
      eventName: this.props.location.state.eventInfo.eventName,
      eventLocation: this.props.location.state.eventInfo.eventLocation,
      eventDate: this.props.location.state.eventInfo.eventDate,
      eventTime: this.props.location.state.eventInfo.eventTime,
      contactName: this.props.location.state.eventInfo.contactName,
      contactPhone: this.props.location.state.eventInfo.contactPhone,
      contactEmail: this.props.location.state.eventInfo.contactEmail,
      numberOfTables: this.props.location.state.eventInfo.numberOfTables,
      numberOfTableHosts: this.props.location.state.eventInfo.numberOfTableHosts,
      numberOfGuestsPerTable: this.props.location.state.eventInfo.numberOfGuestsPerTable,
      numberOfSponsors: this.props.location.state.eventInfo.numberOfSponsors
    })*/}


  }

  handleBackButtonClick = (event) => {
    event.preventDefault();
    // console.log('Back to Company Events Button Clicked!!');
    // let companyID = event.target.id;
    // console.log('Back Button Company ID: ', companyID);
    this.props.history.push({
      pathname: `/profile/${this.state.companyID}`
    });
  }

  handleEventInputChange = (event) => {
    this.setState({

      [event.target.name]: event.target.value

    }, () => {
      // console.log('Tablehosts: ', this.state)
    });
  }

  handleTablehostNameChange = (event) => {
    this.setState({

      [event.target.name]: {
        ...this.state[event.target.name],
        name: event.target.value
      }

    }, () => {
      // console.log('Tablehosts: ', this.state)
    });
  }

  handleTablehostEmailChange = (event) => {
    this.setState({

      [event.target.name]: {
        ...this.state[event.target.name],
        email: event.target.value
      }

    }, () => {
      // console.log('Tablehosts: ', this.state)
    });
  }

  handleGuestNameChange = (event) => {
    this.setState({

      [event.target.name]: {
        ...this.state[event.target.name],
        name: event.target.value
      }

    }, () => {
      // console.log('GuestName: ', this.state)
    });
  }

  handleGuestEmailChange = (event) => {
    this.setState({

      [event.target.name]: {
        ...this.state[event.target.name],
        email: event.target.value
      }

    }, () => {
      // console.log('GuestEmail: ', this.state)
    });
  }

  eventSaveButton = (event) => {
    event.preventDefault();

    let eventInfo = {
      eventName: this.state.eventName,
      eventLocation: this.state.eventLocation,
      eventDate: this.state.eventDate,
      eventTime: this.state.eventTime,
      contactName: this.state.contactName,
      contactPhone: this.state.contactPhone,
      contactEmail: this.state.contactEmail,
      numberOfTables: this.state.numberOfTables,
      numberOfTableHosts: this.state.numberOfTableHosts,
      numberOfGuestsPerTable: this.state.numberOfGuestsPerTable,
      numberOfSponsors: this.state.numberOfSponsors
    }

    axios.put(`/api/events/${this.state.eventId}`, eventInfo)
    .then( (response) => {
      console.log(response);
    })
    .catch( (error) => {
      console.log(error);
    });
  }

  tablehostSaveButton = (event) => {

    let tablehostId = event.target.id;

    let tablehostInfo = {
      name: this.state[tablehostId].name,
      email: this.state[tablehostId].email
    }

    axios.put(`/api/tablehosts/${tablehostId}`, tablehostInfo)
    .then( (response) => {
      console.log(response);
    })
    .catch( (error) => {
      console.log(error);
    });
  }

  guestSaveButton = (event) => {

    let guestId = event.target.id;
    console.log(guestId);

    let guestInfo = {
      name: this.state[guestId].name,
      email: this.state[guestId].email
    }

    axios.put(`/api/guests/${guestId}`, guestInfo)
    .then( (response) => {
      console.log(response);
    })
    .catch( (error) => {
      console.log(error);
    });
  }

  eventDeleteButton = (event) => {

    axios.delete(`/api/events/${this.state.eventId}`)
    .then( (response) => {
      console.log(response);
      this.props.history.push({
        pathname: `/profile/${this.state.companyID}`
      });
    })
    .catch( (error) => {
      console.log(error);
    });
  }

  tablehostDeleteButton = (event) => {

    let tablehostId = event.target.id;

    axios.delete(`/api/tablehosts/${tablehostId}`)
    .then( (response) => {
      console.log(response);
    })
    .catch( (error) => {
      console.log(error);
    });
  }

  guestDeleteButton = (event) => {
    let guestId = event.target.id;

    axios.delete(`/api/guests/${guestId}`)
    .then( (response) => {
      console.log(response);
    })
    .catch( (error) => {
      console.log(error);
    });
  }


  // handleGuestEmailChange = (event) => {
  //   console.log('Hello: ', this.state[event.target.name].guests.length)
  //   var index = 0;

  //   for (let i = 0; i < this.state[event.target.name].guests.length; i++) {
  //     if (event.target.id === this.state[event.target.name].guests[i]._id) {
  //       index = i;
  //     }
  //   }

  //   this.setState({
  //     [event.target.name]: update(this.state, { [event.target.name]: { guests:
  //       { [index]: { email: { $set: [event.target.value] } } } } })
  //   }, () => {
  //     console.log('Please ', this.state)
  //   });
  // }

  render() {
    if(!this.state.eventId) {
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

    return(
      <Row>
        <Col s={12} m={6}>
          <div>

          {/*<div id="ms-preload" className="ms-preload">
            <div id="status">
              <div className="spinner">
                <div className="dot1"></div>
                <div className="dot2"></div>
              </div>
            </div>
          </div>
          <div className="ms-site-container">*/}


            <NavbarLogOut />

            <div className="ms-hero-page-override ms-hero-img-team ms-hero-bg-primary">
              <div className="container">
                <div className="text-center">
                  <h1 className="no-m ms-site-title color-white center-block ms-site-title-lg mt-2 animated zoomInDown animation-delay-5">Event Details</h1>
                  {/*<p className="lead lead-lg color-light text-center center-block mt-2 mw-800 text-uppercase fw-300 animated fadeInUp animation-delay-7">
                    <br />Contact us we will help you to finish your dream.</p>*/}
                </div>
              </div>
            </div>
            <div className="container">
              <div className="card card-primary card-hero animated fadeInUp animation-delay-7">
                <div className="card-header">
                  <h3 className="card-title">
                    <i className="zmdi zmdi-graduation-cap"></i> Event Details
                  </h3>
                </div>
                <div className="card-block">
                  <form className="form-horizontal">
                    <fieldset>
                      <div className="row form-group">
                        <label htmlFor="inputUser" className="col-md-2 control-label">Event Name</label>
                        <div className="col-md-9">
                          <input name="eventName" onChange={this.handleEventInputChange} defaultValue={this.state.eventName} type="text" className="form-control" id="eventName" placeholder="Event Name" /> </div>
                      </div>
                      <div className="row form-group">
                        <label htmlFor="inputEmail" className="col-md-2 control-label">Event Location</label>
                        <div className="col-md-9">
                          <input name="eventLocation" onChange={this.handleEventInputChange} defaultValue={this.state.eventLocation} type="text" className="form-control" id="eventLocation" placeholder="Event Location" /> </div>
                      </div>
                      <div className="row form-group">
                        <label htmlFor="inputDate" className="col-md-2 control-label">Event Date</label>
                        <div className="col-md-9">
                          <input name="eventDate" onChange={this.handleEventInputChange} defaultValue={this.state.eventDate} id="eventDate" type="date" className="form-control" placeholder="mm/dd/yy" /> </div>
                      </div>
                      <div className="row form-group">
                        <label htmlFor="eventTime" className="col-md-2 control-label">Event Time</label>
                        <div className="col-md-9">
                          <input name="eventTime" onChange={this.handleEventInputChange} defaultValue={this.state.eventTime} type="time" className="form-control" id="eventTime" placeholder="Event Time" /> </div>
                      </div>
                      <div className="row form-group">
                        <label htmlFor="inputName" className="col-md-2 control-label">Contact Name</label>
                        <div className="col-md-9">
                          <input name="contactName" onChange={this.handleEventInputChange} defaultValue={this.state.contactName} type="text" className="form-control" id="contactName" placeholder="Contact Name" /> </div>
                      </div>
                      <div className="row form-group">
                        <label htmlFor="inputLast" className="col-md-2 control-label">Contact Phone</label>
                        <div className="col-md-9">
                          <input name="contactPhone" onChange={this.handleEventInputChange} defaultValue={this.state.contactPhone} type="tel" pattern="^\d{3}-\d{3}-\d{4}$" className="form-control" id="contactPhone" placeholder="ex: xxx-xxx-xxxx" /> </div>
                      </div>
                      <div className="row form-group">
                        <label htmlFor="inputEmail" className="col-md-2 control-label">Contact Email</label>
                        <div className="col-md-9">
                          <input name="contactEmail" onChange={this.handleEventInputChange} defaultValue={this.state.contactEmail} type="email" className="form-control" id="contactEmail" placeholder="Contact Email" /> </div>
                      </div>
                      <div className="row form-group">
                        <label htmlFor="numberOfTables" className="col-md-2 control-label">Number of Tables</label>
                        <div className="col-md-9">
                          <input name="numberOfTables" onChange={this.handleEventInputChange} defaultValue={this.state.numberOfTables} type="Number" className="form-control" id="numberOfTables" placeholder="Number of Tables" /> </div>
                      </div>
                      <div className="row form-group">
                        <label htmlFor="numberOfTableHosts" className="col-md-2 control-label">Number of Table Hosts</label>
                        <div className="col-md-9">
                          <input name="numberOfTableHosts" onChange={this.handleEventInputChange} defaultValue={this.state.numberOfTableHosts} type="Number" className="form-control" id="numberOfTableHosts" placeholder="Number of Table Hosts" /> </div>
                      </div>
                      <div className="row form-group">
                        <label htmlFor="numberOfGuestsPerTable" className="col-md-2 control-label">Number of Guests Per Table</label>
                        <div className="col-md-9">
                          <input name="numberOfGuestsPerTable" onChange={this.handleEventInputChange} defaultValue={this.state.numberOfGuestsPerTable} type="Number" className="form-control" id="numberOfGuestsPerTable" placeholder="Number of Guests Per Table" /> </div>
                      </div>
                      <div className="row form-group">
                        <label htmlFor="numberOfSponsors" className="col-md-2 control-label">Number of Sponsors</label>
                        <div className="col-md-9">
                          <input name="numberOfSponsors" onChange={this.handleEventInputChange} defaultValue={this.state.numberOfSponsors} type="Number" className="form-control" id="numberOfSponsors" placeholder="Number of Sponsors" /> </div>
                      </div>


                      <div className="row mt-2 pull-right">
                        <div className="offset-lg-2 col-lg-10">

                        </div>

                          <button className="btn btn-raised btn-warning" onClick={this.handleBackButtonClick} style={ {margin: "5px"} }>Back</button>
                          <button className="btn btn-raised btn-primary save-button" onClick={this.eventSaveButton} style={ {margin: "5px"} }>Save Changes</button>
                          <button className="btn btn-raised btn-danger" onClick={this.eventDeleteButton} style={ {margin: "5px"} }>Delete Event</button>
                      </div>
                    </fieldset>
                  </form>
                </div>
              </div>

              <h3 className="animated fadeInUp animation-delay-10">Tablehosts</h3>
              <div className="ms-collapse animated fadeInUp animation-delay-10" id="accordion2" role="tablist" aria-multiselectable="true" >

                {this.state.tablehosts.map((tableHost, idx) => {

                  return (
                    <div key={idx} className="mb-0 card card-primary">
                      <div className="card-header" role="tab" id={"headingOne2" + idx}>
                        <div className="card-title">
                          <a className="collapsed withripple" role="button" data-toggle="collapse" data-parent="#accordion2" href={`#tablehost${idx}`} aria-expanded="false" aria-controls={"#collapseOne2" + idx}>
                            <i className="zmdi zmdi-pin"></i> {tableHost.name} </a>
                        </div>
                      </div>

                      <div id={`tablehost${idx}`} className="card-collapse collapse" role="tabpanel" aria-labelledby={"headingOne2" + idx}>
                        <div className="col-sm-5" style={{float: 'left'}}>
                        <label htmlFor="tableHostName" className="col-md-5 control-label tablehost-label">Tablehost</label>
                          <input name={tableHost._id} defaultValue={tableHost.name} onChange={this.handleTablehostNameChange} type="text" className="form-control"  placeholder="Tablehost" />
                        </div>

                        <div className="col-sm-5 email-input" style={{float: 'left'}}>
                        <label htmlFor="tableHostEmail" className="col-md-5 control-label tablehost-label">Tablehost Email</label>
                          <input name={tableHost._id} defaultValue={tableHost.email} onChange={this.handleTablehostEmailChange} type="text" className="form-control"  placeholder="Tablehost Email" />
                        </div>

                        <a href="javascript:void(0)" style={{float: 'left'}}  id={tableHost._id} onClick={this.tablehostSaveButton} className="btn btn-raised btn-danger btn-sm save-button">Save</a>
                        <a href="javascript:void(0)" style={{float: 'left'}}  id={tableHost._id} onClick={this.tablehostDeleteButton} className="btn btn-raised btn-danger btn-sm">Delete</a>


                        <div className="col-sm-12" style={{float: 'left'}}>
                        <label htmlFor="url" className="col-md-2 control-label tablehost-label">Tablehost URL</label>


                          <Link to={`/GuestRegistration/${this.state.eventId}/${tableHost._id}`} target="_blank"><h4>{`localhost:3000/GuestRegistration/${this.state.eventId}/${tableHost._id}`}</h4></Link>

                        </div>
                        {tableHost.guests.map((guest, idx) => {

                          return (
                            <div key={idx}>

                              <div className="col-sm-5" style={{float: 'left'}}>
                                <label htmlFor="guest" className="col-md-4 control-label tablehost-label">Guest {idx + 1}</label>
                                <input name={guest._id} id={guest._id} defaultValue={guest.name} onChange={this.handleGuestNameChange} type="text" className="form-control"  placeholder="Guest" />
                              </div>

                              <div className="col-sm-5 email-input" style={{float: 'left'}}>
                                <label htmlFor="guest" className="col-md-4 control-label tablehost-label">Guest Email</label>
                                <input name={guest._id} defaultValue={guest.email} onChange={this.handleGuestEmailChange} type="text" className="form-control"  placeholder="Guest Email" />
                              </div>


                              <a href="javascript:void(0)" style={{float: 'left'}} onClick={this.guestSaveButton} id={guest._id} className="btn btn-raised btn-danger btn-sm save-button">Save</a>
                              <a href="javascript:void(0)" style={{float: 'left'}} onClick={this.guestDeleteButton} id={guest._id} className="btn btn-raised btn-danger btn-sm">Delete</a>


                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/*<EventDetailButton
                companyID={this.state.companyID}
              />
              <button
                id={this.state.companyID}
                onClick={this.handleBackButtonClick}
              >
              Go Back
              </button>
              {/* <BackButton
              companyData={this.state.companyInfo}
              onClick={this.handleBackButtonClick}
              /> */}

            </div>

            <Footer />
            <div className="btn-back-top">
              <a href="#" data-scroll id="back-top" className="btn-circle btn-circle-primary btn-circle-sm btn-circle-raised ">
                <i className="zmdi zmdi-long-arrow-up"></i>
              </a>
            </div>
          </div>

          <script src="/assets/js/plugins.min.js"></script>
          <script src="/assets/js/app.min.js"></script>

        </Col>
      </Row>

    );
  }
}

export default Events;
