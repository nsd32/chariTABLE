import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Row, Input, Icon, Button } from 'react-materialize';
import '../styles/Login.css';


const LoginContainer =(props) => {

    return(
      <div>
        <Row>
          <Col className="leftSide" s={12} m={2}>

          </Col>
          <Col className="loginColumn" s={12} m={8}>
            <div className="loginBox">
              <div className="loginTitle">
                <h3>Login</h3>
              </div>
              <div className="loginForm">
                <form>
                  <Input
                    s={12}
                    name='username'
                    label="Username"
                    onChange={props.onChange}
                    >
                      <Icon>account_circle</Icon>
                    </Input>
                  <Input
                    s={12}
                    name='password'
                    label="Password"
                    type="password"
                    onChange={props.onChange}
                    >
                      <Icon>fingerprint</Icon>
                    </Input>
                  <div>
                    <Button
                      large
                      waves='light'
                      onClick={props.onSubmit}
                      >
                        Submit
                    </Button>
                    <Link to="/">
                      <Button large className='red' waves='light'>Cancel</Button>
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </Col>
          <Col className="rightSide" s={12} m={2}>
            
          </Col>
        </Row>
      </div>
    );
  }


export default LoginContainer;
