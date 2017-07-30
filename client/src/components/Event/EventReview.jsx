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
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkKxeD83GnmGOdVNO96xnMHfS3TLV4enbX3W_sV-4yIgXfQrm7" className="review-profileimg"></img>
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