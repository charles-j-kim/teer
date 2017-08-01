import React from 'react';
import { withRouter} from 'react-router';
import axios from 'axios';
import ProfilePic from './ProfilePic.jsx';
import ProfileStats from './ProfileStats.jsx';
import ProfileBanner from './ProfileBanner.jsx';
import UpcomingEvents from './UpcomingEvents.jsx';
import PastEvents from './PastEvents.jsx';
import Userinfo from './Userinfo.jsx';


class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: 'Joe',
      lastName: 'Doe',
      profilePic: 'https://content-static.upwork.com/uploads/2014/10/02123010/profile-photo_friendly.jpg',
      pastEvents: [],
      upcomingEvents: [],
      userId: 1
    };
    this.clickLogo = this.clickLogo.bind(this);
  }
  
  componentWillMount() {
    if (window.localStorage.loggedIn !== 'true') {
      this.props.history.push('/login');
    }
  }

  componentDidMount() {
    axios.get(`/events/volunteer/${window.localStorage.id}`)
    .then(response => {
      console.log(response.data.rows)
      let events = response.data.rows;
      let pastEvents = [];
      let upcomingEvents = [];

      events.forEach(event => {
        let eventDate = new Date(event.end_date_hr);
        eventDate < new Date() ? pastEvents.push(event) : upcomingEvents.push(event);
      });

      this.setState({
        pastEvents: pastEvents,
        upcomingEvents: upcomingEvents
      });
    })
    .catch(error => {
      console.error(error);
    });
  }

  clickLogo() {
    this.props.history.push('/');
  }

  render () {
    window.scrollTo(0,0);
    return (
      <div>
      <div className="toolbar">
          <img className="logo-image" src="./assets/teer_logo.png" onClick={this.clickLogo}></img>
          <div className="userinfo">
            <Userinfo profilePic={this.state.profilePic} firstName={this.state.firstName} lastName={this.state.lastName} />
          </div>
        </div>
        <div className="profile-box">
          <div className="profile-left">
            <ProfilePic
              img={window.localStorage.img_url}
              firstName={window.localStorage.first_name}
              lastName={window.localStorage.last_name}
            />
            <hr/>
            <ProfileStats />
          </div>
        <div className="profile-right">
          <div className="profile-banner">
          <ProfileBanner
            firstName={window.localStorage.first_name}
            joined={window.localStorage.created_at}
          />
          </div>
          <div className="user-events">
          <UpcomingEvents upcomingEvents={this.state.upcomingEvents} />
          <hr/>
          <PastEvents pastEvents={this.state.pastEvents} />
          </div>
        </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Profile);