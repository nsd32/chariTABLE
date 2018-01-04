import React, { Component } from 'react';
import axios from 'axios';
import LoginTab from '../components/LoginTab';
import RegisterTab from '../components/RegisterTab';
import NavbarLogin from '../components/NavbarLogin';
import Footer from '../components/Footer';

class LandingPageUpdated extends Component {

  state = {
    companyInfo:[],
    companyID: "",
    company: [],
    companyCount: "",
    eventCount: "",
    tableHostCount: "",
    guestCount: ""
  }


  componentDidMount() {
    axios.get('/companies/count')
    .then((companyCount) => {
      console.log('Company Count: ', companyCount.data);
      this.setState({companyCount: companyCount.data});

    });

    axios.get('/events/count')
    .then((eventCount) => {
      console.log('Event Count: ', eventCount.data);
      this.setState({eventCount: eventCount.data});
    });

    axios.get('/tableHosts/count')
    .then((tableHostCount) => {
      console.log('Table Host Count: ', tableHostCount.data);
      this.setState({tableHostCount: tableHostCount.data});
    });

    axios.get('/guests/count')
    .then((guestCount) => {
      console.log('Guest Count: ', guestCount.data);
      this.setState({guestCount: guestCount.data});
    });
  }


  handleModal() {

      document.querySelector("body").classList.remove('modal-open');
      document.querySelector("div.modal-backdrop").remove();
      document.querySelector("body").style.padding = "0px";
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
        this.setState({registerError: 'Passwords don\'t Match'})
        return;
      }


      axios.post('/register', {
        companyName: this.state.companyName,
        addressLine1: ' ',
        addressLine2: ' ',
        city: ' ',
        state: ' ',
        zipCode: ' ',
        phoneNumber: ' ',
        website: ' ',
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
              this.handleModal();
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
        this.setState({registerError: 'Please fill out all required fields!!'})
        let error = document.getElementById('registerError');
        error.setAttribute("style",'display: block')
        // var err = new Error('All fields required.');
        // err.status = 400;
        // return next(err);
    }
  }


  handleLoginSubmit = (event) => {
    event.preventDefault();
    console.log('Login Submitted')
    let loginError = document.getElementById('loginError');
    loginError.setAttribute("style",'display: none');
    console.log('Login Username: ', this.state.username);

    if(
      this.state.loginUsername &&
      this.state.loginPassword
    ) {
      loginError.setAttribute("style",'display: none');
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
          this.handleModal();
        })


        .catch((error) => {
          console.log(error);
          console.log('User or Password Incorrect!!');
          this.setState({loginError: 'User or Password Incorrect!!'});
          loginError.setAttribute("style",'display: block');
        })
      } else {
        console.log('Please fill out all required fields!!');
        this.setState({loginError: 'Please fill out all required fields!!'});
        loginError.setAttribute("style",'display: block');
      }
  };

  registerButtonClick = (event) => {
    event.preventDefault();
    let registerTabInfo = document.getElementById('ms-register-tab');
    let registerTab = document.getElementById('registerTab');
    let loginTabInfo = document.getElementById('ms-login-tab');
    let loginTab = document.getElementById('loginTab');
    loginTabInfo.classList.remove('active');
    loginTabInfo.classList.remove('show');
    registerTabInfo.classList.add('active');
    registerTabInfo.classList.add('show');
    loginTab.classList.remove('active');
    registerTab.classList.add('active');
  }

  loginButtonClick = (event) => {
    event.preventDefault();
    let registerTabInfo = document.getElementById('ms-register-tab');
    let registerTab = document.getElementById('registerTab');
    let loginTabInfo = document.getElementById('ms-login-tab');
    let loginTab = document.getElementById('loginTab');
    loginTabInfo.classList.add('active');
    loginTabInfo.classList.add('show');
    loginTab.classList.add('active');
    registerTabInfo.classList.remove('active');
    registerTab.classList.remove('active');
    registerTabInfo.classList.remove('show');
  }

  handleRegisterInputChange = (event) => {
    // console.log('Register Info: ', this.state);
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleLoginInputChange = (event) => {
    // console.log('Login Info: ', this.state);
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  render() {
    return(
    <div>

    <div className="ms-site-container">
      {/* <!-- Modal --> */}
      <div className="modal modal-primary" id="ms-account-modal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" >
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
                    <a id="loginTab" href="#ms-login-tab" aria-controls="ms-login-tab" role="tab" data-toggle="tab" className="nav-link active withripple">
                      <i className="zmdi zmdi-account"></i> Login</a>
                  </li>
                  <li className="nav-item" role="presentation">
                    <a id="registerTab" href="#ms-register-tab" aria-controls="ms-register-tab" role="tab" data-toggle="tab" className="nav-link withripple">
                      <i className="zmdi zmdi-account-add"></i> <span className="d-none d-sm-inline"> Register</span></a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="modal-body">
              <div className="tab-content">
                {/* <div className="alert alert-danger alert-light alert-dismissible" id="loginError" role="alert">
                  {this.state.error}
                </div> */}
                {/* <LoginTab
                  onChange={this.handleLoginInputChange}
                  onSubmit={this.handleLoginSubmit}
                /> */}
                <div role="tabpanel" className="tab-pane fade active show" id="ms-login-tab">
                  <div className="alert alert-danger alert-light alert-dismissible" id="loginError" role="alert" style={{ display: "none"}}>
                    {this.state.loginError}
                  </div>
                  <form autoComplete="on">
                    <fieldset>
                      <div className="form-group label-floating">
                        <div className="input-group">
                          <span className="input-group-addon">
                            <i className="zmdi zmdi-account"></i>
                          </span>
                          <label className="control-label" htmlFor="login-user">Username</label>
                          <input
                            name='loginUsername'
                            type="text"
                            id="login-user"
                            className="form-control"
                            onChange={this.handleLoginInputChange}
                            required
                           />
                         </div>
                      </div>
                      <div className="form-group label-floating">
                        <div className="input-group">
                          <span className="input-group-addon">
                            <i className="zmdi zmdi-lock"></i>
                          </span>
                          <label className="control-label" htmlFor="login-pass">Password</label>
                          <input
                            name="loginPassword"
                            type="password"
                            id="login-pass"
                            className="form-control"
                            onChange={this.handleLoginInputChange}
                          />
                        </div>
                      </div>
                      <div className="row mt-2">
                        <div className="col-5">
                          <div className="form-group mt-1">
                          </div>
                        </div>
                        <div className="col-7">
                          <button
                            className="btn btn-raised btn-primary pull-right"
                            onClick={this.handleLoginSubmit}
                            // data-dismiss="modal"
                          >
                            Login
                          </button>
                        </div>
                      </div>
                    </fieldset>
                  </form>
                </div>
                {/* <RegisterTab
                  onChange={this.handleRegisterInputChange}
                  onSubmit={this.handleRegisterSubmit}
                /> */}
                <div role="tabpanel" className="tab-pane fade" id="ms-register-tab">
                  <div className="alert alert-danger alert-light alert-dismissible" id="registerError" role="alert" style={{ display: "none"}}>
                    {this.state.registerError}
                  </div>
                  <form>
                    <fieldset>
                      <div className="form-group label-floating">
                        <div className="input-group">
                          <span className="input-group-addon">
                            <i className="zmdi zmdi-account"></i>
                          </span>
                          <label className="control-label" htmlFor="ms-form-user">Username</label>
                          <input
                            name="username"
                            type="text"
                            id="register-user"
                            className="form-control"
                            onChange={this.handleRegisterInputChange}
                          />
                        </div>
                      </div>
                      <div className="form-group label-floating">
                        <div className="input-group">
                          <span className="input-group-addon">
                            <i className="zmdi zmdi-store"></i>
                          </span>
                          <label className="control-label" htmlFor="ms-form-user">Company Name</label>
                          <input
                            name="companyName"
                            type="text"
                            id="register-company"
                            className="form-control"
                            onChange={this.handleRegisterInputChange}
                          />
                        </div>
                      </div>
                      <div className="form-group label-floating">
                        <div className="input-group">
                          <span className="input-group-addon">
                            <i className="zmdi zmdi-email"></i>
                          </span>
                          <label className="control-label" htmlFor="ms-form-email">Email</label>
                          <input
                            name="email"
                            type="email"
                            id="register-email"
                            className="form-control"
                            onChange={this.handleRegisterInputChange}
                          />
                        </div>
                      </div>
                      <div className="form-group label-floating">
                        <div className="input-group">
                          <span className="input-group-addon">
                            <i className="zmdi zmdi-lock"></i>
                          </span>
                          <label className="control-label" htmlFor="ms-form-pass">Password</label>
                          <input
                            name="password"
                            type="password"
                            id="register-pass"
                            className="form-control"
                            onChange={this.handleRegisterInputChange}
                          />
                        </div>
                      </div>
                      <div className="form-group label-floating">
                        <div className="input-group">
                          <span className="input-group-addon">
                            <i className="zmdi zmdi-lock"></i>
                          </span>
                          <label className="control-label" htmlFor="ms-form-pass">Re-type Password</label>
                          <input
                            name="confirmPassword"
                            type="password"
                            id="register-confirmPass"
                            className="form-control"
                            onChange={this.handleRegisterInputChange}
                          />
                        </div>
                      </div>
                      <button
                        className="btn btn-raised btn-block btn-primary"
                        onClick={this.handleRegisterSubmit}
                        // data-dismiss="modal"
                      >
                        Register Now
                      </button>
                    </fieldset>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <NavbarLogin
        onClick={this.loginButtonClick}
      />

      <div className="material-background"></div>
      <div className="container">
        <div className="card wow slideInUp">
          <div className="card-block-big">
            <h1 className="color-primary">About Us</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus sequi illo labore eaque eveniet porro in, molestias deleniti corporis ea repellendus
              <strong>laborum dolores veniam nam</strong> mollitia culpa accusamus non voluptates corrupti? A inventore et veniam dignissimos, animi suscipit magnam nihil sed repellendus placeat eveniet vitae est impedit alias aliquid eius?</p>
            <p>Perferendis, blanditiis unde fugiat voluptas molestias velit asperiores rerum ipsam animi eum temporibus at numquam, nobis voluptates minus maxime cum obcaecati! Tenetur sit corporis laudantium inventore officia officiis odio repellat dolore
              quos
              <a href="javascript:void(0)">repudiandae voluptas ad facere</a>, amet placeat animi voluptatem distinctio beatae.</p>
              <a href="javascript:void(0)"><button className="btn btn-raised btn-primary pull-right" data-toggle="modal" data-target="#ms-account-modal" onClick={this.registerButtonClick}>Register</button></a>
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
                    <h2 className="counter color-info">{this.state.companyCount}</h2>
                    <i className="fa fa-4x fa-building color-info"></i>
                    <p className="mt-2 no-mb lead small-caps color-info">Companies</p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="card card-block text-center wow zoomInUp animation-delay-5">
                    <h2 className="counter color-info">{this.state.eventCount}</h2>
                    <i className="fa fa-4x fa-calendar color-info"></i>
                    <p className="mt-2 no-mb lead small-caps color-info">Events</p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="card card-block text-center wow zoomInUp animation-delay-4">
                    <h2 className="counter color-info">{this.state.tableHostCount}</h2>
                    <i className="fa fa-4x fa-user color-info"></i>
                    <p className="mt-2 no-mb lead small-caps color-info">Table Hosts</p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="card card-block text-center wow zoomInUp animation-delay-3">
                    <h2 className="counter color-info">{this.state.guestCount}</h2>
                    <i className="fa fa-4x fa-users color-info"></i>
                    <p className="mt-2 no-mb lead small-caps color-info">Guests</p>
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
      <Footer />
      <div className="btn-back-top">
        <a href="javascript:void(0)" data-scroll id="back-top" className="btn-circle btn-circle-primary btn-circle-sm btn-circle-raised ">
          <i className="zmdi zmdi-long-arrow-up"></i>
        </a>
      </div>
    </div>
  </div>
    );
  }
}

export default LandingPageUpdated;
