return(
      <div>
        <div className="eventTitleContainer">
          <h3 className="eventTitle">{this.state.companID}</h3>

        </div>
        <Row>
          <Col className="" m={1} s={12}></Col>
          <Col className="" m={10} s={12}>
            <div className="Event">
              <table className="striped eventList">
                <thead>
                  <tr>
                      <th>Event Name</th>
                      <th>Event Date</th>
                      <th>Event Time</th>
                      <th style={ { "textAlign": "center" } }>Actions</th>
                  </tr>

                </thead>

                <tbody>

                  {this.state.events.map((event) => {
          					return (
                      <tr key={event._id}>
                        <td>{event.eventName}</td>
                        <td>{event.eventDate}</td>
                        <td>{event.eventTime}</td>
                        <td
                          style={ { "textAlign": "center" } }
                          >
                          <a
                            className="waves-effect waves-light btn"
                            id={event._id}
                            onClick={this.handleDetailClick}
                            >
                              <i
                                className="material-icons left"
                                >
                                  details
                                </i>
                                Details
                            </a>
                          </td>
                      </tr>
          					);
          				})}
                </tbody>
              </table>
            </div>
          </Col>
          <Col className="" m={1} s={12}></Col>
        </Row>
        <button onClick={this.addEventButton}>Add Event</button>
        <EventButton />
      </div>

    );