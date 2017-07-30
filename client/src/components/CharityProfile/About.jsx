import React from 'react';

const About = function(props) {
  return (
    <div>
      <h4>About</h4>
      <div className="charity-about">{props.description}</div>
    </div>
  );
};

export default About;