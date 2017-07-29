import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter} from 'react-router';
import ProfilePic from './ProfilePic.jsx';
import ProfileStats from './ProfileStats.jsx';
import ProfileBanner from './ProfileBanner.jsx';

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
    return (
      <div>
        <div>
          <ProfilePic />
          <ProfileStats />
        </div>
        <div>
          <ProfileBanner />
        </div>
      </div>
    );
  }
}

export default withRouter(Profile);