import React from 'react';
import { withRouter} from 'react-router';
import ProfilePic from './ProfilePic.jsx';
import ProfileStats from './ProfileStats.jsx';
import ProfileBanner from './ProfileBanner.jsx';
import UpcomingEvents from './UpcomingEvents.jsx';
import PastEvents from './PastEvents.jsx';


class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  
  componentWillMount() {
    if (window.localStorage.loggedIn !== 'true') {
      this.props.history.push('/login');
    }
  }

  render () {
    console.log('Data in profile for Charles: ', window.localStorage)
    return (
      <div>
        <div>
          <ProfilePic />
          <ProfileStats />
        </div>
        <div>
          <ProfileBanner />
          <UpcomingEvents />
          <PastEvents />
        </div>
      </div>
    );
  }
}

export default withRouter(Profile);