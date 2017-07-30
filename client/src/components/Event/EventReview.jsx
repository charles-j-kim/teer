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
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkKxeD83GnmGOdVNO96xnMHfS3TLV4enbX3W_sV-4yIgXfQrm7" className=""></img>
        <h2> {this.props.name} </h2>
        <p> {this.props.userReview} </p>
      </div>
    )
  }
}

export default EventReview;