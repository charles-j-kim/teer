import React from 'react';
import UpcomingEventItem from './UpcomingEventItem.jsx';

const UpcomingEvents = function(props) {
  return (
    <div>
      <h3>Upcoming Events</h3>
      {props.upcomingEvents.map((event, i) =>
        <UpcomingEventItem key={i} event={event} />
      )}
    </div>
  );
};

export default UpcomingEvents;