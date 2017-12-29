import React, { Component } from 'react';
import '../styles/Registration.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import axios from 'axios';

class Account extends Component {
  state={

  }

  componentWillMount() {
    this.setState({
      companyName: this.props.location.state.companyInfo[0].companyName,
      username: this.props.location.state.companyInfo[0].username,
      addressLine1: this.props.location.state.companyInfo[0].addressLine1,
      addressLine2: this.props.location.state.companyInfo[0].addressLine2,
      city: this.props.location.state.companyInfo[0].city,
      state: this.props.location.state.companyInfo[0].state,
      zipCode: this.props.location.state.companyInfo[0].zipCode,
      phoneNumber: this.props.location.state.companyInfo[0].phoneNumber,
      website: this.props.location.state.companyInfo[0].website,
      email: this.props.location.state.companyInfo[0].email,
      createdOn: this.props.location.state.companyInfo[0].createdOn,
      companyID: this.props.location.state.companyInfo[0]._id

    });
    console.log(this.state);

    // let companyID =  this.state.companyInfo._id;
    // console.log('Account Company ID: ', companyID);
    // axios.get(`/api/account/${companyID}`)
    //   .then((response) => {
    //
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  }

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
    console.log(this.state);
  }

  handleAccountUpdateChanges = (event) => {
    event.preventDefault();
    console.log('Account Update Changes clilcked');
    console.log('Company Info to be updated: ', this.state);
    let companyID =  this.state.companyID;
    console.log('Account Company ID: ', companyID);
    axios.post(`/api/companies/${companyID}`, {
      companyName: this.state.companyName,
      addressLine1: this.state.addressLine1,
      addressLine2: this.state.addressLine2,
      city: this.state.city,
      state: this.state.state,
      zipCode: this.state.zipCode,
      phoneNumber: this.state.phoneNumber,
      website: this.state.website,
      username: this.state.username,
      email: this.state.email
    })
      .then((response) => {
        console.log('Updated from Server: ', response.data);

      })
      .catch((error) => {
        console.log(error);
      });
  }


  render() {

    return(
  <div
    <div className="ms-site-container">

    <Navbar />

      <div className="ms-hero-page-override ms-hero-img-coffee ms-bg-fixed ms-hero-bg-primary">
        <div className="container">
          <div className="text-center mt-2">
            {/* <img src="assets/img/demo/avatar1.jpg" alt="..." className="ms-avatar-hero animated zoomIn animation-delay-7" /> */}
            <h1 className="color-white mt-4 animated fadeInUp animation-delay-10">{this.state.companyName}</h1>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="card card-hero card-primary animated fadeInUp animation-delay-7">
          <div className="card-header-100 bg-primary-dark">
            <div className="row justify-content-center">
              <div className="col col-md-4">
                <div className="text-center">
                  <h3>
                    <strong><i>Company Information</i></strong>
                  </h3>
                 </div>
              </div>
            </div>
          </div>
          <div className="card-block">
            <form className="form-horizontal">
              <fieldset>
                <div className="row form-group">
                  <label htmlFor="username" className="col-md-4 control-label text-left"><i className="zmdi zmdi-account mr-1 color-royal"></i> Username</label>
                  <div className="col-md-8">
                    <input name="username" onChange={this.handleInputChange} defaultValue={this.state.username} type="text" className="form-control" disabled /> </div>
                </div>
                <div className="row form-group">
                  <label htmlFor="companyName" className="col-md-4 control-label text-left"><i className="zmdi zmdi-store mr-1 color-warning"></i> Company Name</label>
                  <div className="col-md-8">
                    <input name="username" onChange={this.handleInputChange} defaultValue={this.state.companyName} type="text" className="form-control" /> </div>
                </div>
                <div className="row form-group">
                  <label htmlFor="email" className="col-md-4 control-label text-left"><i className="zmdi zmdi-email mr-1 color-primary"></i> Email Address</label>
                  <div className="col-md-8">
                    <input name="email" onChange={this.handleInputChange} defaultValue={this.state.email} type="email" className="form-control" /> </div>
                </div>
                <div className="row form-group">
                  <label htmlFor="website" className="col-md-4 control-label text-left"><i className="zmdi zmdi-store mr-1 color-danger"></i> Website</label>
                  <div className="col-md-8">
                    <input name="website" onChange={this.handleInputChange} defaultValue={this.state.website} type="text" className="form-control" /> </div>
                </div>
                <div className="row form-group">
                  <label htmlFor="addressLine1" className="col-md-4 control-label text-left"><i className="zmdi zmdi-pin mr-1 color-warning"></i> Address Line 1</label>
                  <div className="col-md-8">
                    <input name="addressLine1" onChange={this.handleInputChange} defaultValue={this.state.addressLine1} type="text" className="form-control" /> </div>
                </div>
                <div className="row form-group">
                  <label htmlFor="addressLine2" className="col-md-4 control-label text-left"><i className="zmdi zmdi-pin mr-1 color-warning"></i> Address Line 2</label>
                  <div className="col-md-8">
                    <input name="addressLine2" onChange={this.handleInputChange} defaultValue={this.state.addressLine2} type="text" className="form-control" /> </div>
                </div>
                <div className="row form-group">
                  <label htmlFor="city" className="col-md-4 control-label text-left"><i className="zmdi zmdi-map mr-1 color-warning"></i> City</label>
                  <div className="col-md-8">
                    <input name="city" onChange={this.handleInputChange} defaultValue={this.state.city} type="text" className="form-control" /> </div>
                </div>
                <div className="row form-group">
                  <label htmlFor="state" className="col-md-4 control-label text-left"><i className="zmdi zmdi-map mr-1 color-warning"></i> State</label>
                  <div className="col-md-8">
                    <input name="state" onChange={this.handleInputChange} defaultValue={this.state.state} type="text" className="form-control" /> </div>
                </div>
                <div className="row form-group">
                  <label htmlFor="zipCode" className="col-md-4 control-label text-left"><i className="zmdi zmdi-map mr-1 color-warning"></i> Zip Code</label>
                  <div className="col-md-8">
                    <input name="zipCode" onChange={this.handleInputChange} defaultValue={this.state.zipCode} type="text" className="form-control" /> </div>
                </div>
                <div className="row form-group">
                  <label htmlFor="phone" className="col-md-4 control-label text-left"><i className="zmdi zmdi-phone mr-1 color-royal-light"></i> Phone</label>
                  <div className="col-md-8">
                    <input name="phoneNumber" onChange={this.handleInputChange} defaultValue={this.state.phoneNumber} type="text" className="form-control" /> </div>
                </div>
                <div className="row form-group">
                  <label htmlFor="createdOn" className="col-md-4 control-label text-left"><i className="zmdi zmdi-calendar mr-1 color-primary"></i> Date Created</label>
                  <div className="col-md-8">
                    <input name="createdOn" onChange={this.handleInputChange} defaultValue={this.state.createdOn} type="text" className="form-control" disabled/> </div>
                </div>

                <div className="row mt-2">
                  <div className="offset-lg-2 col-lg-6">

                  </div>
                  <div className="">
                    <button className="btn btn-raised btn-primary" onClick={this.handleAccountUpdateChanges} style={ {margin: "5px"} }>Save Changes</button>
                    <button className="btn btn-raised btn-danger" onClick={this.handleAccountUpdateChanges} style={ {margin: "5px"} }>Cancel</button>
                  </div>
                </div>

              </fieldset>
            </form>
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
