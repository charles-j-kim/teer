import React from 'react';
import ReactDOM from 'react-dom';

class ProfileStats extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div>
          <div>300</div>
          <div>Teer Points</div>
        </div>
        <div>
          <div>20</div>
          <div>Events Attended</div>
        </div>
        <div>
          <div>30</div>
          <div>Hours of Service</div>
        </div>
      </div>
    );
  }
}

export default ProfileStats;
