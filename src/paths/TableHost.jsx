import React, { Component } from 'react';
import axios from 'axios';

class TableHost extends Component {

	state = {};

	componentWillMount() {
    // Setting initial state based on how many tablehosts there are
	  for (let i = 0; i < this.props.location.state.eventObj.numberOfTableHosts; i++) {
	  	var tableHost = `tableHost${i}`;
	  	console.log([tableHost]);
	    this.setState({
        [tableHost]: {
          name: '',
          email: ''
        }
      }, () => {
        console.log(this.state)
      })
	  	
  	}
  }

	componentDidMount() {
		console.log('Table Host Company ID: ', this.props.location.state.companyID)
	}

  nextButton = () => {

  	// Put this.state into an object before sending???
		axios.post('/event/tablehosts/' + this.props.location.state.eventObj._id, this.state)
	  .then( (response) => {
	    console.log(response);
	    this.props.history.push({
				pathname: "/sponsor",
				state: {
					eventObj: this.props.location.state.eventObj,
					companyID: this.props.location.state.companyID
				}
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

  // handleInputChange = (event) => {
  //   this.setState({
  //     [event.target.name]: {
  //       name: event.target.value,
  //       email: event.target.value
  //     }
  //   });
  //   console.log(this.state);
  // };

  render() {
  	console.log(this.state);
  	var rows = [];
    for (var i = 0; i < this.props.location.state.eventObj.numberOfTableHosts; i++) {
        rows.push(
        	<tr key={i}>
            <td>{`Table Host ${i + 1}`}</td>
            <td>
            	<div className="input-field">
          			<input name={'tableHost' + i} onChange={this.handleInputNameChange} type="text" class="validate" />
          			<label for="last_name">Name</label>
        			</div>
        		</td>
            <td>
            	<div className="input-field">
          			<input name={'tableHost' + i} onChange={this.handleInputEmailChange} type="text" class="validate" />
          			<label for="last_name">Email</label>
        			</div>
        		</td>
          </tr>
        );
    }
    return(
    	<div>
        <header class="ms-header ms-header-primary">
          <div class="container container-full">
            <div class="ms-title">
              <a href="index.html">
                
                <span class="ms-logo animated zoomInDown animation-delay-5">CH</span>
                <h1 class="animated fadeInRight animation-delay-6">chariTABLE Host
                </h1>
              </a>
            </div>
            <div class="header-right">
              <div class="share-menu">
                <ul class="share-menu-list">
                  <li class="animated fadeInRight animation-delay-3">
                    <a href="javascript:void(0)" class="btn-circle btn-google">
                      <i class="zmdi zmdi-google"></i>
                    </a>
                  </li>
                  <li class="animated fadeInRight animation-delay-2">
                    <a href="javascript:void(0)" class="btn-circle btn-facebook">
                      <i class="zmdi zmdi-facebook"></i>
                    </a>
                  </li>
                  <li class="animated fadeInRight animation-delay-1">
                    <a href="javascript:void(0)" class="btn-circle btn-twitter">
                      <i class="zmdi zmdi-twitter"></i>
                    </a>
                  </li>
                </ul>
                <a href="javascript:void(0)" class="btn-circle btn-circle-primary animated zoomInDown animation-delay-7">
                  <i class="zmdi zmdi-share"></i>
                </a>
              </div>
              <a href="javascript:void(0)" class="btn-circle btn-circle-primary no-focus animated zoomInDown animation-delay-8" data-toggle="modal" data-target="#ms-account-modal">
                <i class="zmdi zmdi-account"></i>
              </a>
              <form class="search-form animated zoomInDown animation-delay-9">
                <input id="search-box" type="text" class="search-input" placeholder="Search..." name="q" />
                <label for="search-box">
                  <i class="zmdi zmdi-search"></i>
                </label>
              </form>
            </div>
          </div>
        </header>

        <div class="ms-hero-page-override ms-hero-img-airplane ms-bg-fixed ms-hero-bg-dark-light">
          <div class="container">
            <div class="text-center">
              <h1 class="no-m ms-site-title color-white center-block ms-site-title-lg mt-2 animated zoomInDown animation-delay-5">Enter Table Host Information</h1>
              {/*<p class="lead lead-lg color-light text-center center-block mt-2 mw-800 text-uppercase fw-300 animated fadeInUp animation-delay-7">Do not wait more register now! Access our great community and benefit from
                <span class="color-info">exclusive membership</span> conditions.</p>*/}
            </div>
          </div>
        </div>
        
        <div class="container">
          <div class="card-hero animated fadeInUp animation-delay-7">
            <div class="row">
              <div class="col-lg-12 ms-paper-content-container">
                <div class="ms-paper-content">
                <div class="card card-primary">
                  <div class="card-header">
                    <h3 class="card-title">
                      <i class="zmdi zmdi-graduation-cap"></i> Table Hosts
                    </h3>
                  </div>
                    <table class="table table-no-border table-striped">
                      <tbody>
                        {rows}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div> 
          {/*<button onClick={this.nextButton}>Next</button>*/}
          <a onClick={this.nextButton} href="javascript:void(0)" class="btn btn-raised btn-primary">Next</a>
        </div>
      </div>
    );
  }
}

export default TableHost;
