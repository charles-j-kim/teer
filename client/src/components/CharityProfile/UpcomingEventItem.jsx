import React from 'react';

class UpcomingEventItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div>
          <span>Event Title</span>
          <span>on Thursday, July 27, 2017</span>
        </div>
      </div>
    );
  }
}

export default UpcomingEventItem;