import React from 'react';
import ReactDOM from 'react-dom';
import UpcomingEvent from './UpcomingEvent.jsx'

class UpcomingEventList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentWillMount() {

  }

  render () {
    return (
      <div>
        <h1> Upcoming Event List</h1>
        <p> Here will map a list of upcomingEvent components </p>
        <UpcomingEvent
          upcomingEventImageSrc=""
          upcomingEventTitle="Code 2040 Hackathon"
          upcomingEventDate="Wednesday, August 2"
        >
        </UpcomingEvent>
        <UpcomingEvent
          upcomingEventImageSrc=""
          upcomingEventTitle="Red Cross Food Drive"
          upcomingEventDate="Thursday, August 3"
        >
        </UpcomingEvent>
        <UpcomingEvent
          upcomingEventImageSrc=""
          upcomingEventTitle="Save the Dolphins Fundraiser"
          upcomingEventDate="Friday, August 4"
        >
        </UpcomingEvent>
      </div>
    )
  }
}

export default UpcomingEventList;