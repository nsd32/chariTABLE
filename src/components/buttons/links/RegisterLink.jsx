import React from 'react';
import { Link } from 'react-router-dom';
import {Button} from 'react-materialize'

const RegisterLink = () => (

    <Link to="/register">
      <Button
        floating icon='rate_review'
        className='green'
        title="Register"
      >

      </Button>
    </Link>
)

export default RegisterLink;
