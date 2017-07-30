import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter} from 'react-router'

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentWillMount() {
    if (window.localStorage.loggedIn !== "true") {
      this.props.history.push('/login');
    }
    axios.get(`/events/review/${this.state.eventId}`)
    .then(response => {
      console.log(response.data);
      let resData = response.data;
      this.setState({
        reviewData: response.data
      });
    })
    .catch(error => {
      console.error(error);
    })
  }

  render () {
    return (
      <div>
        <h1>Profile</h1>
        <h3>Hello world from Profile</h3>
      </div>
    )
  }
}

export default withRouter(Profile);
