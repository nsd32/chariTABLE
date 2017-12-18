import React, { Component } from 'react';
import axios from 'axios';

class Sponsor extends Component {

	state = {};

	componentWillMount() {

	  for (let i = 0; i < this.props.location.state.eventObj.numberOfTableHosts; i++) {
	  	var sponsor = `sponsor${i}`;
	  	console.log([sponsor]);
	    this.setState({
        [sponsor]: {
          name: '',
          logo: ''
        }
      }, () => {
        console.log(this.state)
      })
	  	
  	}
  }

	// componentDidMount() {
	// 	console.log(this.props.location.state.eventObj);
	// 	console.log(this.props.location.state.companyID);
	// 	// this.setState( { eventInfo: this.props.location.state.eventObj } )
	// }

  nextButton = () => {

  	// Put this.state into an object before sending???
		axios.post('/event/sponsors/' + this.props.location.state.eventObj._id, this.state)
	  .then( (response) => {
	    console.log(response);
	    this.props.history.push({
				pathname: `/profile/${this.props.location.state.companyID}`
				// state: { eventObj: this.props.location.state.eventObj }
			});
	  })
	  .catch( (error) => {
	    console.log(error);
	  });

	}

  handleInputNameChange = (event) => {
		console.log(this.state);
    this.setState({

      [event.target.name]: {
      	...this.state[event.target.name],
      	name: event.target.value
      }

    });
    // console.log(this.state);
  }

  handleInputLogoChange = (event) => {
		console.log(this.state);
    this.setState({

      [event.target.name]: {
      	...this.state[event.target.name],
      	logo: event.target.value
      }

    });
    // console.log(this.state);
  }


  render() {
  	// console.log(this.state);
  	// console.log(this.props.location.state.eventObj.numberOfSponsors);
  	var rows = [];
    for (var i = 0; i < this.props.location.state.eventObj.numberOfTableHosts; i++) {
        rows.push(
        	<tr key={i}>
            <td>
            	<div className="input-field col s6">
          			<input name={'sponsor' + i} onChange={this.handleInputNameChange} type="text" class="validate" />
          			<label for="name">Name</label>
        			</div>
        		</td>
            <td>
            	<div className="input-field col s6">
          			<input name={'sponsor' + i} onChange={this.handleInputLogoChange} type="text" class="validate" />
          			<label for="logo">Logo Link</label>
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
