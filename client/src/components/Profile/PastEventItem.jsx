import React from 'react';
import PastEventReview from './PastEventReview.jsx';

class PastEventItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
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
    );
  }
}

export default PastEventItem;