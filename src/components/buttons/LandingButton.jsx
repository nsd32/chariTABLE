import React from 'react';
import {Button} from 'react-materialize'
import RegisterLink from './links/RegisterLink'
import LoginLink from './links/LoginLink'

const LandingButton = () => (

  <Button floating fab='vertical add' icon='add' className='red' large style={{bottom: '45px', right: '24px'}}>
  	{/* <Button floating icon='insert_chart' className='red'/>
  	<Button floating icon='format_quote' className='yellow darken-1'/>
  	<Button floating icon='publish' className='green'/>
  	<Button floating icon='attach_file' className='blue'/> */}
    <RegisterLink />
    <LoginLink />

  </Button>
)

export default LandingButton;