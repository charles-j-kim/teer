import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter} from 'react-router';

class Userinfo extends React.Component {
	constructor(props) {
		super(props);
		this.state = {}
    this.profilePageClick = this.profilePageClick.bind(this);
	}

  profilePageClick() {
    var userInfo = window.localStorage.userData;
    this.props.history.push('/profile');
  }

	render () {
    return (
    	<div class="userinfo" onClick={this.profilePageClick}>
        <div id="profilepic">
          <img className="profile-image" src={window.localStorage.img_url}></img>
        </div>
    		<div id="name">
    			{window.localStorage.first_name} {window.localStorage.last_name}
    		</div>
    	</div>
  	)
  }
}

export default withRouter(Userinfo);
