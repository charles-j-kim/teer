import React from 'react';
import ReactDOM from 'react-dom';
import ChatMessage from './ChatMessage.jsx'

class Chat extends React.Component {
	constructor(props) {
    super(props);
    this.state = {
      chatInput: '',
      hideChat: false,
      chatMessages: [
      {
        time: "13:35",
        sender: "Ryan Perry",
        avatar: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/05c/3b3/0de3dc3.jpg",
        message: "Hi from the Teer-team, post your question or whatever is on your mind and we'll get back to you ASAP."
      }
      ]
    }
    this.chatInput = this.chatInput.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.closeChat = this.closeChat.bind(this);
    this.openChat = this.openChat.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
  }

  componentWillMount() {
    // Click event
    document.addEventListener("keydown", this.onKeyDown);
    // Satori socket logic
    this.rtm = new RTM("wss://q3in2cm3.api.satori.com", "a8f9eF59A173dC7ddb511EfDEeE0faaf");
    var subscription = this.rtm.subscribe('chats', RTM.SubscriptionMode.SIMPLE);
    
    var context = this;
    subscription.on('rtm/subscription/data', function (pdu) {
        console.log('This is what I received: ', pdu.body.messages);
        var msgs = context.state.chatMessages;
        msgs.push(pdu.body.messages[0])
        context.setState({chatMessages: msgs});
        context.setState({hideChat: false});
        context.refs.a.scrollTop = context.refs.a.scrollHeight;
    });

    this.rtm.on("data", function(pdu) {
      if (pdu.action.endsWith("/error")) {
          this.rtm.restart();
      }
    });

    this.rtm.start();
  }

  chatInput(e) {
    this.setState({chatInput: e.target.value});
    console.log(e.target.value);
  }

  handleKeyPress(e) {
    if (e.key === 'Enter') {
      var d = new Date();
      var message = {
        avatar: window.localStorage.img_url,
        time: d,
        sender: window.localStorage.first_name + ' ' + window.localStorage.last_name, 
        message: this.state.chatInput
      };
      this.rtm.publish('chats', message, function (pdu) {
        if (!pdu.action.endsWith('/ok')) {
          console.log('something went wrong');
        }
      });
      this.setState({chatInput: ''});
    }
  }

  closeChat(e) {
    this.setState({hideChat: true});
  }

  openChat(e) {
    this.setState({hideChat: false});
  }

  onKeyDown(e) {
    if (e.keyCode === 27) {
      this.setState({hideChat: true});
    }
  }

	render () {
	  return (
	  	<div>
        {!this.state.hideChat ? (
          <div id="live-chat">
            <header class="clearfix" onClick={this.closeChat}>
            <a class="chat-close">x</a>
            </header>
            <div class="chat">
              <div class="chat-history" style={styles.chat} ref = "a">
                {this.state.chatMessages.map(chat => <ChatMessage sender={chat.sender} time={chat.time} avatar={chat.avatar} message={chat.message}/>)}
              </div>
            </div>
            <div>
              <form class="chat-input">
                <fieldset>
                  <input type="text" value={this.state.chatInput} placeholder="Say something.." autofocus onChange={this.chatInput} onKeyPress={this.handleKeyPress}/>
                  <input type="hidden"/>
                </fieldset>
              </form>
            </div>
          </div>
        ) : (
          <div id="live-chat">
            <header class="clearfix" onClick={this.openChat}>
            <a class="chat-close">_</a>
            </header>
          </div>
        )}
	  	</div>
  	)
  }
}

const styles = {
  chat: {
    height: 275,
    overflow: "scroll"
  }
}

export default Chat;