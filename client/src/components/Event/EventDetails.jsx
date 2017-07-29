import React from 'react';
import ReactDOM from 'react-dom';

class EventDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentWillMount() {

  }

  render () {
    return (
      <div>
        <h1> Event Title: {this.props.eventTitle} </h1>
        <h3> Event Date: {this.props.eventDate} </h3>
        <p> Event Description: {this.props.eventDescription}</p>

        <h3> What to bring </h3>
        <ul>
          {
            this.props.whatToBring.map(function(item, i){
              return (<li key={i}> {item} </li>)
            })
          }
        </ul>

        <h3> Event Location </h3>
        <p> Begin: insert map here ? </p>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <p> End: insert map here ? </p>

      </div>
    )
  }
}

export default EventDetails;