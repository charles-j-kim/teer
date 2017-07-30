import React from 'react';

const ReviewItem = function(props) {
  let createdAt = new Date(props.review.created_at);
  let rev = props.review;

  return (
    <div className="charity-review">
      <div className="review-user">
        <img className="review-profileimg" src={rev.img_url} />
        <div className="review-name">{rev.first_name} {rev.last_name[0]}.</div>
      </div>
      <div className="charity-review-body">
        <span>{rev.comment}</span><br/>
        <span className="review-detail">{`${createdAt.getMonth() + 1}/${createdAt.getDate()}/${createdAt.getFullYear()}`} ● {rev.event_name}</span>
      </div>
    </div>
  );
};

export default ReviewItem;