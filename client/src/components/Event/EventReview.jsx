import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class EventReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviewData: []
    }
  }

  componentWillMount() {
    console.log('props', this.props)
  }

  render () {
    return (
      <div className="review">
        <div className="review-user">
          <img src={this.props.userProfilePictureSrc} className="review-profileimg"></img>
          <div className="review-name">
            {this.props.name}
          </div>
        </div>
        <div className="review-body">
          {this.props.userReview}
        </div>
      </div>
    )
  }
}

export default EventReview;
