import React from 'react';
import ReactDOM from 'react-dom';

class EventButtons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: "eventDetails"
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e){
    this.setState({
      active: e.target.name
    })
    console.log(this.state.active);
  }

  render () {
    return (
      <div className="filter">
          <button id="eventDetails" name="eventDetails" type="button" onClick={this.handleClick}> Event Details</button>
          <button id="aboutUs" name="aboutUs" type="button" onClick={this.handleClick}> About Us </button>
          <button id="reviews" name="reviews" type="button" onClick={this.handleClick}> Reviews </button>
          <button id="upcomingEvents" name="upcomingEvents" type="button" onClick={this.handleClick}> Upcoming Events </button>
      </div>
    )
  }
}

export default EventButtons;