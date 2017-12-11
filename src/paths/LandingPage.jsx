import React, { Component } from 'react';
import Hero from '../components/Hero';
import LandingButton from '../components/buttons/LandingButton';

class LandingPage extends Component {
  render() {
    return(
      <div>
        <Hero />
        <LandingButton />
      </div>
    );
  }
}

export default LandingPage;
