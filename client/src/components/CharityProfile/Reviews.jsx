import React from 'react';
import ReviewItem from './ReviewItem.jsx';

class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // need to implement map once DB is hooked up
  render() {
    return (
      <div>
        <h3>Reviews</h3>
        <ReviewItem />
        <ReviewItem />
      </div>
    );
  }
}

export default Reviews;