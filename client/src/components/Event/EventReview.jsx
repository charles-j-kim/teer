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
