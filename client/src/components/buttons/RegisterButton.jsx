import React from 'react';
import {Button} from 'react-materialize'
import LandingLink from './links/LandingLink'
import LoginLink from './links/LoginLink'

const LandingButton = () => (

  <Button floating fab='vertical' icon='add' className='red' large style={{bottom: '45px', right: '24px'}}>
    <LoginLink />
    <LandingLink />
  </Button>
)

export default LandingButton;
