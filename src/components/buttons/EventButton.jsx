import React from 'react';
import {Button} from 'react-materialize'
import AccountLink from './links/AccountLink'
import LogoutLink from './links/LogoutLink'

const EventButton = () => (

  <Button floating fab='vertical add' icon='add' className='red' large style={{bottom: '45px', right: '24px'}}>
    <AccountLink />
    <LogoutLink />

  </Button>
)

export default EventButton;
