import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter} from 'react-router'

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: 'Joe',
      lastName: 'Doe',
      profilePic: 'https://content-static.upwork.com/uploads/2014/10/02123010/profile-photo_friendly.jpg'
    }
  }

  componentWillMount() {
    if (window.localStorage.loggedIn !== "true") {
      this.props.history.push('/login');
    }
  }

  render () {
    return (
      <div>
        <img className="logo-image" src="./assets/teer_logo.png"></img>
        <h1>HomePage</h1>
        <h3>Hello world from Home</h3>
      </div>
    )
  }
}

export default withRouter(Home);