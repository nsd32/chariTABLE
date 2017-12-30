import React from 'react';
import { Link } from 'react-router-dom';
import {Button} from 'react-materialize'

const LoginLink = () => (

  <Link to="/login">
      <Button
        type="button"
        floating
        icon='fingerprint'
        className='blue'
        title="Login"
        >

      </Button>
  </Link>
)

export default LoginLink;
