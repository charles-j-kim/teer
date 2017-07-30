import React from 'react';
import ReactDOM from 'react-dom';

class UpcomingEvent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentWillMount() {

  }

  render () {
    return (
      <div className="upcomingevent">
        <div className="event-image-container">
        <img className="event-image" src="http://prod.static.panthers.clubs.nfl.com/assets/images/community/header-charity-events.jpg"></img>
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