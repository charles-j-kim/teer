import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter} from 'react-router'

class EventBanner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentWillMount() {

  }

  render () {
    return (
      <img src={this.props.src} className={this.props.className}></img>
    )
  }
}

export default EventBanner;