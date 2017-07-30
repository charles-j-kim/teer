import React from 'react';
import EventItem from './EventItem.jsx';

const PastEvents = function(props) {
  return (
    <div>
      <h4>Past Events</h4>
      {props.pastEvents.map((event, i) =>
        <EventItem key={i} event={event} />
      )}
    </div>
  );
};

export default PastEvents;