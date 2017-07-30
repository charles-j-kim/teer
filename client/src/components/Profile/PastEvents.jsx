import React from 'react';
import PastEventItem from './PastEventItem.jsx';

const PastEvents = function(props) {
  return (
    <div>
      <h3>Past Events</h3>
      <PastEventItem />
      <PastEventItem />
      <PastEventItem />
    </div>
  );
};

export default PastEvents;