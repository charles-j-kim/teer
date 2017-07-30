import React from 'react';
import { withRouter} from 'react-router';
import axios from 'axios';
import ProfilePic from './ProfilePic.jsx';
import ProfileStats from './ProfileStats.jsx';
import ProfileBanner from './ProfileBanner.jsx';
import UpcomingEvents from './UpcomingEvents.jsx';
import PastEvents from './PastEvents.jsx';


class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pastEvents: [],
      upcomingEvents: []
    };
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

  render () {
    console.log('Data in profile for Charles: ', window.localStorage)
    return (
      <div>
        <div>
          <ProfilePic
            img={window.localStorage.img_url}
            firstName={window.localStorage.first_name}
            lastName={window.localStorage.last_name}
          />
          <ProfileStats />
        </div>
        <div>
          <ProfileBanner
            firstName={window.localStorage.first_name}
            joined={window.localStorage.created_at}
          />
          <UpcomingEvents upcomingEvents={this.state.upcomingEvents} />
          <PastEvents pastEvents={this.state.pastEvents} />
        </div>
      </div>
    );
  }
}

export default withRouter(Profile);