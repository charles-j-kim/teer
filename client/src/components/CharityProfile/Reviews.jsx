import React from 'react';
import ReviewItem from './ReviewItem.jsx';

const Reviews = function(props) {  
  return (
    <div>
      <h4>Reviews</h4>
      <div className="charity-review-box">
      {props.reviews.map((review, i) =>
        <ReviewItem key={i} review={review} />
      )}
      </div>
    </div>
  );
};

export default Reviews;