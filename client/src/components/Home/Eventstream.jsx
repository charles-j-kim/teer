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
    	<div className="eventstream">
    		{events.map((eventItem,i)=>
    			<Event
<<<<<<< HEAD
                    key={i}
    				eventImage={eventItem.img_url}
=======
    				eventImage={eventItem.event_img_url}
>>>>>>> fixes date-time rendering
    				eventTitle={eventItem.name}
    				date={String(eventItem.start_date_hr).slice(0,10)}
    				organisation={eventItem.org_name}
    				eventId={eventItem.id}
    			/>
    		)}
    	</div>
  	)
  }
}

export default Eventstream;
