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
      <h1>Hi, I'm {props.firstName}!</h1>
      <span>San Francisco, CA, United States</span>
      <span> ● </span>
      <span>Joined in {months[joinedDate.getMonth()]} {joinedDate.getFullYear()}</span>
    </div>
  );
};

export default ProfileBanner;