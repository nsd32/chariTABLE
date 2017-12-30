import React, { Component } from 'react';
import axios from 'axios';
// import LoginButton from '../components/buttons/LoginButton';
// import LoginContainer from '../components/LoginContainer';
import LoginTab from '../components/LoginTab';
import RegisterTab from '../components/RegisterTab';


class Login extends Component {

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
      <div className="bg-full-page ms-hero-bg-dark ms-hero-img-airplane back-fixed">
        <div className="mw-500 absolute-center">
          <div className="card color-dark shadow-6dp animated fadeIn animation-delay-7">
            <div className="ms-hero-bg-primary ms-hero-img-mountain">
              <h2 className="text-center no-m pt-4 pb-4 color-white index-1">Login Form</h2>
            </div>
            <ul className="nav nav-tabs nav-tabs-full nav-tabs-2 nav-tabs-transparent indicator-primary" role="tablist">
              <li className="nav-item" role="presentation">
                <a href="#ms-login-tab" aria-controls="ms-login-tab" role="tab" data-toggle="tab" className="nav-link withoutripple active">
                  <i className="zmdi zmdi-account"></i> Login</a>
              </li>
              <li className="nav-item" role="presentation">
                <a href="#ms-register-tab" aria-controls="ms-register-tab" role="tab" data-toggle="tab" className="nav-link withoutripple">
                  <i className="zmdi zmdi-account-add"></i> Register</a>
              </li>
              {/* <li className="nav-item" role="presentation">
                <a href="#ms-recovery-tab" aria-controls="ms-recovery-tab" role="tab" data-toggle="tab" className="nav-link withoutripple">
                  <i className="zmdi zmdi-key"></i> Recovery</a>
              </li> */}
            </ul>
            <div className="card-block">
              <div className="tab-content">

                <RegisterTab
                  onChange={this.handleRegisterInputChange}
                  onSubmit={this.handleRegisterSubmit}
                />
                <LoginTab
                  onChange={this.handleLoginInputChange}
                  onSubmit={this.handleLoginSubmit}
                />
                {/* <div role="tabpanel" className="tab-pane fade" id="ms-recovery-tab">
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
                        <input type="email" id="ms-form-email" className="form-control" />
                       </div>
                    </div>
                    <button className="btn btn-raised btn-block btn-primary">Send Password</button>
                  </fieldset>
                  </form>
                </div> */}
              </div>
            </div>
          </div>
          <div className="text-center animated fadeInUp animation-delay-7">
            <a href="index.html" className="btn btn-white">
              <i className="zmdi zmdi-home"></i> Go Home</a>
          </div>
        </div>
      </div>
    </div>


    );
  }
}

export default Login;
