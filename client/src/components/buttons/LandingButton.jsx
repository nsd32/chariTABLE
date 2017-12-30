import React from 'react';
import {Button} from 'react-materialize'
import RegisterLink from './links/RegisterLink'
import LoginLink from './links/LoginLink'

const LandingButton = () => (

  <Button floating fab='vertical' icon='add' className='red' large style={{bottom: '45px', right: '24px'}}>
    <RegisterLink />
    <LoginLink />
  </Button>
)

export default LandingButton;
