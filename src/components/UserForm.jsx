import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Row, Input, Icon, Button } from 'react-materialize';
import '../styles/Registration.css';

let UserForm = (props) => {

  return(
      <form action="">
          <Row>
            <div className="adminRegistration"  m={6} s={12}>
              <Col m={3}>
                <div className="leftSide"></div>
              </Col>
              <Col m={6} s={12} className="adminInfo">
                <h2><span><Icon medium>supervisor_account</Icon></span> Admin Information</h2>
                <hr className="userHR"/>
              	<Input s={6} label="First Name" validate><Icon>account_circle</Icon></Input>
              	<Input s={6} label="First Name" validate><Icon>account_circle</Icon></Input>
                <Input s={12} label="Email" validate type='email'><Icon>email</Icon></Input>
                <Input s={12} label="Phone" validate type='tel'><Icon>phone</Icon></Input>
                <Input s={12} label="Password" validate type='password'><Icon>fingerprint</Icon></Input>
                <Input s={12} label="Confirm Password" validate type='password'><Icon>fingerprint</Icon></Input>
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
              </Col>
              <Col m={3}>
                <div className="rightSide"></div>
              </Col>
            </div>
          </Row>


    </form>

    );
  }


export default UserForm;
