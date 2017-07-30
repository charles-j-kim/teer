import React from 'react';
import ReactDOM from 'react-dom';
import UpcomingEvent from './UpcomingEvent.jsx'
import axios from 'axios';

class UpcomingEventList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      upcomingEvents: []
    }
  }

  componentWillMount() {
    axios.get('/events/upcoming')
    .then(response => {
      console.log(response.data);
      let resData = response.data;
      this.setState({
        upcomingEvents: response.data
      });
    })
    .catch(error => {
      console.error(error);
    })
  }

  render () {
    return (
      <div>
        {
          this.state.upcomingEvents.map(function(event, i){
            return(
              <UpcomingEvent
                upcomingEventImageSrc={event.event_img_url}
                upcomingEventTitle={event.name}
                upcomingEventDate={String(event.start_date_hr).slice(0,10)}
                key={i}
              >
              </UpcomingEvent>
            )
          })
        }
      </div>
    )
  }
}

export default UpcomingEventList;
