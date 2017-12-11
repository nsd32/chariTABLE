import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Row, Input, Icon, Button } from 'react-materialize';
import '../styles/Registration.css';

let Registration = (props) => {

  return(
      <form action="">
          <Row>
            <div className="companyRegistration"  m={6} s={12}>
              <Col m={3}>
                <div className="leftSide"></div>
              </Col>
              <Col m={6} s={12} className="companyInfo">
                <h2><span><Icon medium>business</Icon></span> Company Information</h2>
                <hr className="companyHR" />
              	<Input name='companyName' s={12} label="Company Name  (required)" onChange={props.onChange} validate><Icon>business</Icon></Input>
              	<Input name='addressLine1' s={12} label="Address Line 1" validate onChange={props.onChange} ><Icon></Icon></Input>
              	<Input name='addressLine2' s={12} label="Address Line 2" validate onChange={props.onChange} ><Icon></Icon></Input>
              	<Input name='city' m={6} s={12} label="City" validate onChange={props.onChange} ><Icon></Icon></Input>
              	<Input name='state' m={3} s={12} label="State" validate onChange={props.onChange} ><Icon></Icon></Input>
              	<Input name='zipCode' m={3} s={12} label="Zip Code" validate onChange={props.onChange} ><Icon></Icon></Input>
              	<Input
                  name='phoneNumber'
                  m={6} s={12}
                  label="Phone  (format: xxx-xxx-xxxx)"
                  type="tel"
                  pattern="^\d{3}-\d{3}-\d{4}$"
                  onChange={props.onChange}
                  validate
                  >
                    <Icon>phone</Icon>
                  </Input>
              	<Input
                  name='website'
                  m={6} s={12}
                  label="Website  (format: http://example.com)"
                  type="url"
                  onChange={props.onChange}
                  validate
                  >
                    <Icon>domain</Icon>
                  </Input>

                <div>
                  <Button
                    large
                    waves='light'
                    onClick={props.onSubmit}
                    >
                      Next
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
            {/* <div className="adminRegistration"  m={6} s={12}>
              <Col m={6} s={12} className="adminInfo">
                <h2><span><Icon medium>supervisor_account</Icon></span> Admin Information</h2>
              	<Input s={6} label="First Name" validate><Icon>account_circle</Icon></Input>
              	<Input s={6} label="First Name" validate><Icon>account_circle</Icon></Input>
                <Input s={12} label="Email" validate type='email'><Icon>email</Icon></Input>
                <Input s={12} label="Phone" validate type='tel'><Icon>phone</Icon></Input>
                <Input s={12} label="Password" validate type='password'><Icon>fingerprint</Icon></Input>
                <Input s={12} label="Confirm Password" validate type='password'><Icon>fingerprint</Icon></Input>
              </Col>
            </div> */}
          </Row>


    </form>

    );
  }


export default Registration;
