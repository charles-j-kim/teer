import React from 'react';
import EventItem from './EventItem.jsx';

const UpcomingEvents = function(props) {
  return (
    <div>
      <h3>Upcoming Events</h3>
      {props.upcomingEvents.map((event, i) =>
        <EventItem key={i} event={event} />
      )}
    </div>
  );
};

export default UpcomingEvents;