import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Row, Input, Icon, Button } from 'react-materialize';
import '../styles/Login.css';


const LoginContainer =(props) => {

    return(
      <div>
        <Row>
          <Col className="leftSide" s={12} m={2}>
            Test1
          </Col>
          <Col className="loginColumn" s={12} m={8}>
            <div className="loginBox">
              <div className="loginTitle">
                <h3>Login</h3>
              </div>
              <div className="loginForm">
                <form>
                  <Input
                    name='loginUsername'
                    s={12}
                    label="Username"
                    onChange={props.onChange}
                    >
                      <Icon>account_circle</Icon>
                    </Input>
                  <Input
                    name='loginPassword'
                    s={12}
                    label="Passowrd"
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
            Test3
          </Col>
        </Row>
      </div>
    );
  }


export default LoginContainer;
