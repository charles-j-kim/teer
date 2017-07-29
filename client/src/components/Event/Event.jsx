import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter} from 'react-router'

import EventBanner from './EventBanner.jsx'
import EventDetails from './EventDetails.jsx'
import AboutEventCharity from './AboutEventCharity.jsx'
import UpcomingEventList from './UpcomingEventList.jsx'
import EventReviewList from './EventReviewList.jsx'


class Event extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      "eventTitle": "Code2040 Hackathon",
      "eventDate": "Wednesday, August 2",
      "eventDescription": "Code2040 Hackathon is a really cool event",
      "whatToBring": ["laptop", "sleeping Bag", "positive Attitude"],
      "charity": {
        "name": "Code2040",
        "location":"San Francisco, CA USA",
        "description":"Code2040 is a nonprofit that helps minorities learn how to code"
      }
    }
  }

  componentWillMount() {
    if (window.localStorage.loggedIn !== "true") {
      this.props.history.push('/login');
    }
  }

  componentDidMount() {
    // axios.get('/event/' + this.props.location.state.eventID)
    // .then(response => {
    //   console.log(response);
    //   this.setState({events: respose});
    // })
    // .catch(error => {
    //   console.error(error);
    // });
  }

  render () {
    return (
      <div>
        <h1>Event</h1>
        <h3>Hello world from Event</h3>
        <EventBanner className="banner-image" src="./assets/volunteers_working.jpg" />
        <EventDetails
          eventTitle = {this.state.eventTitle}
          eventDate = {this.state.eventDate}
          eventDescription = {this.state.eventDescription}
          whatToBring = {this.state.whatToBring}
        />
        <AboutEventCharity
          charityName = {this.state.charity.name}
          charityLocation = {this.state.charity.location}
          charityDescription = {this.state.charity.description}
        />
        <UpcomingEventList />
        <EventReviewList />

      </div>
    )
  }
}

export default withRouter(Event);