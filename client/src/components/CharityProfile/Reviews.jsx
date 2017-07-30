import React from 'react';
import ReviewItem from './ReviewItem.jsx';

const Reviews = function(props) {  
  return (
    <div>
      <h3>Reviews</h3>
      {props.reviews.map(review =>
        <ReviewItem review={review} />
      )}
    </div>
  );
};

export default Reviews;