import React from 'react';
import ReactDOM from 'react-dom';

class EventDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render () {
    const days = {
      0: 'Sunday',
      1: 'Monday',
      2: 'Tuesday',
      3: 'Wednesday',
      4: 'Thursday',
      5: 'Friday',
      6: 'Saturday',
    };
    const months = {
      0: 'January',
      1: 'February',
      2: 'March',
      3: 'April',
      4: 'May',
      5: 'June',
      6: 'July',
      7: 'August',
      8: 'September',
      9: 'October',
      10: 'November',
      11: 'December',
    };
    let eventDate = new Date(this.props.eventDate);

    return (
      <div>
        <h1> {this.props.eventTitle} </h1>
        <h3> {days[eventDate.getDay()]}, {months[eventDate.getMonth()]} {eventDate.getDate()}, {eventDate.getFullYear()} </h3>
        <p> {this.props.eventDescription}</p>

        {/* <h3> What to bring </h3>
        <ul>
          {
            this.props.whatToBring.map(function(item, i){
              return (<li key={i}> {item} </li>)
            })
          }
        </ul> */}


      </div>
    )
  }
}

export default EventDetails;