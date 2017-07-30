import React from 'react';
import UpcomingEventItem from './UpcomingEventItem.jsx';

const UpcomingEvents = function(props) {
  return (
    <div>
      <h4>Upcoming Events</h4>
      <div className="upcomingevents-box"> 
      {props.upcomingEvents.map((event, i) =>
        <UpcomingEventItem key={i} event={event} />
      )}
      </div>
    </div>
  );
};

export default UpcomingEvents;