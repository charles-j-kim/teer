import React from 'react';
import PastEventItem from './PastEventItem.jsx';

class PastEvents extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h3>Past Events</h3>
        <PastEventItem />
        <PastEventItem />
        <PastEventItem />
      </div>
    );
  }
}

export default PastEvents;