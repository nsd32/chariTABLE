import React, { Component } from 'react';

class Profile extends Component {


  render() {
    return(
      <div>

        {/* <div id="ms-preload" class="ms-preload">
          <div id="status">
            <div class="spinner">
              <div class="dot1"></div>
              <div class="dot2"></div>
            </div>
          </div>
        </div> */}
        <div class="ms-site-container">


          <header class="ms-header ms-header-primary">

            <div class="container container-full">
              <div class="ms-title">
                <a href="index.html">
                  <img src="assets/img/demo/logo-header.png" alt="" />
                  <span class="ms-logo animated zoomInDown animation-delay-5">M</span>
                  <h1 class="animated fadeInRight animation-delay-6">Material
                    <span>Style</span>
                  </h1>
                </a>
              </div>
              <div class="header-right">
                <div class="share-menu">
                  <ul class="share-menu-list">
                    <li class="animated fadeInRight animation-delay-3">
                      <a href="javascript:void(0)" class="btn-circle btn-google">
                        <i class="zmdi zmdi-google"></i>
                      </a>
                    </li>
                    <li class="animated fadeInRight animation-delay-2">
                      <a href="javascript:void(0)" class="btn-circle btn-facebook">
                        <i class="zmdi zmdi-facebook"></i>
                      </a>
                    </li>
                    <li class="animated fadeInRight animation-delay-1">
                      <a href="javascript:void(0)" class="btn-circle btn-twitter">
                        <i class="zmdi zmdi-twitter"></i>
                      </a>
                    </li>
                  </ul>
                  <a href="javascript:void(0)" class="btn-circle btn-circle-primary animated zoomInDown animation-delay-7">
                    <i class="zmdi zmdi-share"></i>
                  </a>
                </div>
                <a href="javascript:void(0)" class="btn-circle btn-circle-primary no-focus animated zoomInDown animation-delay-8" data-toggle="modal" data-target="#ms-account-modal">
                  <i class="zmdi zmdi-account"></i>
                </a>
                <form class="search-form animated zoomInDown animation-delay-9">
                  <input id="search-box" type="text" class="search-input" placeholder="Search..." name="q" />
                  <label for="search-box">
                    <i class="zmdi zmdi-search"></i>
                  </label>
                </form>
                <a href="javascript:void(0)" class="btn-ms-menu btn-circle btn-circle-primary ms-toggle-left animated zoomInDown animation-delay-10">
                  <i class="zmdi zmdi-menu"></i>
                </a>
              </div>
            </div>
          </header>

          <div class="ms-hero-page-override ms-hero-img-team ms-hero-bg-primary">
            <div class="container">
              <div class="text-center">
                <h1 class="no-m ms-site-title color-white center-block ms-site-title-lg mt-2 animated zoomInDown animation-delay-5">Event Details</h1>
                {/*<p class="lead lead-lg color-light text-center center-block mt-2 mw-800 text-uppercase fw-300 animated fadeInUp animation-delay-7">
                  <br />Contact us we will help you to finish your dream.</p>*/}
              </div>
            </div>
          </div>
          <div class="container">
            <div class="card card-primary card-hero animated fadeInUp animation-delay-7">
              <div class="card-header">
                <h3 class="card-title">
                  <i class="zmdi zmdi-graduation-cap"></i> Event Details
                </h3>
              </div>
              <div class="card-block">
                <form class="form-horizontal">
                  <fieldset>
                    <div class="row form-group">
                      <label for="inputUser" class="col-md-2 control-label">Event Name</label>
                      <div class="col-md-9">
                        <input name="eventName" onChange={this.handleInputChange} type="text" class="form-control" id="eventName" placeholder="Event Name" /> </div>
                    </div>
                    <div class="row form-group">
                      <label for="inputEmail" class="col-md-2 control-label">Event Location</label>
                      <div class="col-md-9">
                        <input name="eventLocation" onChange={this.handleInputChange} type="email" class="form-control" id="eventLocation" placeholder="Event Location" /> </div>
                    </div>
                    <div class="row form-group">
                      <label for="inputDate" class="col-md-2 control-label">Event Date</label>
                      <div class="col-md-9">
                        <input name="eventDate" onChange={this.handleInputChange} id="eventDate" type="text" class="form-control" placeholder="mm/dd/yy" /> </div>
                    </div>
                    <div class="row form-group">
                      <label for="eventTime" class="col-md-2 control-label">Event Time</label>
                      <div class="col-md-9">
                        <input name="eventTime" onChange={this.handleInputChange} type="text" class="form-control" id="eventTime" placeholder="Event Time" /> </div>
                    </div>
                    <div class="row form-group">
                      <label for="inputName" class="col-md-2 control-label">Contact Name</label>
                      <div class="col-md-9">
                        <input name="contactName" onChange={this.handleInputChange} type="text" class="form-control" id="contactName" placeholder="Contact Name" /> </div>
                    </div>
                    <div class="row form-group">
                      <label for="inputLast" class="col-md-2 control-label">Contact Phone</label>
                      <div class="col-md-9">
                        <input name="contactPhone" onChange={this.handleInputChange} type="text" class="form-control" id="contactPhone" placeholder="Contact Phone" /> </div>
                    </div>
                    <div class="row form-group">
                      <label for="inputEmail" class="col-md-2 control-label">Contact Email</label>
                      <div class="col-md-9">
                        <input name="contactEmail" onChange={this.handleInputChange} type="text" class="form-control" id="contactEmail" placeholder="Contact Email" /> </div>
                    </div>
                    <div class="row form-group">
                      <label for="numberOfTables" class="col-md-2 control-label">Number of Tables</label>
                      <div class="col-md-9">
                        <input name="numberOfTables" onChange={this.handleInputChange} type="Number" class="form-control" id="numberOfTables" placeholder="Number of Tables" /> </div>
                    </div>
                    <div class="row form-group">
                      <label for="numberOfTableHosts" class="col-md-2 control-label">Number of Table Hosts</label>
                      <div class="col-md-9">
                        <input name="numberOfTableHosts" onChange={this.handleInputChange} type="Number" class="form-control" id="numberOfTableHosts" placeholder="Number of Table Hosts" /> </div>
                    </div>
                    <div class="row form-group">
                      <label for="numberOfGuestsPerTable" class="col-md-2 control-label">Number of Guests Per Table</label>
                      <div class="col-md-9">
                        <input name="numberOfGuestsPerTable" onChange={this.handleInputChange} type="Number" class="form-control" id="numberOfGuestsPerTable" placeholder="Number of Guests Per Table" /> </div>
                    </div>
                    <div class="row form-group">
                      <label for="numberOfSponsors" class="col-md-2 control-label">Number of Sponsors</label>
                      <div class="col-md-9">
                        <input name="numberOfSponsors" onChange={this.handleInputChange} type="Number" class="form-control" id="numberOfSponsors" placeholder="Number of Sponsors" /> </div>
                    </div>

                    <div class="row mt-2">
                      <div class="offset-lg-2 col-lg-6">

                      </div>
                      <div class="col-lg-3">
                        <button class="btn btn-raised btn-primary btn-block" onClick={this.nextButton}>Next</button>
                      </div>
                    </div>
                  </fieldset>
                </form>
              </div>
            </div>

          </div>

          <footer class="ms-footer">
            <div class="container">
              <p>Copyright &copy; Material Style 2017</p>
            </div>
          </footer>
          <div class="btn-back-top">
            <a href="#" data-scroll id="back-top" class="btn-circle btn-circle-primary btn-circle-sm btn-circle-raised ">
              <i class="zmdi zmdi-long-arrow-up"></i>
            </a>
          </div>
        </div>

        <script src="assets/js/plugins.min.js"></script>
        <script src="assets/js/app.min.js"></script>

      </div>
    );
  }
}

export default Profile;
