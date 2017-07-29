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
        <h3> Location of charity, CA USA </h3>
        <p> This description of charity will be pulled from database as well </p>
      </div>
    )
  }
}

export default AboutEventCharity;