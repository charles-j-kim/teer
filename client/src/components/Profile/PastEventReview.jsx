import React from 'react';

const PastEventReview = function(props) {
  let count = [];
  for (let i = 0; i < props.rating; i++) {
    count.push(i);
  }

  return (
    <div>
      <div>On {props.date.getMonth() + 1}/{props.date.getDate()}/{props.date.getFullYear()} you wrote</div>
        <div>
          {count.map((star, i) =>
            <span key={i}>&#9733;</span>
          )}
        </div>
        <div>
          {props.comment}
        </div>
    </div>
  );
};

export default PastEventReview;