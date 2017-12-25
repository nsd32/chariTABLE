import React from 'react';

let RegisterTab = (props) => {

  return(

    <div role="tabpanel" className="tab-pane fade" id="ms-register-tab">
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
                onChange={props.onChange}
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
                onChange={props.onChange}
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
                onChange={props.onChange}
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
                onChange={props.onChange}
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
                onChange={props.onChange}
              />
            </div>
          </div>
          <button
            className="btn btn-raised btn-block btn-primary"
            onClick={props.onSubmit}
          >
            Register Now
          </button>
        </fieldset>
      </form>
    </div>







    );
  }


export default RegisterTab;
