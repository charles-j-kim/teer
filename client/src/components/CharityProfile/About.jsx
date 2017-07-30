import React from 'react';

const About = function(props) {
  return (
    <div>
      <h3>About</h3>
      <span>{props.description}</span>
    </div>
  );
};

export default About;