import React from 'react';
import ReactDOM from 'react-dom';
import EventReview from './EventReview.jsx'

class EventReviewList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      "eventReviews":[
        {
          "user": {
            "name": "Ryan",
            "profilePictureSrc": "./assets/bla"
          },
          "reviewText":"This event was awesome!"
        },
        {
          "user": {
            "name": "Tom",
            "profilePictureSrc": "./assets/bla"
          },
          "reviewText":"I had so much fun at this last year! Memmories for a lifetime!"
        },
      ]
    }
  }

  componentWillMount() {

  }

  render () {
    return (
      <div>
        <h1> EventReview List </h1>
        {
          this.state.eventReviews.map(
            function(review, i){
            return(
              <EventReview
                userProfilePictureSrc={review.user.profilePictureSrc}
                name={review.user.name}
                userReview={review.reviewText}
                key={i}
              >
              </EventReview>
            )
          })
        }
      </div>
    )
  }
}

export default EventReviewList;