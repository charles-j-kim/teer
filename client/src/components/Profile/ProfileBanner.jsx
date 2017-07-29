import React from 'react';

class ProfileBanner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>Hi, I'm Charles!</h1>
        <span>San Francisco, CA, United States</span>
        <span> ● </span>
        <span>Joined in November 2016</span>
      </div>
    );
  }
}

export default ProfileBanner;