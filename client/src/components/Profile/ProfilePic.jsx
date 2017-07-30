import React from 'react';

const ProfilePic = function(props) {
  return (
    <div>
      <img src={props.img}/>
      <div>
        {props.firstName} {props.lastName}
      </div>
    </div>
  );
};

export default ProfilePic;
