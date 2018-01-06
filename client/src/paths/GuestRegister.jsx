import React, { Component } from 'react';
import axios from 'axios';

class GuestRegister extends Component {

  state = {
    guestName: '',
    guestEmail: ''
  }

  componentWillMount() {
    axios.get(`/api/guestregister/${this.props.match.params.eventId}/${this.props.match.params.tableHostId}`)
      .then((response) => {
        console.log('Did Mount: ' ,response.data);
        this.setState({
          tableHostData: response.data
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
      this.props.history.push({
        pathname: "/thanksforregistering",
        state: { url: `/GuestRegistration/${this.props.match.params.eventId}/${this.props.match.params.tableHostId}` }
      });
    })
    .catch( (error) => {
      console.log(error);
    });
  }

  render() {

    return(
      <div>
        <div className="bg-full-page ms-hero-img-coffee ms-hero-bg-primary ms-bg-fixed back-fixed">

          <header className="ms-header ms-header-primary">
            <div className="container container-full">
              <div className="ms-title">
                <a href="index.html">

                  <span className="ms-logo">CH</span>
                  <h1 className="">chariTABLE Host
                  </h1>
                </a>
              </div>
              <div className="header-right">
              </div>
            </div>
          </header>

          <div className="absolute-center">
            <div className="container">
              <div className="row">
                <div className="col-xl-6">
                  <div className="card card-flat bg-transparent">
                    <div className="card-block color-white">
                      <header className="text-center mb-2">
                        <h1 className="no-m ms-site-title color-white center-block ms-site-title-lg mt-2 "><span>{this.state.tableHostData.searchedEvent.eventName}</span>
                        </h1>
                        <h1 className="no-m ms-site-title color-white center-block ms-site-title-lg mt-2 ">Table Host: {this.state.tableHostData.tableHost.name}
                        </h1>
                      </header>
                      <div className="row">
                        <div className="col-12">
                          <div className="text-center card-block ">
                            <h2 className="">Guests</h2>
                            <ul id="guest-list">
                              {this.state.tableHostData.tableHost.guests.map((guest, idx) => {
                                return (
                                  <li className="" key={idx}><h4>{idx + 1}. {guest.name}</h4></li>
                                );
                              })}
                            </ul>
                          </div>
                        </div>
                        {/*<div className="col-sm-6">
                          <div className="text-center card-block animated zoomIn animation-delay-10">
                            <h2 className="animated zoomInDown animation-delay-5">Sponsors</h2>
                            <ul>
                              {this.state.tableHostData.searchedEvent.sponsors.map((sponsor, idx) => {
                                return (
                                  <li className="animated zoomInDown animation-delay-5" key={idx}><h4>{sponsor.name}</h4></li>
                                );
                              })}
                            </ul>
                          </div>
                        </div>*/}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6">
                  <div className="card index-1">
                    <div className="card-block-big">
                      <h1 className="color-primary">Register</h1>
                      <hr style={{height:"10px", visibility:"hidden"}} />
                      <form>
                        <div className="form-group label-floating mt-2 mb-1">
                          <div className="input-group center-block">
                            <label className="control-label" htmlFor="ms-subscribe">
                              <i className="zmdi zmdi-email"></i> Full Name</label>
                            <input name="guestName" onChange={this.handleInputChange} type="text" id="ms-subscribe" className="form-control" /> </div>
                        </div>
                        <div className="form-group label-floating mt-2 mb-1">
                          <div className="input-group center-block">
                            <label className="control-label" htmlFor="ms-subscribe">
                              <i className="zmdi zmdi-email"></i> Email Address</label>
                            <input name="guestEmail" onChange={this.handleInputChange} type="email" id="ms-subscribe" className="form-control" /> </div>
                        </div>
                        <button onClick={this.registerButton} className="btn btn-raised btn-primary btn-block" type="button">Register</button>
                        <h3>Can't make it?</h3>
                        <p>Enter your name above and click Donate to help {this.state.tableHostData.tableHost.name} meet their goal.</p>
                        <button className="btn btn-raised btn-success btn-block" type="button">Donate</button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <p className="lead lead-sm text-center mt-4 color-medium">Jubatus Software &copy; Copyright 2017</p>
            </div>
          </div>
        </div>

        <script src="/assets/js/plugins.min.js"></script>
        <script src="/assets/js/app.min.js"></script>
        <script src="/assets/js/coming.js"></script>
      </div>
    );
  }
}

export default GuestRegister;
