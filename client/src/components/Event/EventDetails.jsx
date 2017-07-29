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
        <h1> Event Details </h1>
        <h3> Event Date </h3>
        <p> Event Text Description about what the event is about (should wrap automatically ???)</p>

        <h3> What to bring </h3>
        <ul>
          <li> this will </li>
          <li> be a </li>
          <li> react-mapped </li>
          <li> list </li>
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