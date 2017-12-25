import React from 'react';

const LoginTab = (props) => {

    return(

      <div role="tabpanel" className="tab-pane fade active show" id="ms-login-tab">
        <form>
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
                  onChange={props.onChange}
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
                  onChange={props.onChange}
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
                  onClick={props.onSubmit}
                >
                  Login
                </button>
              </div>
            </div>
          </fieldset>
        </form>
      </div>
    );
  }


export default LoginTab;
