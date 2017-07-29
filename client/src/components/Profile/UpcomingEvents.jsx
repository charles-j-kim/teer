import React from 'react';

class UpcomingEvents extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h3>Upcoming Events</h3>
        <div>
          <span>Event Title</span>
          <span>on Thursday, July 27, 2017</span>
        </div>
        <div>
          <span>Event Title</span>
          <span>on Thursday, July 27, 2017</span>
        </div>
      </div>
    );
  }
}

export default UpcomingEvents;