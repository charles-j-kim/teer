import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter} from 'react-router'

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
      </div>
    )
  }
}

export default withRouter(Event);