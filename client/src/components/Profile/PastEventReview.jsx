import React from 'react';

class PastEventReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div>On 07/21/2017 you wrote</div>
          <div>
            <span>&#9733;</span>
            <span>&#9733;</span>
            <span>&#9733;</span>
            <span>&#9733;</span>
            <span>&#9733;</span>
          </div>
          <div>
            The event was great, had a meaningful time with awesome people. Glad I participated.
          </div>
      </div>
    );
  }
}

export default PastEventReview;