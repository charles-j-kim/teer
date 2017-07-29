import React from 'react';

class ReviewItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div>
          <img src="http://findicons.com/files/icons/725/colobrush/128/user_man.png"/>
          <span>Charles K.</span>
        </div>
        <div>
          <span>
            The Blood Drive I participated with American Cross was awesome! Would do it anytime again!
          </span>
          <span>07/20/2017 ● Event Name</span>
        </div>
      </div>
    );
  }
}

export default ReviewItem;