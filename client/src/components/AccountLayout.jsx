import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Row, Input, Icon, Button } from 'react-materialize';
import '../styles/Registration.css';

let AccountLayout = (props) => {
    return(
      <form action="">

        <Row>
          <Col className="leftSide" m={1} s={12}>

          </Col>
          <Col className="leftSide" m={10} s={12}>
            <div className="registration" m={12}>
              <div className="companyRegistration">
                <Col className="companyInfo">
                  <h2 className="companyRegisterTitle"><span><Icon medium>business</Icon></span> Account Information</h2>
                  <hr className="companyHR" />
                  <Input name="username" s={12} label="Username" onChange={props.onChange} validate type='text' value={props.companyID}><Icon>account_circle</Icon></Input>
                  <Input name='companyName' s={12} label="Company Name *" onChange={props.onChange} validate><Icon>business</Icon></Input>
                  <Input name="email" s={12} label="Company Email" onChange={props.onChange} validate type='email'><Icon>email</Icon></Input>
                  <Input name="password" s={12} label="Password" onChange={props.onChange} validate type='password'><Icon>fingerprint</Icon></Input>
                  <Input name="confirmPassword" s={12} label="Confirm Password" onChange={props.onChange} validate type='password'><Icon>fingerprint</Icon></Input>
                  <Input name='addressLine1' s={12} label="Address Line 1" validate onChange={props.onChange} ><Icon></Icon></Input>
                  <Input name='addressLine2' s={12} label="Address Line 2" validate onChange={props.onChange} ><Icon></Icon></Input>
                  <Input name='city' m={6} s={12} label="City" validate onChange={props.onChange} ><Icon></Icon></Input>
                  <Input name='state' m={2} s={12} label="State" validate onChange={props.onChange} ></Input>
                  <Input name='zipCode' m={4} s={12} label="Zip Code" validate onChange={props.onChange} ></Input>
                  <Input
                    name='phoneNumber'
                    m={5} s={12}
                    label="Phone (ex: xxx-xxx-xxxx)"
                    type="tel"
                    pattern="^\d{3}-\d{3}-\d{4}$"
                    onChange={props.onChange}
                    validate
                    >
                      <Icon>phone</Icon>
                    </Input>
                  <Input
                    name='website'
                    m={7} s={12}
                    label="`Website (ex: http://example.com)`"
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
                      Submit
                  </Button>
                  <Link to="/">
                    <Button large className='red' waves='light'>Cancel</Button>
                  </Link>
                </div>
              </Col>
            </div>
          </div>
          </Col>
          <Col className="rightSide" m={1} s={12}>

          </Col>
        </Row>

      </form>
    )
}

export default AccountLayout;
