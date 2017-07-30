import React from 'react';
import ReactDOM from 'react-dom';
import EventReview from './EventReview.jsx'
import axios from 'axios';


class EventReviewList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      eventId: 1,
      reviewData: []
    }
  }

  componentWillMount() {
    axios.get(`/events/review/${this.state.eventId}`)
    .then(response => {
      console.log(response.data);
      let resData = response.data;
      this.setState({
        reviewData: response.data
      });
    })
    .catch(error => {
      console.error(error);
    })
  }

  render () {
    return (
      <div>
        {this.state.reviewData.map(
          function(review, i) {
          return(
            <EventReview
              userProfilePictureSrc={review.img_url}
              name={review.first_name}
              userReview={review.comment}
              key={i}
            >
            </EventReview>
          )
        })}
      </div>
    )
  }
}

export default EventReviewList;
