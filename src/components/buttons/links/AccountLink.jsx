import React from 'react';
import { Link } from 'react-router-dom';
import {Button} from 'react-materialize'

const AccountLink = () => (

  <Link to="/account">
      <Button
        type="button"
        floating
        icon='account_circle'
        className='teal darken-4'
        title="Account Info"
        >

      </Button>
  </Link>
)

export default AccountLink;
