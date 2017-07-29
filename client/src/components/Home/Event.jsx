import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter} from 'react-router'

class Event extends React.Component {
	constructor(props) {
		super(props);
		this.state = {}
    this.handleClick = this.handleClick.bind(this);
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

	render () {
    return (
    	<div class="event" onClick={this.handleClick}>
        <div>
          <img className="event-image" src={this.props.eventImage}></img>
        </div>
        <div id="event-title">
    		  {this.props.eventTitle}
        </div>
        <div id="event-date">
          {this.props.date}
        </div>
        <div id="organizer">
          {this.props.organisation}
        </div>
    	</div>
  	)
  }
}

export default withRouter(Event);
