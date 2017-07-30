import React from 'react';

const ReviewItem = function(props) {
  let createdAt = new Date(props.review.created_at);
  let rev = props.review;

  return (
    <div>
      <div>
        <img src={rev.img_url} />
        <span>{rev.first_name} {rev.last_name[0]}.</span>
      </div>
      <div>
        <span>{rev.comment}</span>
        <span>{`${createdAt.getMonth() + 1}/${createdAt.getDate()}/${createdAt.getFullYear()}`} ● {rev.event_name}</span>
      </div>
    </div>
  );
};

export default ReviewItem;