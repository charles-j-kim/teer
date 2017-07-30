import React from 'react';
import ReactDOM from 'react-dom';
import UpcomingEvent from './UpcomingEvent.jsx'

class UpcomingEventList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      "upcomingEvents":[
        {
          "src":"./assets/bla",
          "title":"Code2040 Hackathon",
          "date":"Wednesday, August2"
        },
        {
          "src":"./assets/bla",
          "title":"RedCross Food Drive",
          "date":"Thursday, August4"
        },
        {
          "src":"./assets/bla",
          "title":"Save the Dolphins Fundraiser",
          "date":"Friday, August 5"
        },
      ]
    }
  }

  componentWillMount() {

  }

  render () {
    return (
      <div>
        {
          this.state.upcomingEvents.map(function(event, i){
            return(
              <UpcomingEvent
                upcomingEventImageSrc={event.src}
                upcomingEventTitle={event.title}
                upcomingEventDate={event.date}
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