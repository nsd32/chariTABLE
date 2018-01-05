import React, { Component } from 'react';
import axios from 'axios';

class ErrorMessage extends Component {
  state={
    status: "",
    message: ""
  }

  componentDidMount() {
    console.log(this.props.location)
  }


  render() {

    return(

    <div class="bg-full-page bg-primary back-fixed">
      <div class="mw-500 absolute-center">
        <div class="card animated zoomInUp animation-delay-7 color-primary withripple">
          <div class="card-block">
            <div class="text-center color-dark">
              <h1 class="color-primary text-big">Error {this.state.status}</h1>
              <h2>Page Not Found</h2>
              <p class="lead lead-sm">We have not found what you are looking for.
                <br />We have put our robots to search.</p>
              <a href="/" class="btn btn-primary btn-raised">
                <i class="zmdi zmdi-home"></i> Go Home</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default ErrorMessage;
