import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter} from 'react-router';

class EventItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.eventDate = new Date(this.props.event.end_date_hr);
    this.clickedEvent = this.clickedEvent.bind(this);
  }

  clickedEvent() {
    console.log('THA PROPS: ', this.props.event)
    this.props.history.push({
      pathname: '/event',
      state: {
        eventID: this.props.event.id
      }
    });
  }

  render () {
    var eventDate = this.eventDate;
    return (
      <div>
        <div className="charity-upcomingevent" onClick={this.clickedEvent}>
          <h5>{this.props.event.name}</h5>
          <h3>on {days[eventDate.getDay()]}, {months[eventDate.getMonth()]} {eventDate.getDate()}, {eventDate.getFullYear()}</h3>
        </div>
      </div>
    )
  }
}

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



// const EventItem = function(props) {
//   const days = {
//     0: 'Sunday',
//     1: 'Monday',
//     2: 'Tuesday',
//     3: 'Wednesday',
//     4: 'Thursday',
//     5: 'Friday',
//     6: 'Saturday',
//   };
//   const months = {
//     0: 'January',
//     1: 'February',
//     2: 'March',
//     3: 'April',
//     4: 'May',
//     5: 'June',
//     6: 'July',
//     7: 'August',
//     8: 'September',
//     9: 'October',
//     10: 'November',
//     11: 'December',
//   };
//   let eventDate = new Date(props.event.end_date_hr);

//   return (
//     <div>
//       <div className="charity-upcomingevent">
//         <h5>{props.event.name}</h5>
//         <h3>on {days[eventDate.getDay()]}, {months[eventDate.getMonth()]} {eventDate.getDate()}, {eventDate.getFullYear()}</h3>
//       </div>
//     </div>
//   );
// };

export default withRouter(EventItem);
