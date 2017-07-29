import React from 'react';
import UpcomingEventItem from './UpcomingEventItem.jsx';

class UpcomingEvents extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h3>Upcoming Events</h3>
        <UpcomingEventItem />
        <UpcomingEventItem />
        <UpcomingEventItem />
      </div>
    );
  }
}

export default UpcomingEvents;