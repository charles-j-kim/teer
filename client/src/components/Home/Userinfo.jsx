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
    		<div id="name">
    			{this.props.firstName} {this.props.lastName}
    		</div>
				<div id="profilepic">
        	<img className="profile-image" src={this.props.profilePic}></img>
				</div>
    	</div>
  	)
  }
}

export default withRouter(Userinfo);
