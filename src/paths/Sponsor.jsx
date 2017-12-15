import React, { Component } from 'react';
import axios from 'axios';

class Sponsor extends Component {

	state = {};

	componentWillMount() {
    
	  for (let i = 0; i < this.props.location.state.eventObj.numberOfSponsors; i++) {
	  	var sponsor = `sponsor${i}`;
	  	console.log([sponsor]);
	    // this.setState({
	    // 	[tableHost]: {
	    // 		name: '',
	    // 		email: ''
	    // 	}
	  	this.state[sponsor] = {
	  		name: '',
	  		logo: ''
	  	}
	  	console.log(this.state);
  	}
  }

  nextButton = () => {
  	
  	// Put this.state into an object before sending???
		axios.post('/event/sponsors/' + this.props.location.state.eventObj._id, this.state)
	  .then( (response) => {
	    console.log(response);
	    this.props.history.push({
				pathname: "/profile"
				// state: { eventObj: this.props.location.state.eventObj }
			});
	  })
	  .catch( (error) => {
	    console.log(error);
	  });
		
	}

  handleInputNameChange = (event) => {
    this.setState({
    	
      [event.target.name]: { 
      	...this.state[event.target.name],
      	name: event.target.value
      }
      				
    });
    // console.log(this.state);
  }

  handleInputLogoChange = (event) => {
    this.setState({

      [event.target.name]: { 
      	...this.state[event.target.name],
      	email: event.target.value
      }
      				
    });
    // console.log(this.state);
  }


  render() {
  	console.log(this.state);
  	console.log(this.props.location.state.eventObj.numberOfSponsors);
  	var rows = [];
    for (var i = 0; i < this.props.location.state.eventObj.numberOfSponsors; i++) {
        rows.push(
        	<tr key={i}>
            <td>
            	<div class="input-field col s6">
          			<input name={'sponsor' + i} onChange={this.handleInputNameChange} type="text" class="validate" />
          			<label for="last_name">Name</label>
        			</div>
        		</td>
            <td>
            	<div class="input-field col s6">
          			<input name={'sponsor' + i} onChange={this.handleInputLogoChange} type="text" class="validate" />
          			<label for="last_name">Logo Link</label>
        			</div>
        		</td>
          </tr>
        );
    }
    return(
      <div>
	    	<table>
	        <thead>
	          <tr>  
	            <th>Enter Sponsor Information</th>
	          </tr>
	        </thead>
	        <tbody>{rows}</tbody>
	      </table>	
	      <button onClick={this.nextButton}>Submit</button>
      </div>
    );
  }
}

export default Sponsor;