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
      <div>
        <img src="http://prod.static.panthers.clubs.nfl.com/assets/images/community/header-charity-events.jpg" className=""></img>
        <h3> {this.props.upcomingEventTitle} </h3>
        <h5> {this.props.upcomingEventDate} </h5>
      </div>
    )
  }
}

export default UpcomingEvent;