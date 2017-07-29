import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter} from 'react-router'

class Home extends React.Component {
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
        <h1>HomePage</h1>
        <h3>Hello world from Home</h3>
      </div>
    )
  }
}

export default withRouter(Home);