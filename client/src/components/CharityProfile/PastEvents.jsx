import React from 'react';
import EventItem from './EventItem.jsx';

const PastEvents = function(props) {
  return (
    <div>
      <h3>Past Events</h3>
      {props.pastEvents.map((event, i) =>
        <EventItem key={i} event={event} />
      )}
    </div>
  );
};

export default PastEvents;