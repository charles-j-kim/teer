import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter} from 'react-router'

import EventBanner from './EventBanner.jsx'
import EventDetails from './EventDetails.jsx'
import AboutEventCharity from './AboutEventCharity.jsx'
import UpcomingEvents from './UpcomingEvents.jsx'
import EventReviewsList from './EventReviewsList.jsx'


class Event extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentWillMount() {
    if (window.localStorage.loggedIn !== "true") {
      this.props.history.push('/login');
    }
  }

  render () {
    return (
      <div>
        <h1>Event</h1>
        <h3>Hello world from Event</h3>
        <EventBanner className="banner-image" src="./assets/volunteers_working.jpg" />
        <EventDetails />
        <AboutEventCharity />
        <UpcomingEvents />
        <EventReviewsList />

      </div>
    )
  }
}

export default withRouter(Event);