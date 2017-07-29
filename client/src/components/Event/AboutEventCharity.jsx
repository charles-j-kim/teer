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
        <h1> About Event Charity </h1>
        <h2> Name: {this.props.charityName} </h2>
        <h3> Location: {this.props.charityLocation} </h3>
        <p> Description: {this.props.charityDescription} </p>
      </div>
    )
  }
}

export default AboutEventCharity;