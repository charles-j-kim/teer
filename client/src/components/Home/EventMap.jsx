import React from 'react';
import ReactDOM from 'react-dom';

class EventMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
    // "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3161.3898455717454!2d-122.38757888530672!3d37.59298303037188!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f77b36981ca11%3A0x71e53e150ec958a9!2sAmerican+Red+Cross!5e0!3m2!1sen!2sus!4v1501383238941"
  }

  render () {
    return (
      <iframe src={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3161.3898455717454!2d-122.38757888530672!3d37.59298303037188!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f77b36981ca11%3A0x71e53e150ec958a9!2sAmerican+Red+Cross!5e0!3m2!1sen!2sus!4v1501383238941"} style= {{"width":"600px", "height":"450px"}} frameBorder="0" allowFullScreen></iframe>
    )
  }
}

export default EventMap;


