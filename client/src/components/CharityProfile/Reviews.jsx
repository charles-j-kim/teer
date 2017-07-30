import React from 'react';
import ReviewItem from './ReviewItem.jsx';

const Reviews = function(props) {  
  return (
    <div>
      <h4>Reviews</h4>
      {props.reviews.map((review, i) =>
        <ReviewItem key={i} review={review} />
      )}
    </div>
  );
};

export default Reviews;