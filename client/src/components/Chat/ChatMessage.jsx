import React from 'react';
import ReactDOM from 'react-dom';

class ChatMessage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {}
	}

	render () {
    return (
      <div class="chat-message clearfix">
        <img src={this.props.avatar} alt="" width="32" height="32"/>
        <div class="chat-message-content clearfix">
          <h5>{this.props.sender}</h5>
          <span class="chat-time">{this.props.time}</span>
          <p>{this.props.message}</p>
        </div>
      </div>
  	)
  }
}

export default ChatMessage;