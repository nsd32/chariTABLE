import React, { Component } from 'react';

class Profile extends Component {
	

  render() {
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
        
        <div class="bg-full-page bg-primary back-fixed">
          <div class="mw-500 absolute-center">
            <div class="card animated zoomInUp animation-delay-7 color-primary withripple">
              <div class="card-block">
                <div class="text-center color-dark">
                  <h1 class="text-big">Thanks For Registering!</h1>
                  
                  
                  <a href="index.html" class="btn btn-primary btn-raised">
                    <i class="zmdi zmdi-home"></i> Go Back To Your Tablehost Page</a>
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

export default Profile;