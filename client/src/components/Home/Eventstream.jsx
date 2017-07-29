import React from 'react';
import ReactDOM from 'react-dom';
import Event from './Event.jsx';

class Eventstream extends React.Component {
	constructor(props) {
		super(props);
		this.state = {}
	}

	render () {
		var events = this.props.events;

    return (
    	<div class="eventstream">
    		{events.map(eventItem => <Event eventImage={eventItem.eventImage} eventTitle={eventItem.eventTitle} date={eventItem.date} organisation={eventItem.organisation} eventId={eventItem.ID}/>)}
    	</div>
  	)
  }
}

export default Eventstream;