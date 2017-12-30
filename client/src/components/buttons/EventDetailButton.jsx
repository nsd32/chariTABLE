import React, { Component } from 'react';
import {Button} from 'react-materialize'
import EventLink from './links/EventLink'
import AccountLink from './links/AccountLink'
import LogoutLink from './links/LogoutLink'

class EventButton extends Component {

    constructor(props) {
      super (props);

    }

    componentDidMount() {
      console.log('Props: ', this.props);

    }

    handleEventLink = (event) => {
      event.preventDefault();
      console.log('Event Link Clicked!!');
      let companyID = event.target.id;
      console.log('Event Button Company ID: ', companyID);
      // this.props.history.push({
      //   pathname: "/profile/" + companyID
      // });

    }

    render() {
      return(
        <Button floating fab='vertical' icon='add' className='red' large style={{bottom: '45px', right: '24px'}}>
          <EventLink
            id={this.props.companyID}
            onClick={this.handleEventLink}
           />
          <AccountLink />
          <LogoutLink />

        </Button>
    );
  }
}

export default EventButton;
