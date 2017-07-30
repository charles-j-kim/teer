import React from 'react';

// Need to dynamically update the stats
const ProfileStats = function(props) {
  return (
    <div className="stat-box">
      <div className="stat">
        <div className="stat-num">300</div>
        <div className="stat-title">Teer<br/>Points</div>
      </div>
      <div className="stat">
        <div className="stat-num">20</div>
        <div className="stat-title">Events<br/>Attended</div>
      </div>
      <div className="stat">
        <div className="stat-num">30</div>
        <div className="stat-title">Hours of<br/>Service</div>
      </div>
    </div>
  );
};

export default ProfileStats;
