import React from 'react';
import ReactDOM from 'react-dom';

class EventReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentWillMount() {

  }

  render () {
    return (
      <div>
        <img src={this.props.userProfilePictureSrc} className=""></img>
        <h2> {this.props.name} </h2>
        <p> {this.props.userReview} </p>
      </div>
    )
  }
}

export default EventReview;