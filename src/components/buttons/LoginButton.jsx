import React from 'react';
import {Button} from 'react-materialize'
import LandingLink from './links/LandingLink'
import RegisterLink from './links/RegisterLink'

const LandingButton = () => (

  <Button floating fab='vertical' icon='add' className='red' large style={{bottom: '45px', right: '24px'}}>

    <RegisterLink />
    <LandingLink />

  </Button>
)

export default LandingButton;
