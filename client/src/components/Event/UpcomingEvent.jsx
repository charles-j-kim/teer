import React from 'react';
import ReactDOM from 'react-dom';

class UpcomingEvent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentWillMount() {
    console.log('props', this.props)
  }

  render () {
    return (
      <div className="upcomingevent">
        <div className="event-image-container">
        <img className="event-image" src={this.props.upcomingEventImageSrc}></img>
        </div>
        <div className="event-details">
          <div id="event-title">
            {this.props.upcomingEventTitle}
          </div>
          <div className="event-date">
            {this.props.upcomingEventDate}
          </div>
        </div>
      </div>
    )
  }
}

export default UpcomingEvent;
