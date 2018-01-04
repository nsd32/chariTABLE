import React, {Component} from 'react';
import LogoutButton from '../components/buttons/links/LogoutButton';

class NavbarLogout extends Component {

    constructor(props) {
      super(props)
      this.state = {detailed: false}
      this.toggle = this.toggle.bind(this)
    }

    toggle() {
      console.log(this.state.detailed)
      this.setState({detailed: !this.state.detailed})
    }

    render() {

      return(
          <header className="ms-header ms-header-primary">
            {/* <!--ms-header-primary--> */}
            <div className="container container-full">
              <div className="ms-title">
                <a href="/">
                  {/* <!-- <img src="assets/img/demo/logo-header.png" alt="" /> --> */}
                  <span className="ms-logo animated zoomInDown animation-delay-5">CH</span>
                  <h1 className="animated fadeInRight animation-delay-6">chari<span>TABLE</span> Host</h1>
                </a>
              </div>
              <div className="header-right">
                <div className="dropdown open pull-xs-right">
                  <button className="btn bmd-btn-icon dropdown-toggle" type="button" id="lr1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" onClick={this.toggle}>
                    <i className="material-icons" style={{ color: "#ffffff" }}>more_vert</i>
                  </button>
                  <div className="dropdown-menu dropdown-menu-right" aria-labelledby="lr1" in={this.state.detailed}>
                    <LogoutButton/>
                  </div>
                </div>
              </div>
            </div>
          </header>

        );
      }
  }


export default NavbarLogout;
