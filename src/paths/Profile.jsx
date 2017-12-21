import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Profile extends Component {
	

  render() {
    return(
      <div>

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
            </div>
          </div>
        </header>

      <div class="ms-hero-page-override ms-hero-img-airplane ms-bg-fixed ms-hero-bg-dark-light">
        <div class="container">
          <div class="text-center">
            <h1 class="no-m ms-site-title color-white center-block ms-site-title-lg mt-2 animated zoomInDown animation-delay-5">Add Event Details</h1>
            {/*<p class="lead lead-lg color-light text-center center-block mt-2 mw-800 text-uppercase fw-300 animated fadeInUp animation-delay-7">Do not wait more register now! Access our great community and benefit from
              <span class="color-info">exclusive membership</span> conditions.</p>*/}
          </div>
        </div>
      </div>
      <div class="container">
        <div class="card card-primary card-hero animated fadeInUp animation-delay-7">
          <div class="card-block">
            <form class="form-horizontal">
              <fieldset>
                <div class="row form-group">
                  <label for="inputUser" class="col-md-2 control-label">Event Name</label>
                  <div class="col-md-9">
                    <input type="text" class="form-control" id="eventName" placeholder="Event Name" /> </div>
                </div>
                <div class="row form-group">
                  <label for="inputEmail" class="col-md-2 control-label">Event Location</label>
                  <div class="col-md-9">
                    <input type="email" class="form-control" id="eventLocation" placeholder="Event Location" /> </div>
                </div>
                <div class="row form-group">
                  <label for="inputDate" class="col-md-2 control-label">Event Date</label>
                  <div class="col-md-9">
                    <input id="eventDate" type="text" class="form-control" placeholder="mm/dd/yy" /> </div>
                </div>
                <div class="row form-group">
                  <label for="eventTime" class="col-md-2 control-label">Event Time</label>
                  <div class="col-md-9">
                    <input type="text" class="form-control" id="eventTime" placeholder="Event Time" /> </div>
                </div>
                <div class="row form-group">
                  <label for="inputName" class="col-md-2 control-label">Contact Name</label>
                  <div class="col-md-9">
                    <input type="text" class="form-control" id="inputName" placeholder="Contact Name" /> </div>
                </div>
                <div class="row form-group">
                  <label for="inputLast" class="col-md-2 control-label">Contact Phone</label>
                  <div class="col-md-9">
                    <input type="text" class="form-control" id="inputLast" placeholder="Contact Phone" /> </div>
                </div>
                <div class="row form-group">
                  <label for="inputEmail" class="col-md-2 control-label">Contact Email</label>
                  <div class="col-md-9">
                    <input type="text" class="form-control" id="inputEmail" placeholder="Contact Email" /> </div>
                </div>
                <div class="row form-group">
                  <label for="numberOfTables" class="col-md-2 control-label">Number of Tables</label>
                  <div class="col-md-9">
                    <input type="Number" class="form-control" id="numberOfTables" placeholder="Number of Tables" /> </div>
                </div>
                <div class="row form-group">
                  <label for="numberOfTableHosts" class="col-md-2 control-label">Number of Table Hosts</label>
                  <div class="col-md-9">
                    <input type="Number" class="form-control" id="numberOfTableHosts" placeholder="Number of Table Hosts" /> </div>
                </div>
                <div class="row form-group">
                  <label for="numberOfGuestsPerTable" class="col-md-2 control-label">Number of Guests Per Table</label>
                  <div class="col-md-9">
                    <input type="Number" class="form-control" id="numberOfGuestsPerTable" placeholder="Number of Guests Per Table" /> </div>
                </div>
                <div class="row form-group">
                  <label for="numberOfSponsors" class="col-md-2 control-label">Number of Sponsors</label>
                  <div class="col-md-9">
                    <input type="Number" class="form-control" id="numberOfSponsors" placeholder="Number of Sponsors" /> </div>
                </div>
                
                <div class="row mt-2">
                  <div class="offset-lg-2 col-lg-6">

                  </div>
                  <div class="col-lg-3">
                    <button class="btn btn-raised btn-primary btn-block">Next</button>
                  </div>
                </div>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default Profile;