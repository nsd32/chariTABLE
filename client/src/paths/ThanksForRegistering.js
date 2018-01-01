import React, { Component } from 'react';
import Footer from '../components/Footer'

class ThanksForRegistering extends Component {


  render() {
    console.log(this.props.location.state.url)
    return(
      <div className="ms-site-container">
				<div className="container">
					<div className="row">

        {/*<div id="ms-preload" class="ms-preload">
          <div id="status">
            <div class="spinner">
              <div class="dot1"></div>
              <div class="dot2"></div>
            </div>
          </div>
        </div>*/}

        <div class="bg-full-page bg-primary back-fixed">
          <div class="mw-500 absolute-center">
            <div class="card animated zoomInUp animation-delay-7 color-primary withripple">
              <div class="card-block">
                <div class="text-center color-dark">
                  <h1 class="text-big">Thanks For Registering!</h1>


                  <a href={this.props.location.state.url} class="btn btn-primary btn-raised">
                    <i class="zmdi zmdi-home"></i> Go Back To Your Tablehost Page</a>
                </div>
              </div>
            </div>
          </div>
        </div>
			</div>
		</div>
        <script src="assets/js/plugins.min.js"></script>
        <script src="assets/js/app.min.js"></script>

      </div>
    );
  }
}

export default ThanksForRegistering;
