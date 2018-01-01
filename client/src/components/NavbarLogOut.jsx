import React from 'react';
import LogoutButton from '../components/buttons/links/LogoutButton';
import LoginButton from '../components/buttons/links/LoginButton';

let NavbarLoggedOut = (props) => {

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
              <LogoutButton />
          </div>
        </div>
      </header>

    );
  }


export default NavbarLoggedOut;
