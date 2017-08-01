import React from 'react';

const PastEventReview = function(props) {
  let count = [];
  for (let i = 0; i < props.rating; i++) {
    count.push(i);
  }

  return (
    <div>
      <div className="review-intro">On {props.date.getMonth() + 1}/{props.date.getDate()}/{props.date.getFullYear()} you wrote</div>
        <div className="review-star">
          {count.map((star, i) =>
            <span key={i}>&#9733;</span>
          )}
        </div>
        <div className="user-review">
          {props.comment}
        </div>
    </div>
  );
};

export default PastEventReview;