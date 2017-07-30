import React from 'react';
import PastEventItem from './PastEventItem.jsx';

const PastEvents = function(props) {
  return (
    <div>
      <h3>Past Events</h3>
      {props.pastEvents.map((event, i) =>
        <PastEventItem key={i} event={event} />
      )}
    </div>
  );
};

export default PastEvents;