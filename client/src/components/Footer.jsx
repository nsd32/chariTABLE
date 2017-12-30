import React from 'react';

let Footer = (props) => {

  return(
    <div>
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
    </div>

    );
  }


export default Footer;
