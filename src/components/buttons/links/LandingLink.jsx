import React from 'react';
import { Link } from 'react-router-dom';
import {Button} from 'react-materialize'

const LandingLink = () => (

  <Link to="/">
      <Button
        type="button"
        floating
        icon='home'
        className='yellow-2'
        title="Home"
        >

      </Button>
  </Link>
)

export default LandingLink;
