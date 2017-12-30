import React from 'react';

let Navbar = (props) => {

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
            <a href="javascript:void(0)" class="btn btn-raised color-primary btn-white no-focus animated zoomInDown animation-delay-8" data-toggle="modal" data-target="#ms-account-modal">Login</a>
            {/* <a href="javascript:void(0)" className="btn-circle btn-circle-primary no-focus animated zoomInDown animation-delay-8" data-toggle="modal" data-target="#ms-account-modal">
              <i className="zmdi zmdi-sign-in"></i>
            </a>
            <form className="search-form animated zoomInDown animation-delay-9">
              <input id="search-box" type="text" className="search-input" placeholder="Search..." name="q" />
              <label htmlFor="search-box">
                <i className="zmdi zmdi-search"></i>
              </label>
            </form>
            <a href="javascript:void(0)" className="btn-ms-menu btn-circle btn-circle-primary ms-toggle-left animated zoomInDown animation-delay-10">
              <i className="zmdi zmdi-menu"></i>
            </a> */}
          </div>
        </div>
      </header>

    );
  }


export default Navbar;
