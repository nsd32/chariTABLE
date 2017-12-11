import React from 'react';
import { Link } from 'react-router-dom';
import {Button} from 'react-materialize'

const LogoutLink = () => (

  <Link to="/">
      <Button
        type="button"
        floating
        icon='exit_to_app'
        className='blue'
        title="Logout"
        >

      </Button>
  </Link>
)

export default LogoutLink;
