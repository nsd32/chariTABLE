import React, { Component } from 'react';
import axios from 'axios';

class TableHost extends Component {

	state = {};

	componentWillMount() {
    
	  for (let i = 0; i < this.props.location.state.eventObj.numberOfTableHosts; i++) {
	  	var tableHost = `tableHost${i}`;
	  	console.log([tableHost]);
	    // this.setState({
	    // 	[tableHost]: {
	    // 		name: '',
	    // 		email: ''
	    // 	}
	  	this.state[tableHost] = {
	  		name: '',
	  		email: ''
	  	}
	  	console.log(this.state);
  	}
  }

  nextButton = () => {
  	
  	// Put this.state into an object before sending???
		axios.post('/event/' + this.props.location.state.eventObj._id, this.state)
	  .then( (response) => {
	    console.log(response);
	    this.props.history.push({
				pathname: "/sponsor",
				state: { eventObj: this.props.location.state.eventObj }
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

  handleInputEmailChange = (event) => {
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
  	var rows = [];
    for (var i = 0; i < this.props.location.state.eventObj.numberOfTableHosts; i++) {
        rows.push(
        	<tr key={i}>
            <td>
            	<div class="input-field col s6">
          			<input name={'tableHost' + i} onChange={this.handleInputNameChange} type="text" class="validate" />
          			<label for="last_name">Name</label>
        			</div>
        		</td>
            <td>
            	<div class="input-field col s6">
          			<input name={'tableHost' + i} onChange={this.handleInputEmailChange} type="text" class="validate" />
          			<label for="last_name">Email</label>
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
	            <th>Enter Table Host Information</th>
	          </tr>
	        </thead>
	        <tbody>{rows}</tbody>
	      </table>	
	      <button onClick={this.nextButton}>Next</button>
      </div>
    );
  }
}

export default TableHost;