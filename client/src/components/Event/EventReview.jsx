import React from 'react';
import ReactDOM from 'react-dom';

class EventReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentWillMount() {

  }

  render () {
    return (
      <div>
        <img src={this.props.upcomingEventImageSrc} className=""></img>
        <h3> {this.props.upcomingEventTitle} </h3>
        <h5> {this.props.upcomingEventDate} </h5>
      </div>
    )
  }
}

export default EventReview;