import React from 'react';

let Navbar = (props) => {

  return(
      <header className="ms-header ms-header-primary">
        {/* <!--ms-header-primary--> */}
        <div className="container">
          <div className="ms-title">
            <a href="/">
              {/* <!-- <img src="assets/img/demo/logo-header.png" alt="" /> --> */}
              <span className="ms-logo animated zoomInDown animation-delay-5">CH</span>
              <h1 className="animated fadeInRight animation-delay-6">chari<span>TABLE</span> Host</h1>
            </a>
          </div>
          <div className="header-right">
            <div className="dropdown open pull-xs-right">
              <button className="btn bmd-btn-icon dropdown-toggle" type="button" id="lr1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i className="material-icons" style={{ color: "#ffffff"}}>more_vert</i>
              </button>
              <div className="dropdown-menu dropdown-menu-right" aria-labelledby="lr1">
                <a href="javascript:void(0)" className="btn btn-raised btn-primary no-focus" data-toggle="modal" data-target="#ms-account-modal" style={{margin: "10px"}} onClick={props.onClick}>Login</a>
              </div>
            </div>
          </div>
        </div>
      </header>

    );
  }


export default Navbar;
