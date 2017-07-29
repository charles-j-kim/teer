import React from 'react';

class ProfilePic extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <img src="https://www.webpagefx.com/data/marketing-persona-generator/img/placeholder.png"/>
        <div>
          FirstName LastName
        </div>
      </div>
    );
  }
}

export default ProfilePic;
