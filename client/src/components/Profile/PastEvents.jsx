import React from 'react';
import PastEventReview from './PastEventReview.jsx';

class PastEvents extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h3>Past Events</h3>
        <div>
          <div>
            <span>Event Title</span>
            <span>on Thursday, July 20, 2017</span>
            <span>Edit Review</span>
          </div>
          <div>
            <span>+10</span>
            <span>Teer Points</span>
          </div>
          <PastEventReview />
        </div>
        <div>
          <div>
            <span>Event Title</span>
            <span>on Thursday, July 20, 2017</span>
            <span>Write Review</span>
          </div>
          <div>
            <span>+10</span>
            <span>Teer Points</span>
          </div>
        </div>
      </div>
    );
  }
}

export default PastEvents;