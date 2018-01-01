import React, { Component } from 'react';
import axios from 'axios';

class GuestRegister extends Component {

  state = {
    guestName: '',
    guestEmail: ''
  }

  componentWillMount() {
    axios.get(`/GuestRegistration/${this.props.match.params.eventId}/${this.props.match.params.tableHostId}`)
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
    if(!this.state.tableHostData) {
      return (
        <div id="ms-preload" class="ms-preload">
          <div id="status">
            <div class="spinner">
              <div class="dot1"></div>
              <div class="dot2"></div>
            </div>
          </div>
        </div>
      )
    }
    return(
      <div>

        {/*<div id="ms-preload" class="ms-preload">
          <div id="status">
            <div class="spinner">
              <div class="dot1"></div>
              <div class="dot2"></div>
            </div>
          </div>
        </div>*/}
        <div class="bg-full-page ms-hero-img-coffee ms-hero-bg-primary ms-bg-fixed back-fixed">

          <header class="ms-header ms-header-primary">
            <div class="container container-full">
              <div class="ms-title">
                <a href="index.html">

                  <span class="ms-logo animated zoomInDown animation-delay-5">CH</span>
                  <h1 class="animated fadeInRight animation-delay-6">chariTABLE Host
                  </h1>
                </a>
              </div>
              <div class="header-right">
              </div>
            </div>
          </header>

          <div class="absolute-center">
            <div class="container">
              <div class="row">
                <div class="col-xl-6">
                  <div class="card card-flat bg-transparent">
                    <div class="card-block color-white">
                      <header class="text-center mb-2">
                        <h1 class="no-m ms-site-title color-white center-block ms-site-title-lg mt-2 animated zoomInDown animation-delay-5"><span>{this.state.tableHostData.searchedEvent.eventName}</span>
                        </h1>
                        <h1 class="no-m ms-site-title color-white center-block ms-site-title-lg mt-2 animated zoomInDown animation-delay-5">Table Host: {this.state.tableHostData.tableHost.name}
                        </h1>
                      </header>
                      <div class="row">
                        <div class="col-12">
                          <div class="text-center card-block animated zoomIn animation-delay-10">
                            <h2 className="animated zoomInDown animation-delay-5">Guests</h2>
                            <ul id="guest-list">
                              {this.state.tableHostData.tableHost.guests.map((guest, idx) => {
                                return (
                                  <li className="animated zoomInDown animation-delay-5" key={idx}><h4>{idx + 1}. {guest.name}</h4></li>
                                );
                              })}
                            </ul>
                          </div>
                        </div>
                        {/*<div class="col-sm-6">
                          <div class="text-center card-block animated zoomIn animation-delay-10">
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
                <div class="col-xl-6">
                  <div class="card index-1 animated zoomInRight animation-delay-7">
                    <div class="card-block-big">
                      <h1 class="color-primary">Register</h1>
                      <hr style={{height:"10px", visibility:"hidden"}} />
                      <form>
                        <div class="form-group label-floating mt-2 mb-1">
                          <div class="input-group center-block">
                            <label class="control-label" for="ms-subscribe">
                              <i class="zmdi zmdi-email"></i> Full Name</label>
                            <input name="guestName" onChange={this.handleInputChange} type="text" id="ms-subscribe" class="form-control" /> </div>
                        </div>
                        <div class="form-group label-floating mt-2 mb-1">
                          <div class="input-group center-block">
                            <label class="control-label" for="ms-subscribe">
                              <i class="zmdi zmdi-email"></i> Email Address</label>
                            <input name="guestEmail" onChange={this.handleInputChange} type="email" id="ms-subscribe" class="form-control" /> </div>
                        </div>
                        <button onClick={this.registerButton} class="btn btn-raised btn-primary btn-block" type="button">Register</button>
                        <h3>Can't make it?</h3>
                        <p>Enter your name above and click Donate to help {this.state.tableHostData.tableHost.name} meet their goal.</p>
                        <button class="btn btn-raised btn-success btn-block" type="button">Donate</button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <p class="lead lead-sm text-center mt-4 color-medium animated fadeInUp animation-delay-16">Material Style &copy; Copyright 2016</p>
            </div>
          </div>
        </div>
        <script src="assets/js/plugins.min.js"></script>
        <script src="assets/js/app.min.js"></script>
        <script src="assets/js/coming.js"></script>

      </div>
    );
  }
}

export default GuestRegister;
