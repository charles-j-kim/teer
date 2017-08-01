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
        <div className="one-chat">
        <img className="chat-img" src={this.props.avatar} alt="" width="32" height="32"/>

        <div className="sender-name">{this.props.sender}</div>
        <div class="chat-message-content clearfix">
          <div className="message">{this.props.message}</div>
        </div>

          <span className="chat-time">{this.props.time}</span>
        </div>
      </div>
  	)
  }
}

export default ChatMessage;