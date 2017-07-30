import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class EventReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      eventId: 1,
      reviews: [],
      reviewerName: '',
      reviewerImg: ''
    }
  }

  componentWillMount() {
    axios.get(`/review-event/${this.state.eventId}`)
    .then(response => {
      let resData = response.data;
      this.setState({
        reviews = resData.reviews,
        reviewerName= resData.reviewerName,
        reviewerImg= resData.reviewerImg
      });
    })
    .catch(error => {
      console.error(error);
    })
  }

  render () {
    return (
      <div className="review">
        {this.state.map((review) {
          <EventReviewList
            <div className="review-user">
              <img src={review.reviewerImg} className="review-profileimg"></img>
              <div className="review-name">
                {revew.reviewerName}
              </div>
            </div>
            <div className="review-body">
              {review.reviews}
            </div>
          />
        })}
      </div>
    )
  }
}

export default EventReview;
