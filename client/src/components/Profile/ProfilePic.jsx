import React from 'react';

const ProfilePic = function(props) {
  return (
    <div>
      <img className="userprofile-img" src={props.img}/>
      <div className="userprofile-name">
        {props.firstName} {props.lastName}
      </div>
    </div>
  );
};

export default ProfilePic;
