import React from 'react';
import PastEventReview from './PastEventReview.jsx';

const PastEventItem = function(props) {
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
  let eventDate = new Date(props.event.end_date_hr);
  let reviewMsg = props.event.rating === null ? 'Write Review' : 'Edit Review';

  return (
    <div>
      <div>
        <span>{props.event.event_name}</span>
        <span>on {days[eventDate.getDay()]}, {months[eventDate.getMonth()]} {eventDate.getDate()}, {eventDate.getFullYear()}</span>
        <span>{reviewMsg}</span>
      </div>
      <div>
        <span>+{props.event.teer_points}</span>
        <span>Teer Points</span>
      </div>
      {props.event.rating === null ? '' :
        <PastEventReview
          date={eventDate}
          rating={props.event.rating}
          comment={props.event.comment}
        />
      }
    </div>
  );
};

export default PastEventItem;