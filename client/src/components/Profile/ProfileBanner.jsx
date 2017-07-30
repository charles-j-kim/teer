import React from 'react';

const ProfileBanner = function(props) {
  let joinedDate = new Date(props.joined);
  const months = {
    0: 'January',
    1: 'February',
    2: 'March',
    3: 'April',
    4: 'May',
    5: 'June',
    6: 'July',
    7: 'August',
    8: 'September',
    9: 'October',
    10: 'November',
    11: 'December',
  };
  
  return (
    <div>
      <div className="hi-name">Hi, I'm {props.firstName}!</div>
      <span className="h3-white">San Francisco, CA, United States</span>
      <span className="h3-white"> ● </span>
      <span className="h3-white">Joined in {months[joinedDate.getMonth()]} {joinedDate.getFullYear()}</span>
    </div>
  );
};

export default ProfileBanner;