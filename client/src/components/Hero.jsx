import React from 'react';
import {Slider, Slide} from 'react-materialize'
import Table1 from '../images/Table_1.jpg';
import Table2 from '../images/Table_2.jpg';
import Table3 from '../images/Table_3.jpg';
import Table4 from '../images/Table_4.jpg';


import '../styles/Hero.css';

const Hero = () => (

      <Slider
        fullscreen = "true"
        >
      	<Slide
      		src={Table1}
      		title="chariTABLE Host">

      		<h5>Here's our small slogan.</h5>
      	</Slide>
      	<Slide
      		src={Table2}
      		title="Left aligned Caption"
      		placement="left">
      		Here's our small slogan.
      	</Slide>
      	<Slide
      		src={Table3}
      		title="Right aligned Caption"
      		placement="right">
      		Here's our small slogan.
      	</Slide>
        <Slide
      		src={Table4}
      		title="Right aligned Caption"
      		placement="right">
      		Here's our small slogan.
      	</Slide>
      </Slider>
    );

export default Hero;
