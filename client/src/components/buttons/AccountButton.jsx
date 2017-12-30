import React from 'react';
import {Button} from 'react-materialize'
import EventLink from './links/EventLink'
import LogoutLink from './links/LogoutLink'

const LandingButton = () => (

  <Button floating fab='vertical' icon='add' className='red' large style={{bottom: '45px', right: '24px'}}>

    <EventLink />
    <LogoutLink />

  </Button>
)

export default LandingButton;
