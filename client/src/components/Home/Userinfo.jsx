import React from 'react';
import ReactDOM from 'react-dom';

class Userinfo extends React.Component {
	constructor(props) {
		super(props);
		this.state = {}
	}

	render () {
    return (
    	<div class="userinfo">
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

export default Userinfo;