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
      <div className="user-pastevents">
        <h5>{props.event.event_name}</h5>
        <h3>on {days[eventDate.getDay()]}, {months[eventDate.getMonth()]} {eventDate.getDate()}, {eventDate.getFullYear()}</h3>
        <span className="reviewMsg">{reviewMsg}</span>
      </div>
      <div className="teerpoints">
        <div className="earned-points">+{props.event.teer_points}</div>
        <div className="teer-points">Teer Points</div>
      </div>
      {props.event.rating === null ? '' :
      <div className="pasteventreview-box">
        <PastEventReview
          date={eventDate}
          rating={props.event.rating}
          comment={props.event.comment}
        />
      </div>
      }
    </div>
  );
};

export default PastEventItem;