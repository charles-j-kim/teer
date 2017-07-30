import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter} from 'react-router'

class Event extends React.Component {
	constructor(props) {
		super(props);
		this.state = {}
    this.handleClick = this.handleClick.bind(this);
    this.clickOrg = this.clickOrg.bind(this);
	}

  handleClick(e) {
    var eventID = this.props.eventId;
    this.props.history.push({
      pathname: '/Event',
      state: {
        eventID: eventID
      }
    });
  }

  clickOrg() {
    var eventID = this.props.charityId;
    this.props.history.push({
      pathname: '/charityprofile',
      state: {
        charityID: eventID
      }
    });
  }

	render () {
    return (
    	<div className="event">
          <div className="event-image-container">
          <img className="event-image" src={this.props.eventImage} onClick={this.handleClick}></img>
          </div>
        <div className="event-details">
          <div id="event-title" onClick={this.handleClick}>
      		  {this.props.eventTitle}
          </div>
          <div id="event-date" onClick={this.handleClick}>
            {this.props.date}
          </div>
          <hr/>
          <div id="organizer" onClick={this.clickOrg}>
            {this.props.organisation}
        </div>
      </div>
    	</div>
  	)
  }
}

export default withRouter(Event);
