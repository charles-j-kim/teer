import React from 'react';
import ReactDOM from 'react-dom';

class AboutEventCharity extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentWillMount() {
  }

  render () {
    return (
      <div>
        <h2> About {this.props.charityName} </h2>
        <h3> {this.props.charityLocation} </h3>
        <p> {this.props.charityDescription} </p>
      </div>
    )
  }
}

export default AboutEventCharity;