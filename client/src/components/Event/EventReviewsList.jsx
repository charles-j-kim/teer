import React from 'react';
import ReactDOM from 'react-dom';
import EventReview from './EventReview.jsx'

class EventReviewsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentWillMount() {

  }

  render () {
    return (
      <div>
        <h1> Event Reviews </h1>
        <p> Here will map a list of eventReview components </p>
        <EventReview
          upcomingEventImageSrc=""
          upcomingEventTitle="Code 2040 Hackathon"
          upcomingEventDate="Wednesday, August 2"
        >
        </EventReview>
      </div>
    )
  }
}

export default EventReviewsList;