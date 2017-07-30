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
import Chat from '../Chat/Chat.jsx'
import EventButtons from './EventButtons.jsx'


class Event extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: 'Joe',
      lastName: 'Doe',
      profilePic: 'https://content-static.upwork.com/uploads/2014/10/02123010/profile-photo_friendly.jpg',
      events: {
        name: "Fund raiser",
        start_date_hr: "2017-02-20",
        description: "We will raise a lot of money baby",
        org_name: "Red Cross",
        location: "San Mateo, CA",
        img_url: "http://prod.static.panthers.clubs.nfl.com/assets/images/community/header-charity-events.jpg"
      }
    }
    this.logoClick = this.logoClick.bind(this);

        // {
        //   "src":"http://prod.static.panthers.clubs.nfl.com/assets/images/community/header-charity-events.jpg",
        //   "title":"Code2040 Hackathon",
        //   "date":"Wednesday, August2"
        // },
        // {
        //   "src":"./assets/red_cross_food_drive.jpg",
        //   "title":"RedCross Food Drive",
        //   "date":"Thursday, August4"
        // },
        // {
        //   "src":"./assets/race_for_the_cure.jpg",
        //   "title":"Race for the Cure!",
        //   "date":"Friday, August 5"
        // },
  }

  componentWillMount() {
    if (window.localStorage.loggedIn !== "true") {
      this.props.history.push('/login');
    }
  }

  componentDidMount() {
    var wantedEventID = 1 || this.props.location.state.eventID;
    axios.get('/events/' + wantedEventID)
    .then(response => {
      console.log(response.data[0]);
      this.setState({events: response.data[0]});
    })
    .catch(error => {
      console.error(error);
    });
  }

  logoClick() {
    this.props.history.push('/');
  }

  render () {
    return (
      <div>
        <div className="toolbar">
          <img className="logo-image" src="./assets/teer_logo.png" onClick={this.logoClick}></img>
          <div className="userinfo">
            <Userinfo profilePic={this.state.profilePic} firstName={this.state.firstName} lastName={this.state.lastName} />
          </div>
        </div>
        <div className="eventbanner-container">
           <EventBanner className="banner-image" src="./assets/volunteers_working.jpg" />
        </div>
        <div className="event-body">
          <div className="event-body-left">
          <EventDetails
            eventTitle = {this.state.events.name}
            eventDate = {this.state.events.start_date_hr}
            eventDescription = {this.state.events.description}
            charityLocation = {this.state.events.location}
          />
          <hr/>
          <AboutEventCharity
            charityName = {this.state.events.org_name}
            charityLocation = {this.state.events.location}
            charityDescription = {this.state.events.description}
          />
          <hr/>

        <h2>Event Review</h2>
        <br/>
          <EventReviewList />
          <br/>
          <hr/>
        <h2> Upcoming Events</h2>
        <br/>
          </div>
          <UpcomingEventList />
        </div>
        <Chat/>


      </div>
    )
  }
}

export default withRouter(Event);
