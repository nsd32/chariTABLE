import React, { Component } from 'react';
import '../styles/Registration.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import axios from 'axios';

class Account extends Component {
  state={
    companyInfo: this.props.location.state.companyInfo
  }

  componentDidMount() {
    console.log('From Event Page (Company Info): ', this.state);
    console.log('Company Name: ', this.state.companyInfo[0].companyName);
  }


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

    <Navbar />

      <div className="ms-hero-page-override ms-hero-img-coffee ms-bg-fixed ms-hero-bg-primary">
        <div className="container">
          <div className="text-center mt-2">
            {/* <img src="assets/img/demo/avatar1.jpg" alt="..." className="ms-avatar-hero animated zoomIn animation-delay-7" /> */}
            <h1 className="color-white mt-4 animated fadeInUp animation-delay-10">{this.state.companyInfo[0].companyName}</h1>
            <h3 className="color-medium no-mb animated fadeInUp animation-delay-10"></h3>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="card card-hero card-primary animated fadeInUp animation-delay-7">
          <div className="card-header-100 bg-primary-dark">
            <div className="row justify-content-center">
              <div className="col col-md-2">
                <div className="text-center">
                  <h3>
                    <strong>142</strong>
                  </h3> Events </div>
              </div>
              <div className="col col-md-2">
                <div className="text-center">
                  <h3>
                    <strong>75</strong>
                  </h3> TableHosts </div>
              </div>
              <div className="col col-md-2">
                <div className="text-center">
                  <h3>
                    <strong>96</strong>
                  </h3> Guests </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="card-block">
                <h2 className="color-primary no-mb">Personal Information</h2>
              </div>
              <table className="table table-no-border table-striped">
                <tbody>
                  <tr style={{width: "100%"}}>
                    <th style={{width: "50%"}}>
                      <i className="zmdi zmdi-account mr-1 color-royal"></i> User Name</th>
                    <td>
                      <input value={this.state.companyInfo[0].username} />
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <i className="zmdi zmdi-store mr-1 color-warning"></i> Company Name</th>
                    <td>
                      <input value={this.state.companyInfo[0].companyName} />
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <i className="zmdi zmdi-email mr-1 color-primary"></i> Email</th>
                    <td>
                      <input value={this.state.companyInfo[0].email} />
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <i className="zmdi zmdi-link mr-1 color-danger"></i> Website</th>
                    <td>
                      <input value={this.state.companyInfo[0].website} />
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <i className="zmdi zmdi-pin mr-1 color-danger"></i> Street Address Line 1</th>
                    <td>
                      <input value={this.state.companyInfo[0].addressLine1} />
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <i className="zmdi zmdi-pin mr-1 color-danger"></i> Street Address Line 2</th>
                    <td>
                      <input value={this.state.companyInfo[0].addressLine2} />
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <i className="zmdi zmdi-map mr-1 color-danger"></i> City</th>
                    <td>
                      <input value={this.state.companyInfo[0].city} />
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <i className="zmdi zmdi-map mr-1 color-danger"></i> State</th>
                    <td>
                      <input value={this.state.companyInfo[0].state} />
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <i className="zmdi zmdi-map mr-1 color-danger"></i> Zip Code</th>
                    <td>
                      <input value={this.state.companyInfo[0].zipCode} />
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <i className="zmdi zmdi-phone mr-1 color-danger"></i> Phone Number</th>
                    <td>
                      <input value={this.state.companyInfo[0].phoneNumber} />
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <i className="zmdi zmdi-calendar mr-1 color-info"></i> Member Since</th>
                    <td>{this.state.companyInfo[0].createdOn}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- container --> */}
      <Footer />
      <div className="btn-back-top">
        <a href="#" data-scroll id="back-top" className="btn-circle btn-circle-primary btn-circle-sm btn-circle-raised ">
          <i className="zmdi zmdi-long-arrow-up"></i>
        </a>
      </div>
    </div>
    {/* <!-- ms-site-container --> */}
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
            {/* <form className="search-form">
              <input id="search-box-slidebar" type="text" className="search-input" placeholder="Search..." name="q" />
              <label htmlFor="search-box-slidebar">
                <i className="zmdi zmdi-search"></i>
              </label>
            </form> */}
            <div className="ms-slidebar-t">
              <span className="ms-logo ms-logo-sm">CH</span>
              <h3>chari<span>Table</span> Host</h3>
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

export default Account;
