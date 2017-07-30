import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter} from 'react-router'
import axios from 'axios';
import EventBanner from './EventBanner.jsx'
import EventDetails from './EventDetails.jsx'
import AboutEventCharity from './AboutEventCharity.jsx'
import UpcomingEventList from './UpcomingEventList.jsx'
import EventReviewList from './EventReviewList.jsx'
import Userinfo from './Userinfo.jsx';

class Event extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: {
        name: "Fund raiser",
        start_date_hr: "2017-02-20",
        description: "We will raise a lot of money baby",
        org_name: "Red Cross",
        location: "San Mateo, CA",
        img_url: "http://prod.static.panthers.clubs.nfl.com/assets/images/community/header-charity-events.jpg"
      }
    }
  }

  componentWillMount() {
    if (window.localStorage.loggedIn !== "true") {
      this.props.history.push('/login');
    }
  }

  componentDidMount() {
    var wantedEventID = this.props.location.state.eventID;
    axios.get('/events/' + wantedEventID)
    .then(response => {
      console.log(response.data[0]);
      this.setState({events: response.data[0]});
    })
    .catch(error => {
      console.error(error);
    });
  }

  render () {
    return (
      <div>
        <div className="toolbar">
          <img className="logo-image" src="./assets/teer_logo.png"></img>
          <div className="userinfo">
            <Userinfo profilePic={this.state.profilePic} firstName={this.state.firstName} lastName={this.state.lastName} />
          </div>
        </div>
        <div className="eventbanner-container">
        <EventBanner className="banner-image" src="./assets/volunteers_working.jpg" />
        </div>
        <div className="event-body">
        <EventDetails
          eventTitle = {this.state.events.name}
          eventDate = {this.state.events.start_date_hr}
          eventDescription = {this.state.events.description}
          charityLocation = {this.state.events.location}
        />
        <AboutEventCharity
          charityName = {this.state.events.org_name}
          charityLocation = {this.state.events.location}
          charityDescription = {this.state.events.description}
        />
        <UpcomingEventList />
        <EventReviewList />
        </div>

      </div>
    )
  }
}

export default withRouter(Event);