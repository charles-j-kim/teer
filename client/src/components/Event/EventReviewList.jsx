import React from 'react';
import ReactDOM from 'react-dom';
import EventReview from './EventReview.jsx'

class EventReviewList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentWillMount() {

  }

  render () {
    return (
      <div>
        <h1> EventReview List </h1>
        <EventReview
          userProfilePictureSrc=""
          name="Ryan"
          userReview="this event was awesome!"
        >
        </EventReview>
      </div>
    )
  }
}

export default EventReviewList;