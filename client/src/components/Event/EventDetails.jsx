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
        <h1> {this.props.eventTitle} </h1>
        <h3> {this.props.eventDate} </h3>
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