import React, { Component } from 'react';
import Hero from '../components/Hero';
import LandingButton from '../components/buttons/LandingButton';

class LandingPageUpdated extends Component {
  render() {
    return(
    <div>
      <div id="ms-preload" className="ms-preload">
      <div id="status">
        <div className="spinner">
          <div className="dot1"></div>
          <div className="dot2"></div>
        </div>
      </div>
    </div>
    <div className="ms-site-container">
      {/* <!-- Modal --> */}
      <div className="modal modal-primary" id="ms-account-modal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div className="modal-dialog animated zoomIn animated-3x" role="document">
          <div className="modal-content">
            <div className="modal-header d-block shadow-2dp no-pb">
              <button type="button" className="close d-inline pull-right mt-2" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">
                  <i className="zmdi zmdi-close"></i>
                </span>
              </button>
              <div className="modal-title text-center">
                <span className="ms-logo ms-logo-white ms-logo-sm mr-1">CH</span>
                <h3 className="no-m ms-site-title">chari<span>TABLE</span> Host</h3>
              </div>
              <div className="modal-header-tabs">
                <ul className="nav nav-tabs nav-tabs-full nav-tabs-3 nav-tabs-primary" role="tablist">
                  <li className="nav-item" role="presentation">
                    <a href="#ms-login-tab" aria-controls="ms-login-tab" role="tab" data-toggle="tab" className="nav-link active withoutripple">
                      <i className="zmdi zmdi-account"></i> Login</a>
                  </li>
                  <li className="nav-item" role="presentation">
                    <a href="#ms-register-tab" aria-controls="ms-register-tab" role="tab" data-toggle="tab" className="nav-link withoutripple">
                      <i className="zmdi zmdi-account-add"></i> Register</a>
                  </li>
                  <li className="nav-item" role="presentation">
                    <a href="#ms-recovery-tab" aria-controls="ms-recovery-tab" role="tab" data-toggle="tab" className="nav-link withoutripple">
                      <i className="zmdi zmdi-key"></i> Recovery Pass</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="modal-body">
              <div className="tab-content">
                <div role="tabpanel" className="tab-pane fade active show" id="ms-login-tab">
                  <form autocomplete="off">
                    <fieldset>
                      <div className="form-group label-floating">
                        <div className="input-group">
                          <span className="input-group-addon">
                            <i className="zmdi zmdi-account"></i>
                          </span>
                          <label className="control-label" for="ms-form-user">Username</label>
                          <input type="text" id="ms-form-user" className="form-control" /> </div>
                      </div>
                      <div className="form-group label-floating">
                        <div className="input-group">
                          <span className="input-group-addon">
                            <i className="zmdi zmdi-lock"></i>
                          </span>
                          <label className="control-label" for="ms-form-pass">Password</label>
                          <input type="password" id="ms-form-pass" className="form-control" /> </div>
                      </div>
                      <div className="row mt-2">
                        <div className="col-md-6">
                          <div className="form-group no-mt">
                            <div className="checkbox">
                              <label>
                                <input type="checkbox" /> Remember Me </label>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <button className="btn btn-raised btn-primary pull-right">Login</button>
                        </div>
                      </div>
                    </fieldset>
                  </form>
                  <div className="text-center">
                    <h3>Login with</h3>
                    <a href="javascript:void(0)" className="wave-effect-light btn btn-raised btn-facebook">
                      <i className="zmdi zmdi-facebook"></i> Facebook</a>
                    <a href="javascript:void(0)" className="wave-effect-light btn btn-raised btn-twitter">
                      <i className="zmdi zmdi-twitter"></i> Twitter</a>
                    <a href="javascript:void(0)" className="wave-effect-light btn btn-raised btn-google">
                      <i className="zmdi zmdi-google"></i> Google</a>
                  </div>
                </div>
                <div role="tabpanel" className="tab-pane fade" id="ms-register-tab">
                  <form>
                    <fieldset>
                      <div className="form-group label-floating">
                        <div className="input-group">
                          <span className="input-group-addon">
                            <i className="zmdi zmdi-account"></i>
                          </span>
                          <label className="control-label" for="ms-form-user">Username</label>
                          <input type="text" id="ms-form-user" className="form-control" /> </div>
                      </div>
                      <div className="form-group label-floating">
                        <div className="input-group">
                          <span className="input-group-addon">
                            <i className="zmdi zmdi-email"></i>
                          </span>
                          <label className="control-label" for="ms-form-email">Email</label>
                          <input type="email" id="ms-form-email" className="form-control" /> </div>
                      </div>
                      <div className="form-group label-floating">
                        <div className="input-group">
                          <span className="input-group-addon">
                            <i className="zmdi zmdi-lock"></i>
                          </span>
                          <label className="control-label" for="ms-form-pass">Password</label>
                          <input type="password" id="ms-form-pass" className="form-control" /> </div>
                      </div>
                      <div className="form-group label-floating">
                        <div className="input-group">
                          <span className="input-group-addon">
                            <i className="zmdi zmdi-lock"></i>
                          </span>
                          <label className="control-label" for="ms-form-pass">Re-type Password</label>
                          <input type="password" id="ms-form-pass" className="form-control" /> </div>
                      </div>
                      <button className="btn btn-raised btn-block btn-primary">Register Now</button>
                    </fieldset>
                  </form>
                </div>
                <div role="tabpanel" className="tab-pane fade" id="ms-recovery-tab">
                  <form>
                  <fieldset>
                    <div className="form-group label-floating">
                      <div className="input-group">
                        <span className="input-group-addon">
                          <i className="zmdi zmdi-account"></i>
                        </span>
                        <label className="control-label" for="ms-form-user">Username</label>
                        <input type="text" id="ms-form-user" className="form-control" /> </div>
                    </div>
                    <div className="form-group label-floating">
                      <div className="input-group">
                        <span className="input-group-addon">
                          <i className="zmdi zmdi-email"></i>
                        </span>
                        <label className="control-label" for="ms-form-email">Email</label>
                        <input type="email" id="ms-form-email" className="form-control" /> </div>
                    </div>
                    <button className="btn btn-raised btn-block btn-primary">Send Password</button>
                  </fieldset>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <header className="ms-header ms-header-primary">
        {/* <!--ms-header-primary--> */}
        <div className="container container-full">
          <div className="ms-title">
            <a href="index.html">
              {/* <!-- <img src="assets/img/demo/logo-header.png" alt="" /> --> */}
              <span className="ms-logo animated zoomInDown animation-delay-5">CH</span>
              <h1 className="animated fadeInRight animation-delay-6">chari<span>TABLE</span> Host</h1>
            </a>
          </div>
          <div className="header-right">
            <div className="share-menu">
              <ul className="share-menu-list">
                <li className="animated fadeInRight animation-delay-3">
                  <a href="javascript:void(0)" className="btn-circle btn-google">
                    <i className="zmdi zmdi-google"></i>
                  </a>
                </li>
                <li className="animated fadeInRight animation-delay-2">
                  <a href="javascript:void(0)" className="btn-circle btn-facebook">
                    <i className="zmdi zmdi-facebook"></i>
                  </a>
                </li>
                <li className="animated fadeInRight animation-delay-1">
                  <a href="javascript:void(0)" className="btn-circle btn-twitter">
                    <i className="zmdi zmdi-twitter"></i>
                  </a>
                </li>
              </ul>
              <a href="javascript:void(0)" className="btn-circle btn-circle-primary animated zoomInDown animation-delay-7">
                <i className="zmdi zmdi-share"></i>
              </a>
            </div>
            <a href="javascript:void(0)" className="btn-circle btn-circle-primary no-focus animated zoomInDown animation-delay-8" data-toggle="modal" data-target="#ms-account-modal">
              <i className="zmdi zmdi-account"></i>
            </a>
            <form className="search-form animated zoomInDown animation-delay-9">
              <input id="search-box" type="text" className="search-input" placeholder="Search..." name="q" />
              <label for="search-box">
                <i className="zmdi zmdi-search"></i>
              </label>
            </form>
            <a href="javascript:void(0)" className="btn-ms-menu btn-circle btn-circle-primary ms-toggle-left animated zoomInDown animation-delay-10">
              <i className="zmdi zmdi-menu"></i>
            </a>
          </div>
        </div>
      </header>
      <nav className="navbar navbar-expand-md  navbar-static ms-navbar ms-navbar-primary">
        <div className="container container-full">
          <div className="navbar-header">
            <a className="navbar-brand" href="index.html">
              {/* <!-- <img src="assets/img/demo/logo-navbar.png" alt="" /> --> */}
              <span className="ms-logo ms-logo-sm">CH</span>
              <span className="ms-title">chari<span>TABLE</span> Host</span>
            </a>
          </div>
          <div className="collapse navbar-collapse" id="ms-navbar">
            <ul className="navbar-nav">
              <li className="nav-item dropdown active">
                <a href="#" className="nav-link dropdown-toggle animated fadeIn animation-delay-7" data-toggle="dropdown" data-hover="dropdown" role="button" aria-haspopup="true" aria-expanded="false" data-name="home">Home
                  <i className="zmdi zmdi-chevron-down"></i>
                </a>
                <ul className="dropdown-menu">
                  <li className="ms-tab-menu">
                    {/* <!-- Nav tabs --> */}
                    <ul className="nav nav-tabs ms-tab-menu-left" role="tablist">
                      <li className="nav-item">
                        <a className="nav-link active" href="#tab-general" data-hover="tab" data-toggle="tab" role="tab">
                          <i className="zmdi zmdi-home"></i> General Purpose</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#tab-landing" data-hover="tab" data-toggle="tab" role="tab">
                          <i className="zmdi zmdi-desktop-windows"></i> Landing pages</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#tab-revolution" data-hover="tab" data-toggle="tab" role="tab">
                          <i className="zmdi zmdi-panorama-horizontal"></i> Slider Revolution</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#tab-shop" data-hover="tab" data-toggle="tab" role="tab">
                          <i className="zmdi zmdi-store"></i> Shop</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#tab-profile" data-hover="tab" data-toggle="tab" role="tab">
                          <i className="zmdi zmdi-account"></i> Professional Profile</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#tab-blog" data-hover="tab" data-toggle="tab" role="tab">
                          <i className="zmdi zmdi-edit"></i> Blog Template</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#tab-magazine" data-hover="tab" data-toggle="tab" role="tab">
                          <i className="zmdi zmdi-flip"></i> Magazine Template</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#tab-app" data-hover="tab" data-toggle="tab" role="tab">
                          <i className="zmdi zmdi-smartphone-iphone"></i> App Pages</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#tab-ads" data-hover="tab" data-toggle="tab" role="tab">
                          <i className="zmdi zmdi-search"></i> classNameified Ads</a>
                      </li>
                    </ul>
                    {/* <!-- Tab panes --> */}
                    <div className="tab-content ms-tab-menu-right">
                      <div className="tab-pane active" id="tab-general" role="tabpanel">
                        <ul className="ms-tab-menu-right-container">
                          <li>
                            <a href="index.html">Default Home</a>
                          </li>
                          <li>
                            <a href="home-generic-2.html">Home Black Slider</a>
                          </li>
                          <li>
                            <a href="home-generic-3.html">Home Browsers Intro</a>
                          </li>
                          <li>
                            <a href="home-generic-4.html">Home Mobile Intro</a>
                          </li>
                          <li>
                            <a href="home-generic-5.html">Home Material Icons</a>
                          </li>
                          <li>
                            <a href="home-generic-6.html">Home Typed Hero</a>
                          </li>
                          <li>
                            <a href="home-generic-7.html">Home Typed Hero 2</a>
                          </li>
                        </ul>
                      </div>
                      <div className="tab-pane" id="tab-landing" role="tabpanel">
                        <ul className="ms-tab-menu-right-container">
                          <li>
                            <a href="home-landing.html">Home Landing Intro</a>
                          </li>
                          <li>
                            <a href="home-landing2.html">Home Landing Intro 2</a>
                          </li>
                          <li>
                            <a href="home-landing4.html">Home Landing Intro 3</a>
                          </li>
                          <li>
                            <a href="home-landing3.html">Home Landing Video</a>
                          </li>
                          <li>
                            <a href="home-cv3.html">Home Profile Landing 1</a>
                          </li>
                          <li>
                            <a href="home-cv4.html">Home Profile Landing 2</a>
                          </li>
                          <li className="disable">
                            <a href="javascript:void(0)">Landing Video 2 (Next Update)</a>
                          </li>
                        </ul>
                      </div>
                      <div className="tab-pane" id="tab-revolution" role="tabpanel">
                        <ul className="ms-tab-menu-right-container">
                          <li>
                            <a className="with-badge" href="home-revolution.html">Home Revolution Devices
                              <span className="badge badge-success pull-right">1.3</span>
                            </a>
                          </li>
                          <li>
                            <a className="with-badge" href="home-revolution2.html">Home Revolution App
                              <span className="badge badge-success pull-right">1.3</span>
                            </a>
                          </li>
                          <li>
                            <a className="with-badge" href="home-revolution3.html">Home Revolution Video
                              <span className="badge badge-success pull-right">1.3</span>
                            </a>
                          </li>
                          <li>
                            <a className="with-badge" href="home-revolution4.html">Home Revolution Idea
                              <span className="badge badge-success pull-right">1.3</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="tab-pane" id="tab-shop" role="tabpanel">
                        <ul className="ms-tab-menu-right-container">
                          <li>
                            <a href="home-shop.html">Home Shop 1</a>
                          </li>
                          <li>
                            <a href="home-shop2.html">Home Shop 2</a>
                          </li>
                          <li className="disable">
                            <a href="javascript:void(0)">Home Shop 3 (Next Update)</a>
                          </li>
                          <li className="disable">
                            <a href="javascript:void(0)">Home Shop 4 (Next Update)</a>
                          </li>
                        </ul>
                      </div>
                      <div className="tab-pane" id="tab-profile" role="tabpanel">
                        <ul className="ms-tab-menu-right-container">
                          <li>
                            <a href="home-cv.html">Home Profile 1</a>
                          </li>
                          <li>
                            <a href="home-cv2.html">Home Profile 2</a>
                          </li>
                          <li>
                            <a href="home-cv3.html">Home Profile Landing 1</a>
                          </li>
                          <li>
                            <a href="home-cv4.html">Home Profile Landing 2</a>
                          </li>
                        </ul>
                      </div>
                      <div className="tab-pane" id="tab-blog" role="tabpanel">
                        <ul className="ms-tab-menu-right-container">
                          <li>
                            <a href="home-blog.html">Home Blog 1</a>
                          </li>
                          <li>
                            <a href="home-blog2.html">Home Blog 2</a>
                          </li>
                          <li className="disable">
                            <a href="javascript:void(0)">Home Blog 3 (Next Update)</a>
                          </li>
                          <li className="disable">
                            <a href="javascript:void(0)">Home Blog 4 (Next Update)</a>
                          </li>
                        </ul>
                      </div>
                      <div className="tab-pane" id="tab-magazine" role="tabpanel">
                        <ul className="ms-tab-menu-right-container">
                          <li>
                            <a href="home-magazine.html">Home Magazine 1</a>
                          </li>
                          <li className="disable">
                            <a href="javascript:void(0)">Magazine 2 (Next Update)</a>
                          </li>
                          <li className="disable">
                            <a href="javascript:void(0)">Magazine 3 (Next Update)</a>
                          </li>
                          <li className="disable">
                            <a href="javascript:void(0)">Magazine 4 (Next Update)</a>
                          </li>
                        </ul>
                      </div>
                      <div className="tab-pane" id="tab-app" role="tabpanel">
                        <ul className="ms-tab-menu-right-container">
                          <li>
                            <a href="home-app.html">Home App 1</a>
                          </li>
                          <li>
                            <a href="home-app2.html">Home App 2</a>
                          </li>
                          <li className="disable">
                            <a href="javascript:void(0)">Home App 3 (Next Update)</a>
                          </li>
                          <li className="disable">
                            <a href="javascript:void(0)">Home App 4 (Next Update)</a>
                          </li>
                        </ul>
                      </div>
                      <div className="tab-pane" id="tab-ads" role="tabpanel">
                        <ul className="ms-tab-menu-right-container">
                          <li>
                            <a href="home-className.html">Home classNameifieds 1</a>
                          </li>
                          <li className="disable">
                            <a href="javascript:void(0)">classNameifieds 2 (Next Update)</a>
                          </li>
                          <li className="disable">
                            <a href="javascript:void(0)">classNameifieds 3 (Next Update)</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a href="#" className="nav-link dropdown-toggle animated fadeIn animation-delay-7" data-toggle="dropdown" data-hover="dropdown" role="button" aria-haspopup="true" aria-expanded="false" data-name="page">Pages
                  <i className="zmdi zmdi-chevron-down"></i>
                </a>
                <ul className="dropdown-menu">
                  <li className="dropdown-submenu">
                    <a href="javascript:void(0)" className="dropdown-item has_children">About us &amp; Team</a>
                    <ul className="dropdown-menu dropdown-menu-left">
                      <li>
                        <a className="dropdown-item" href="page-about.html">About us Option 1</a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="page-about2.html">About us Option 2</a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="page-about3.html">About us Option 3</a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="page-about4.html">About us Option 4</a>
                      </li>
                      <li className="dropdown-divider"></li>
                      <li>
                        <a className="dropdown-item" href="page-team.html">Our Team Option 1</a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="page-team2.html">Our Team Option 2</a>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown-submenu">
                    <a href="javascript:void(0)" className="has_children dropdown-item">Form</a>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="page-contact.html">Contact Option 1</a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="page-contact2.html">Contact Option 2</a>
                      </li>
                      <li className="dropdown-divider"></li>
                      <li>
                        <a className="dropdown-item" href="page-login_register.html">Login &amp; Register</a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="page-login.html">Login Full</a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="page-login2.html">Login Integrated</a>
                      </li>
                      <li className="dropdown-divider"></li>
                      <li>
                        <a className="dropdown-item" href="page-login_register2.html">Register Option 1</a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="page-register2.html">Register Option 2</a>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown-submenu">
                    <a href="javascript:void(0)" className="has_children dropdown-item">Profiles</a>
                    <ul className="dropdown-menu dropdown-menu-left">
                      <li>
                        <a className="dropdown-item" href="page-profile.html">User Profile Option 1</a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="page-profile2.html">User Profile Option 2</a>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown-submenu">
                    <a href="javascript:void(0)" className="has_children dropdown-item">Error</a>
                    <ul className="dropdown-menu dropdown-menu-left">
                      <li>
                        <a className="dropdown-item" href="page-404.html">Error 404 Full Page</a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="page-404_2.html">Error 404 Integrated</a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="page-500.html">Error 500 Full Page</a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="page-500_2.html">Error 500 Integrated</a>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown-submenu">
                    <a href="javascript:void(0)" className="has_children dropdown-item">Bussiness &amp; Products</a>
                    <ul className="dropdown-menu dropdown-menu-left">
                      <li>
                        <a className="dropdown-item" href="page-testimonial.html">Testimonials</a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="page-clients.html">Our Clients</a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="page-product.html">Products</a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="page-services.html">Services</a>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown-submenu">
                    <a href="javascript:void(0)" className="has_children dropdown-item">Pricing</a>
                    <ul className="dropdown-menu dropdown-menu-left">
                      <li>
                        <a className="dropdown-item" href="page-pricing.html">Pricing Box</a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="page-pricing2.html">Pricing Box 2</a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="page-princing_table.html">Pricing Mega Table</a>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown-submenu">
                    <a href="javascript:void(0)" className="has_children dropdown-item">FAQ &amp; Support</a>
                    <ul className="dropdown-menu dropdown-menu-left">
                      <li>
                        <a className="dropdown-item" href="page-support.html">Support Center</a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="page-faq.html">FAQ Option 1</a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="page-faq2.html">FAQ Option 2</a>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown-submenu">
                    <a href="javascript:void(0)" className="has_children dropdown-item">Coming Soon</a>
                    <ul className="dropdown-menu dropdown-menu-left">
                      <li>
                        <a className="dropdown-item" href="page-coming.html">Coming Soon Option 1</a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="page-coming2.html">Coming Soon Option 2</a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="page-coming3.html">Coming Soon Option 3</a>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown-submenu">
                    <a href="javascript:void(0)" className="has_children dropdown-item">Timeline</a>
                    <ul className="dropdown-menu dropdown-menu-left">
                      <li>
                        <a className="dropdown-item" href="page-timeline_left.html">Timeline Left</a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="page-timeline_left2.html">Timeline Left 2</a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="page-timeline.html">Timeline Center</a>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown-submenu">
                    <a href="javascript:void(0)" className="has_children dropdown-item">Email Templates</a>
                    <ul className="dropdown-menu dropdown-menu-left">
                      <li>
                        <a className="dropdown-item with-badge" href="page-email.html">Email Template 1
                          <span className="badge badge-success text-right">1.2</span>
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item with-badge" href="page-email2.html">Email Template 2
                          <span className="badge badge-success text-right">1.2</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a className="dropdown-item" href="page-all.html" className="dropdown-link">All Pages</a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown dropdown-megamenu-container">
                <a href="#" className="nav-link dropdown-toggle animated fadeIn animation-delay-7" data-toggle="dropdown" data-hover="dropdown" role="button" aria-haspopup="true" aria-expanded="false" data-name="component">UI Elements
                  <i className="zmdi zmdi-chevron-down"></i>
                </a>
                <ul className="dropdown-menu dropdown-megamenu animated fadeIn animated-2x">
                  <li className="container">
                    <div className="row">
                      <div className="col-sm-3 megamenu-col">
                        <div className="megamenu-block animated fadeInLeft animated-2x">
                          <h3 className="megamenu-block-title">
                            <i className="fa fa-bold"></i> Bootstrap CSS</h3>
                          <ul className="megamenu-block-list">
                            <li>
                              <a className="withripple" href="component-typography.html">
                                <i className="fa fa-font"></i> Typography</a>
                            </li>
                            <li>
                              <a className="withripple" href="component-headers.html">
                                <i className="fa fa-header"></i> Headers</a>
                            </li>
                            <li>
                              <a className="withripple" href="component-dividers.html">
                                <i className="fa fa-arrows-h"></i> Dividers</a>
                            </li>
                            <li>
                              <a className="withripple" href="component-blockquotes.html">
                                <i className="fa fa-quote-right"></i> Blockquotes</a>
                            </li>
                            <li>
                              <a className="withripple" href="component-forms.html">
                                <i className="fa fa-check-square-o"></i> Forms
                                <span className="badge badge-info pull-right">
                                  <i className="zmdi zmdi-long-arrow-up no-mr"></i> 1.5</span>
                              </a>
                            </li>
                            <li>
                              <a className="withripple" href="component-tables.html">
                                <i className="fa fa-table"></i> Tables</a>
                            </li>
                          </ul>
                        </div>
                        <div className="megamenu-block animated fadeInLeft animated-2x">
                          <h3 className="megamenu-block-title">
                            <i className="fa fa-hand-o-up"></i> Buttons</h3>
                          <ul className="megamenu-block-list">
                            <li>
                              <a className="withripple" href="component-basic-buttons.html">
                                <i className="fa fa-arrow-circle-right"></i> Basic Buttons</a>
                            </li>
                            <li>
                              <a className="withripple" href="component-buttons-components.html">
                                <i className="fa fa-arrow-circle-right"></i> Buttons Components</a>
                            </li>
                            <li>
                              <a className="withripple" href="component-social-buttons.html">
                                <i className="fa fa-arrow-circle-right"></i> Social Buttons
                                <span className="badge badge-info pull-right">
                                  <i className="zmdi zmdi-long-arrow-up no-mr"></i> 1.3</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-sm-3 megamenu-col">
                        <div className="megamenu-block animated fadeInLeft animated-2x">
                          <h3 className="megamenu-block-title">
                            <i className="fa fa-list-alt"></i> Basic Components</h3>
                          <ul className="megamenu-block-list">
                            <li>
                              <a className="withripple" href="component-panels.html">
                                <i className="zmdi zmdi-view-agenda"></i> Panels</a>
                            </li>
                            <li>
                              <a className="withripple" href="component-alerts.html">
                                <i className="zmdi zmdi-info"></i> Alerts &amp; Wells</a>
                            </li>
                            <li>
                              <a className="withripple" href="component-badges.html">
                                <i className="zmdi zmdi-tag"></i> Badges &amp; Badges Pills</a>
                            </li>
                            <li>
                              <a className="withripple" href="component-lists.html">
                                <i className="zmdi zmdi-view-list"></i> Lists</a>
                            </li>
                            <li>
                              <a className="withripple" href="component-thumbnails.html">
                                <i className="zmdi zmdi-image-o"></i> Thumbnails</a>
                            </li>
                            <li>
                              <a className="withripple" href="component-carousels.html">
                                <i className="zmdi zmdi-view-carousel"></i> Carousels</a>
                            </li>
                            <li>
                              <a className="withripple" href="component-modals.html">
                                <i className="zmdi zmdi-window-maximize"></i> Modals</a>
                            </li>
                            <li>
                              <a className="withripple" href="component-tooltip.html">
                                <i className="zmdi zmdi-pin-help"></i> Tooltip &amp; Popover</a>
                            </li>
                            <li>
                              <a className="withripple" href="component-progress-bars.html">
                                <i className="zmdi zmdi-view-headline"></i> Progress Bars</a>
                            </li>
                            <li>
                              <a className="withripple" href="component-pagination.html">
                                <i className="zmdi zmdi-n-2-square"></i> Pagination</a>
                            </li>
                            <li>
                              <a className="withripple" href="component-dropdowns.html">
                                <i className="fa fa-info"></i> Dropdowns</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-sm-3 megamenu-col">
                        <div className="megamenu-block animated fadeInRight animated-2x">
                          <h3 className="megamenu-block-title">
                            <i className="zmdi zmdi-folder-star-alt"></i> Extra Components</h3>
                          <ul className="megamenu-block-list">
                            <li>
                              <a className="withripple" href="component-cards.html">
                                <i className="zmdi zmdi-card-membership"></i> Cards</a>
                            </li>
                            <li>
                              <a className="withripple" href="component-composite-cards.html">
                                <i className="zmdi zmdi-card-giftcard"></i> Composite Cards</a>
                            </li>
                            <li>
                              <a className="withripple" href="component-counters.html">
                                <i className="zmdi zmdi-n-6-square"></i> Counters</a>
                            </li>
                            <li>
                              <a className="withripple" href="component-audio-video.html">
                                <i className="zmdi zmdi-play-circle"></i> Audio &amp; Video</a>
                            </li>
                            <li>
                              <a className="withripple" href="component-masonry.html">
                                <i className="zmdi zmdi-view-dashboard"></i> Masonry Layer</a>
                            </li>
                            <li>
                              <a className="withripple" href="component-snackbar.html">
                                <i className="zmdi zmdi-notifications-active"></i> SnackBar
                                <span className="badge badge-success pull-right">1.2</span>
                              </a>
                            </li>
                            <li>
                              <a className="withripple" href="component-lightbox.html">
                                <i className="zmdi zmdi-collection-image-o"></i> Lightbox
                                <span className="badge badge-success pull-right">1.5</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="megamenu-block animated fadeInRight animated-2x">
                          <h3 className="megamenu-block-title">
                            <i className="zmdi zmdi-tab"></i> Collapses &amp; Tabs</h3>
                          <ul className="megamenu-block-list">
                            <li>
                              <a className="withripple" href="component-collapses.html">
                                <i className="zmdi zmdi-view-day"></i> Collapses</a>
                            </li>
                            <li>
                              <a className="withripple" href="component-horizontal-tabs.html">
                                <i className="zmdi zmdi-tab"></i> Horitzontal Tabs</a>
                            </li>
                            <li>
                              <a className="withripple" href="component-vertical-tabs.html">
                                <i className="zmdi zmdi-menu"></i> Vertical Tabs</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-sm-3 megamenu-col">
                        <div className="megamenu-block animated fadeInRight animated-2x">
                          <h3 className="megamenu-block-title">
                            <i className="fa fa-briefcase"></i> Icons</h3>
                          <ul className="megamenu-block-list">
                            <li>
                              <a className="withripple" href="component-icons-basic.html">
                                <i className="fa fa-arrow-circle-right"></i> Basic Icons</a>
                            </li>
                            <li>
                              <a className="withripple" href="component-icons-fontawesome.html">
                                <i className="fa fa-arrow-circle-right"></i> Font Awesome</a>
                            </li>
                            <li>
                              <a className="withripple" href="component-icons-iconic.html">
                                <i className="fa fa-arrow-circle-right"></i> Material Design Iconic</a>
                            </li>
                            <li>
                              <a className="withripple" href="component-icons-glyphicons.html">
                                <i className="fa fa-arrow-circle-right"></i> Glyphicons</a>
                            </li>
                            <li>
                              <a className="withripple" href="component-icons-ionicons.html">
                                <i className="fa fa-arrow-circle-right"></i> Ionicons
                                <span className="badge badge-success pull-right">2.0</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="megamenu-block animated fadeInRight animated-2x">
                          <h3 className="megamenu-block-title">
                            <i className="fa fa-area-chart"></i> Charts</h3>
                          <ul className="megamenu-block-list">
                            <li>
                              <a className="withripple" href="component-charts-circle.html">
                                <i className="zmdi zmdi-chart-donut"></i> Circle Charts</a>
                            </li>
                            <li>
                              <a className="withripple" href="component-charts-bar.html">
                                <i className="fa fa-bar-chart"></i> Bars Charts</a>
                            </li>
                            <li>
                              <a className="withripple" href="component-charts-line.html">
                                <i className="fa fa-line-chart"></i> Line Charts</a>
                            </li>
                            <li>
                              <a className="withripple" href="component-charts-more.html">
                                <i className="fa fa-pie-chart"></i> More Charts</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a href="#" className="nav-link dropdown-toggle animated fadeIn animation-delay-7" data-toggle="dropdown" data-hover="dropdown" role="button" aria-haspopup="true" aria-expanded="false" data-name="blog">Blog
                  <i className="zmdi zmdi-chevron-down"></i>
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="blog-sidebar.html">
                      <i className="zmdi zmdi-view-compact"></i> Blog Sidebar 1</a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="blog-sidebar2.html">
                      <i className="zmdi zmdi-view-compact"></i> Blog Sidebar 2</a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="blog-masonry.html">
                      <i className="zmdi zmdi-view-dashboard"></i> Blog Masonry 1</a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="blog-masonry2.html">
                      <i className="zmdi zmdi-view-dashboard"></i> Blog Masonry 2</a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="blog-full.html">
                      <i className="zmdi zmdi zmdi-view-stream"></i> Blog Full Page 1</a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="blog-full2.html">
                      <i className="zmdi zmdi zmdi-view-stream"></i> Blog Full Page 2</a>
                  </li>
                  <li className="dropdown-divider"></li>
                  <li>
                    <a className="dropdown-item" href="blog-post.html">
                      <i className="zmdi zmdi-file-text"></i> Blog Post 1</a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="blog-post2.html">
                      <i className="zmdi zmdi-file-text"></i> Blog Post 2</a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a href="#" className="nav-link dropdown-toggle animated fadeIn animation-delay-8" data-toggle="dropdown" data-hover="dropdown" role="button" aria-haspopup="true" aria-expanded="false" data-name="portfolio">Portfolio
                  <i className="zmdi zmdi-chevron-down"></i>
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="portfolio-filters_sidebar.html">
                      <i className="zmdi zmdi-view-compact"></i> Portfolio Sidebar Filters</a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="portfolio-filters_topbar.html">
                      <i className="zmdi zmdi-view-agenda"></i> Portfolio Topbar Filters</a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="portfolio-filters_sidebar_fluid.html">
                      <i className="zmdi zmdi-view-compact"></i> Portfolio Sidebar Fluid</a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="portfolio-filters_topbar_fluid.html">
                      <i className="zmdi zmdi-view-agenda"></i> Portfolio Topbar Fluid</a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="portfolio-cards.html">
                      <i className="zmdi zmdi-card-membership"></i> Porfolio Cards</a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="portfolio-masonry.html">
                      <i className="zmdi zmdi-view-dashboard"></i> Porfolio Masonry</a>
                  </li>
                  <li>
                    <a className="dropdown-item with-badge" href="portfolio-gallery.html">
                      <i className="zmdi zmdi-apps"></i> Picture Gallery
                      <span className="badge badge-success text-right">1.5</span>
                    </a>
                  </li>
                  <li className="dropdown-divider"></li>
                  <li>
                    <a className="dropdown-item" href="portfolio-item.html">
                      <i className="zmdi zmdi-collection-item-1"></i> Portfolio Item 1</a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="portfolio-item2.html">
                      <i className="zmdi zmdi-collection-item-2"></i> Portfolio Item 2</a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a href="#" className="nav-link dropdown-toggle animated fadeIn animation-delay-9" data-toggle="dropdown" data-hover="dropdown" role="button" aria-haspopup="true" aria-expanded="false" data-name="ecommerce">E-Commerce
                  <i className="zmdi zmdi-chevron-down"></i>
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="ecommerce-filters.html">E-Commerce Sidebar</a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="ecommerce-filters-full.html">E-Commerce Sidebar Full</a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="ecommerce-filters-full2.html">E-Commerce Topbar Full</a>
                  </li>
                  <li className="dropdown-divider"></li>
                  <li>
                    <a className="dropdown-item" href="ecommerce-item.html">E-Commerce Item</a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="ecommerce-cart.html">E-Commerce Cart</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <a href="javascript:void(0)" className="ms-toggle-left btn-navbar-menu">
            <i className="zmdi zmdi-menu"></i>
          </a>
        </div>
        {/* // <!-- container --> */}
      </nav>
      <div className="material-background"></div>
      <div className="container">
        <div className="card wow slideInUp">
          <div className="card-block-big">
            <h1 className="color-primary">About Us</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus sequi illo labore eaque eveniet porro in, molestias deleniti corporis ea repellendus
              <strong>laborum dolores veniam nam</strong> mollitia culpa accusamus non voluptates corrupti? A inventore et veniam dignissimos, animi suscipit magnam nihil sed repellendus placeat eveniet vitae est impedit alias aliquid eius?</p>
            <p>Perferendis, blanditiis unde fugiat voluptas molestias velit asperiores rerum ipsam animi eum temporibus at numquam, nobis voluptates minus maxime cum obcaecati! Tenetur sit corporis laudantium inventore officia officiis odio repellat dolore
              quos
              <a href="#">repudiandae voluptas ad facere</a>, amet placeat animi voluptatem distinctio beatae.</p>
          </div>
          <img src="assets/img/Table_2.jpg" alt="" className="img-fluid" />
          <div className="card-block-big">
            <h2 className="color-primary">Vision</h2>
            <p>Officia, sapiente consectetur id, similique enim aliquam eligendi. Fugiat quos libero quis adipisci assumenda molestias perspiciatis provident, non soluta numquam quasi iste asperiores quibusdam fuga quaerat excepturi amet porro nam, architecto
              consequatur qui sed ratione! Tempore asperiores omnis sit totam harum fugit provident magnam, eveniet quis optio? Doloremque, porro dolorum.</p>
            <p className="lead">Lorem ipsum dolor sit amet consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
            <p>Est deserunt expedita saepe minima voluptatum velit. Fugiat rerum dolor sed dolorum sunt possimus eaque magni reiciendis harum, accusantium maiores animi odit eligendi ipsam. Voluptatum architecto nisi repellat sint, nulla tenetur obcaecati
              excepturi provident at, autem, hic expedita ex totam porro sit soluta maiores fugit nam accusantium odit minima magni.</p>
          </div>
          <div className="bg-info">
            <div className="card-block-big">
              <h2 className="color-white text-center mb-4">Some Achievements</h2>
              <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="card card-block text-center wow zoomInUp animation-delay-2">
                    <h2 className="counter color-info">450</h2>
                    <i className="fa fa-4x fa-coffee color-info"></i>
                    <p className="mt-2 no-mb lead small-caps color-info">cups of coffee</p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="card card-block text-center wow zoomInUp animation-delay-5">
                    <h2 className="counter color-info">64</h2>
                    <i className="fa fa-4x fa-briefcase color-info"></i>
                    <p className="mt-2 no-mb lead small-caps color-info">projects done</p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="card card-block text-center wow zoomInUp animation-delay-4">
                    <h2 className="counter color-info">600</h2>
                    <i className="fa fa-4x fa-comments-o color-info"></i>
                    <p className="mt-2 no-mb lead small-caps color-info">comments</p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="card card-block text-center wow zoomInUp animation-delay-3">
                    <h2 className="counter color-info">3500</h2>
                    <i className="fa fa-4x fa-group color-info"></i>
                    <p className="mt-2 no-mb lead small-caps color-info">happy clients</p>
                  </div>
                </div>
              </div>
              <p className="lead lead-lg text-center mt-4">These numbers are only possible thanks to you.
                <br /> Thank you for growing with us!</p>
            </div>
          </div>
          <div className="card-block-big">
            <p>Totam distinctio laboriosam sapiente, similique aspernatur, eveniet harum blanditiis non labore voluptatibus id perspiciatis impedit nam cum quaerat accusamus fugiat maiores explicabo sint libero esse, tempora autem. Neque non, a nobis impedit
              eveniet, minus tenetur atque quam itaque modi delectus doloremque sit quisquam consequuntur cumque fuga est exercitationem, repudiandae? Nostrum, excepturi est voluptatem possimus iusto itaque nulla eos. Mollitia impedit sequi quod dolorem
              eos, ducimus nisi adipisci pariatur a tenetur, neque! Dolorum deserunt harum alias?</p>
            <p>Vitae velit quia minus nostrum blanditiis explicabo, molestiae facere dolor neque unde laborum voluptatibus impedit natus, et ut eligendi perferendis maxime nobis maiores quasi in. Quasi, modi, tempore, incidunt vel nulla vitae cumque dolores
              asperiores officiis itaque eius laboriosam impedit temporibus. Nemo odio facilis consectetur, numquam aliquid aperiam non maiores iure accusantium deserunt repellat, at ab fugit culpa, voluptas aspernatur placeat praesentium commodi neque.
              Placeat magni aspernatur nesciunt cupiditate nam inventore sint quidem sit magnam.</p>
            <p>Ipsum earum tempore doloribus itaque illo voluptatum amet, blanditiis ex laborum iure dolorem nesciunt eos quod optio quisquam iste necessitatibus alias eum accusantium tempora ab aspernatur perspiciatis minus? Eaque nobis nostrum ex vitae.
              Sunt aliquid numquam voluptates rerum deserunt, officiis quasi, enim ab officia, quo, nobis eius repudiandae! Reiciendis ex atque, suscipit odit saepe molestias. Animi consectetur accusamus harum rem laborum magnam incidunt corrupti accusantium
              assumenda dolorum sequi, ipsum, atque dolores quos ea minima totam?</p>
          </div>
          <div data-type="vimeo" data-video-id="30555090"></div>
        </div>
      </div>
      {/* // <!-- container --> */}
      <aside className="ms-footbar">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 ms-footer-col">
              <div className="ms-footbar-block">
                <h3 className="ms-footbar-title">Sitemap</h3>
                <ul className="list-unstyled ms-icon-list three_cols">
                  <li>
                    <a href="index.html">
                      <i className="zmdi zmdi-home"></i> Home</a>
                  </li>
                  <li>
                    <a href="page-blog.html">
                      <i className="zmdi zmdi-edit"></i> Blog</a>
                  </li>
                  <li>
                    <a href="page-blog.html">
                      <i className="zmdi zmdi-image-o"></i> Portafolio</a>
                  </li>
                  <li>
                    <a href="portfolio-filters_sidebar.html">
                      <i className="zmdi zmdi-case"></i> Works</a>
                  </li>
                  <li>
                    <a href="page-timeline_left2.html">
                      <i className="zmdi zmdi-time"></i> Timeline</a>
                  </li>
                  <li>
                    <a href="page-pricing.html">
                      <i className="zmdi zmdi-money"></i> Pricing</a>
                  </li>
                  <li>
                    <a href="page-about.html">
                      <i className="zmdi zmdi-favorite-outline"></i> About Us</a>
                  </li>
                  <li>
                    <a href="page-team2.html">
                      <i className="zmdi zmdi-accounts"></i> Our Team</a>
                  </li>
                  <li>
                    <a href="page-services.html">
                      <i className="zmdi zmdi-face"></i> Services</a>
                  </li>
                  <li>
                    <a href="page-faq2.html">
                      <i className="zmdi zmdi-help"></i> FAQ</a>
                  </li>
                  <li>
                    <a href="page-login2.html">
                      <i className="zmdi zmdi-lock"></i> Login</a>
                  </li>
                  <li>
                    <a href="page-contact.html">
                      <i className="zmdi zmdi-email"></i> Contact</a>
                  </li>
                </ul>
              </div>
              <div className="ms-footbar-block">
                <h3 className="ms-footbar-title">Subscribe</h3>
                <p className="">Lorem ipsum Amet fugiat elit nisi anim mollit minim labore ut esse Duis ullamco ad dolor veniam velit.</p>
                <form>
                  <div className="form-group label-floating mt-2 mb-1">
                    <div className="input-group ms-input-subscribe">
                      <label className="control-label" for="ms-subscribe">
                        <i className="zmdi zmdi-email"></i> Email Adress</label>
                      <input type="email" id="ms-subscribe" className="form-control" /> </div>
                  </div>
                  <button className="ms-subscribre-btn" type="button">Subscribe</button>
                </form>
              </div>
            </div>
            <div className="col-lg-5 col-md-7 ms-footer-col ms-footer-alt-color">
              <div className="ms-footbar-block">
                <h3 className="ms-footbar-title text-center mb-2">Last Articles</h3>
                <div className="ms-footer-media">
                  <div className="media">
                    <div className="media-left media-middle">
                      <a href="javascript:void(0)">
                        <img className="media-object media-object-circle" src="assets/img/demo/p75.jpg" alt="..." /> </a>
                    </div>
                    <div className="media-body">
                      <h4 className="media-heading">
                        <a href="javascript:void(0)">Lorem ipsum dolor sit expedita cumque amet consectetur adipisicing repellat</a>
                      </h4>
                      <div className="media-footer">
                        <span>
                          <i className="zmdi zmdi-time color-info-light"></i> August 18, 2016</span>
                        <span>
                          <i className="zmdi zmdi-folder-outline color-warning-light"></i>
                          <a href="javascript:void(0)">Design</a>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="media">
                    <div className="media-left media-middle">
                      <a href="javascript:void(0)">
                        <img className="media-object media-object-circle" src="assets/img/demo/p75.jpg" alt="..." /> </a>
                    </div>
                    <div className="media-body">
                      <h4 className="media-heading">
                        <a href="javascript:void(0)">Labore ut esse Duis consectetur expedita cumque ullamco ad dolor veniam velit</a>
                      </h4>
                      <div className="media-footer">
                        <span>
                          <i className="zmdi zmdi-time color-info-light"></i> August 18, 2016</span>
                        <span>
                          <i className="zmdi zmdi-folder-outline color-warning-light"></i>
                          <a href="javascript:void(0)">News</a>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="media">
                    <div className="media-left media-middle">
                      <a href="javascript:void(0)">
                        <img className="media-object media-object-circle" src="assets/img/demo/p75.jpg" alt="..." /> </a>
                    </div>
                    <div className="media-body">
                      <h4 className="media-heading">
                        <a href="javascript:void(0)">voluptates deserunt ducimus expedita cumque quaerat molestiae labore</a>
                      </h4>
                      <div className="media-footer">
                        <span>
                          <i className="zmdi zmdi-time color-info-light"></i> August 18, 2016</span>
                        <span>
                          <i className="zmdi zmdi-folder-outline color-warning-light"></i>
                          <a href="javascript:void(0)">Productivity</a>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-5 ms-footer-col ms-footer-text-right">
              <div className="ms-footbar-block">
                <div className="ms-footbar-title">
                  <span className="ms-logo ms-logo-white ms-logo-sm mr-1">CH</span>
                  <h3 className="no-m ms-site-title">chari<span>TABLE</span> Host</h3>
                </div>
                <address className="no-mb">
                  <p>
                    <i className="color-danger-light zmdi zmdi-pin mr-1"></i> 795 Folsom Ave, Suite 600</p>
                  <p>
                    <i className="color-warning-light zmdi zmdi-map mr-1"></i> San Francisco, CA 94107</p>
                  <p>
                    <i className="color-info-light zmdi zmdi-email mr-1"></i>
                    <a href="mailto:joe@example.com">example@domain.com</a>
                  </p>
                  <p>
                    <i className="color-royal-light zmdi zmdi-phone mr-1"></i>+34 123 456 7890 </p>
                  <p>
                    <i className="color-success-light fa fa-fax mr-1"></i>+34 123 456 7890 </p>
                </address>
              </div>
              <div className="ms-footbar-block">
                <h3 className="ms-footbar-title">Social Media</h3>
                <div className="ms-footbar-social">
                  <a href="javascript:void(0)" className="btn-circle btn-facebook">
                    <i className="zmdi zmdi-facebook"></i>
                  </a>
                  <a href="javascript:void(0)" className="btn-circle btn-twitter">
                    <i className="zmdi zmdi-twitter"></i>
                  </a>
                  <a href="javascript:void(0)" className="btn-circle btn-youtube">
                    <i className="zmdi zmdi-youtube-play"></i>
                  </a>
                  <br />
                  <a href="javascript:void(0)" className="btn-circle btn-google">
                    <i className="zmdi zmdi-google"></i>
                  </a>
                  <a href="javascript:void(0)" className="btn-circle btn-instagram">
                    <i className="zmdi zmdi-instagram"></i>
                  </a>
                  <a href="javascript:void(0)" className="btn-circle btn-github">
                    <i className="zmdi zmdi-github"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </aside>
      <footer className="ms-footer">
        <div className="container">
          <p>Copyright &copy; Jubatus Software 2017</p>
        </div>
      </footer>
      <div className="btn-back-top">
        <a href="#" data-scroll id="back-top" className="btn-circle btn-circle-primary btn-circle-sm btn-circle-raised ">
          <i className="zmdi zmdi-long-arrow-up"></i>
        </a>
      </div>
    </div>
    {/* // <!-- ms-site-container --> */}
    <div className="ms-slidebar sb-slidebar sb-left sb-style-overlay" id="ms-slidebar">
      <div className="sb-slidebar-container">
        <header className="ms-slidebar-header">
          <div className="ms-slidebar-login">
            <a href="javascript:void(0)" className="withripple">
              <i className="zmdi zmdi-account"></i> Login</a>
            <a href="javascript:void(0)" className="withripple">
              <i className="zmdi zmdi-account-add"></i> Register</a>
          </div>
          <div className="ms-slidebar-title">
            <form className="search-form">
              <input id="search-box-slidebar" type="text" className="search-input" placeholder="Search..." name="q" />
              <label for="search-box-slidebar">
                <i className="zmdi zmdi-search"></i>
              </label>
            </form>
            <div className="ms-slidebar-t">
              <span className="ms-logo ms-logo-sm">CH</span>
              <h3>chari<span>TABLE</span> Host</h3>
            </div>
          </div>
        </header>
        <ul className="ms-slidebar-menu" id="slidebar-menu" role="tablist" aria-multiselectable="true">
          <li className="card" role="tab" id="sch1">
            <a className="collapsed" role="button" data-toggle="collapse" data-parent="#slidebar-menu" href="#sc1" aria-expanded="false" aria-controls="sc1">
              <i className="zmdi zmdi-home"></i> Home </a>
            <ul id="sc1" className="card-collapse collapse" role="tabpanel" aria-labelledby="sch1">
              <li>
                <a href="index.html">Default Home</a>
              </li>
              <li>
                <a href="home-generic-2.html">Home Black Slider</a>
              </li>
              <li>
                <a href="home-landing.html">Home Landing Intro</a>
              </li>
              <li>
                <a href="home-landing3.html">Home Landing Video</a>
              </li>
              <li>
                <a href="home-shop.html">Home Shop 1</a>
              </li>
            </ul>
          </li>
          <li className="card" role="tab" id="sch2">
            <a className="collapsed" role="button" data-toggle="collapse" data-parent="#slidebar-menu" href="#sc2" aria-expanded="false" aria-controls="sc2">
              <i className="zmdi zmdi-desktop-mac"></i> Pages </a>
            <ul id="sc2" className="card-collapse collapse" role="tabpanel" aria-labelledby="sch2">
              <li>
                <a href="page-about.html">About US</a>
              </li>
              <li>
                <a href="page-team.html">Our Team</a>
              </li>
              <li>
                <a href="page-product.html">Products</a>
              </li>
              <li>
                <a href="page-services.html">Services</a>
              </li>
              <li>
                <a href="page-faq.html">FAQ</a>
              </li>
              <li>
                <a href="page-timeline_left.html">Timeline</a>
              </li>
              <li>
                <a href="page-contact.html">Contact Option</a>
              </li>
              <li>
                <a href="page-login.html">Login</a>
              </li>
              <li>
                <a href="page-pricing.html">Pricing</a>
              </li>
              <li>
                <a href="page-coming.html">Coming Soon</a>
              </li>
            </ul>
          </li>
          <li className="card" role="tab" id="sch4">
            <a className="collapsed" role="button" data-toggle="collapse" data-parent="#slidebar-menu" href="#sc4" aria-expanded="false" aria-controls="sc4">
              <i className="zmdi zmdi-edit"></i> Blog </a>
            <ul id="sc4" className="card-collapse collapse" role="tabpanel" aria-labelledby="sch4">
              <li>
                <a href="blog-sidebar.html">Blog Sidebar 1</a>
              </li>
              <li>
                <a href="blog-sidebar2.html">Blog Sidebar 2</a>
              </li>
              <li>
                <a href="blog-masonry.html">Blog Masonry 1</a>
              </li>
              <li>
                <a href="blog-masonry2.html">Blog Masonry 2</a>
              </li>
              <li>
                <a href="blog-full.html">Blog Full Page 1</a>
              </li>
              <li>
                <a href="blog-full2.html">Blog Full Page 2</a>
              </li>
              <li>
                <a href="blog-post.html">Blog Post 1</a>
              </li>
              <li>
                <a href="blog-post2.html">Blog Post 2</a>
              </li>
            </ul>
          </li>
          <li className="card" role="tab" id="sch5">
            <a className="collapsed" role="button" data-toggle="collapse" data-parent="#slidebar-menu" href="#sc5" aria-expanded="false" aria-controls="sc5">
              <i className="zmdi zmdi-shopping-basket"></i> E-Commerce </a>
            <ul id="sc5" className="card-collapse collapse" role="tabpanel" aria-labelledby="sch5">
              <li>
                <a href="ecommerce-filters.html">E-Commerce Sidebar</a>
              </li>
              <li>
                <a href="ecommerce-filters-full.html">E-Commerce Sidebar Full</a>
              </li>
              <li>
                <a href="ecommerce-filters-full2.html">E-Commerce Topbar Full</a>
              </li>
              <li>
                <a href="ecommerce-item.html">E-Commerce Item</a>
              </li>
              <li>
                <a href="ecommerce-cart.html">E-Commerce Cart</a>
              </li>
            </ul>
          </li>
          <li className="card" role="tab" id="sch6">
            <a className="collapsed" role="button" data-toggle="collapse" data-parent="#slidebar-menu" href="#sc6" aria-expanded="false" aria-controls="sc6">
              <i className="zmdi zmdi-collection-image-o"></i> Portfolio </a>
            <ul id="sc6" className="card-collapse collapse" role="tabpanel" aria-labelledby="sch6">
              <li>
                <a href="portfolio-filters_sidebar.html">Portfolio Sidebar Filters</a>
              </li>
              <li>
                <a href="portfolio-filters_topbar.html">Portfolio Topbar Filters</a>
              </li>
              <li>
                <a href="portfolio-filters_sidebar_fluid.html">Portfolio Sidebar Fluid</a>
              </li>
              <li>
                <a href="portfolio-filters_topbar_fluid.html">Portfolio Topbar Fluid</a>
              </li>
              <li>
                <a href="portfolio-cards.html">Porfolio Cards</a>
              </li>
              <li>
                <a href="portfolio-masonry.html">Porfolio Masonry</a>
              </li>
              <li>
                <a href="portfolio-item.html">Portfolio Item 1</a>
              </li>
              <li>
                <a href="portfolio-item2.html">Portfolio Item 2</a>
              </li>
            </ul>
          </li>
          <li>
            <a className="link" href="component-typography.html">
              <i className="zmdi zmdi-view-compact"></i> UI Elements</a>
          </li>
          <li>
            <a className="link" href="page-all.html">
              <i className="zmdi zmdi-link"></i> All Pages</a>
          </li>
        </ul>
        <div className="ms-slidebar-social ms-slidebar-block">
          <h4 className="ms-slidebar-block-title">Social Links</h4>
          <div className="ms-slidebar-social">
            <a href="javascript:void(0)" className="btn-circle btn-circle-raised btn-facebook">
              <i className="zmdi zmdi-facebook"></i>
              <span className="badge-pill badge-pill-pink">12</span>
              <div className="ripple-container"></div>
            </a>
            <a href="javascript:void(0)" className="btn-circle btn-circle-raised btn-twitter">
              <i className="zmdi zmdi-twitter"></i>
              <span className="badge-pill badge-pill-pink">4</span>
              <div className="ripple-container"></div>
            </a>
            <a href="javascript:void(0)" className="btn-circle btn-circle-raised btn-google">
              <i className="zmdi zmdi-google"></i>
              <div className="ripple-container"></div>
            </a>
            <a href="javascript:void(0)" className="btn-circle btn-circle-raised btn-instagram">
              <i className="zmdi zmdi-instagram"></i>
              <div className="ripple-container"></div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
    );
  }
}

export default LandingPageUpdated;
