import React, { Component } from 'react';
import axios from 'axios';
import LoginTab from '../components/LoginTab';
import RegisterTab from '../components/RegisterTab';

class LandingPageUpdated extends Component {

  state = {
    companyInfo:[],
    CompanyID: "",
    company: []
  }

  componentDidMount() {

  }

  handleRegisterSubmit = (event) => {
    event.preventDefault();
    console.log('Company Submit selected!!')
    if(
      this.state.username &&
      this.state.companyName &&
      this.state.email &&
      this.state.password &&
      this.state.confirmPassword
    ) {
      if(this.state.password !== this.state.confirmPassword) {
        console.log('Passwords don\'t Match');
        return;
      }


      axios.post('/register', {
        companyName: this.state.companyName,
        addressLine1: this.state.addressLine1,
        addressLine2: this.state.addressLine2,
        city: this.state.city,
        state: this.state.state,
        zipCode: this.state.zipCode,
        phoneNumber: this.state.phoneNumber,
        website: this.state.website,
        username: this.state.username,
        email: this.state.email,
        password: this.state.password,
        confirmPassword: this.state.confirmPassword
      })
        .then((response) => {
          this.setState({ companies: response.data });
          axios.get('/api/companies')
            .then((response) => {
              console.log('Company Submit: ' ,response.data);
              console.log('Company Length: ', response.data.length-1);
              let companyID = response.data[response.data.length-1]._id;
              console.log('Company ID: ', companyID)
              this.setState({ companyID: companyID });
              console.log('Company ID State: ', this.state.companyID);
              this.props.history.push({
                pathname: "/profile/" + companyID,
                state: {
                  companyInfo: response.data,
                //   companyID: response.data._id,
                //   // companyTitle: response.data.companyName
                }
              });
            })
            .catch((error) => {
              console.log(error);
            });
        })
        .catch((error) => {
          console.log(error);
        });
      } else {
        console.log('Please fill out all required fields!!')
        // var err = new Error('All fields required.');
        // err.status = 400;
        // return next(err);
    }
  }


  handleLoginSubmit = (event) => {
    event.preventDefault();
    console.log('Login Submitted')
    axios.post('/login', {
      username: this.state.loginUsername,
      password: this.state.loginPassword
    })
      .then((response) => {
        console.log('Login Successful');
        // console.log('User Information: ', response.data);
        // this.setState( {companyInfo: response.data});
        this.setState( {companyID: response.data._id});
        let companyID = this.state.companyID;
        // console.log('Current State: ', this.state);
        // console.log('Current Company ID: ', this.state.companyID);
        this.props.history.push({
          pathname: "/profile/" + companyID,
          state: {
            companyInfo: response.data,
          //   companyID: response.data._id,
          //   // companyTitle: response.data.companyName
          }
        });
      })
      .catch((error) => {
        console.log(error);
      })
  };





  handleRegisterInputChange = (event) => {
    console.log('Register Info: ', this.state);
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleLoginInputChange = (event) => {
    console.log('Login Info: ', this.state);
    this.setState({
      [event.target.name]: event.target.value
    });
  };

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
                <ul className="nav nav-tabs nav-tabs-full nav-tabs-2 nav-tabs-primary" role="tablist">
                  <li className="nav-item" role="presentation">
                    <a href="#ms-login-tab" aria-controls="ms-login-tab" role="tab" data-toggle="tab" className="nav-link active withoutripple">
                      <i className="zmdi zmdi-account"></i> Login</a>
                  </li>
                  <li className="nav-item" role="presentation">
                    <a href="#ms-register-tab" aria-controls="ms-register-tab" role="tab" data-toggle="tab" className="nav-link withoutripple">
                      <i className="zmdi zmdi-account-add"></i> Register</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="modal-body">
              <div className="tab-content">
                <LoginTab
                  onChange={this.handleLoginInputChange}
                  onSubmit={this.handleLoginSubmit}
                />
                <RegisterTab
                  onChange={this.handleRegisterInputChange}
                  onSubmit={this.handleRegisterSubmit}
                />
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
        </div>
      </div>
      {/* // <!-- container --> */}
      <aside className="ms-footbar">
        <div className="container">
          <div className="row">

            <div className="col-lg-5 col-md-7 ms-footer-col ms-footer-alt-color">
              <div className="ms-footbar-block">
                <div className="ms-footbar-title">
                  <span className="ms-logo ms-logo-white ms-logo-sm mr-1">CH</span>
                  <h3 className="no-m ms-site-title">chari<span>TABLE</span> Host</h3>
                </div>
                <address className="no-mb">
                  <p>
                    <i className="color-danger-light zmdi zmdi-pin mr-1"></i> 9665 Parramatta Place Suite 100</p>
                  <p>
                    <i className="color-warning-light zmdi zmdi-map mr-1"></i> Highlands Ranch, CO 80130</p>
                  <p>
                    <i className="color-info-light zmdi zmdi-email mr-1"></i>
                    <a href="mailto:info@chariTABLEHost.com">info@chariTABLEHost.com</a>
                  </p>
                  <p>
                    <i className="color-royal-light zmdi zmdi-phone mr-1"></i>
                    <a href="tel:242748-2253">(242) 748-2253</a>
                  </p>
                </address>
              </div>
            </div>
            <div className="col-lg-3 col-md-5 ms-footer-col ms-footer-text-right">
              <div className="ms-footbar-block">
                <h3 className="ms-footbar-title">Social Media</h3>
                <div className="ms-footbar-social">
                  <a href="javascript:void(0)" className="btn-circle btn-facebook">
                    <i className="zmdi zmdi-facebook"></i>
                  </a>
                  <a href="javascript:void(0)" className="btn-circle btn-twitter">
                    <i className="zmdi zmdi-twitter"></i>
                  </a>
                  <a href="javascript:void(0)" className="btn-circle btn-linkedin">
                    <i className="zmdi zmdi-linkedin"></i>
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
