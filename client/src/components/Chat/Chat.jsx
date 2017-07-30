import React from 'react';
import ReactDOM from 'react-dom';
import ChatMessage from './ChatMessage.jsx'

class Chat extends React.Component {
	constructor(props) {
    super(props);
    this.state = {
      chatInput: '',
      chatMessages: [
      {
        time: "13:35",
        sender: "John Doe",
        avatar: "https://s-media-cache-ak0.pinimg.com/736x/c6/a4/64/c6a4645d9f9af45a9c9d7b094c18a47a--portrait-ideas-girl-photos.jpg",
        message: "Hey bro"
      },
      {
        time: "14:00",
        sender: "Jimmy Jones",
        avatar: "https://s-media-cache-ak0.pinimg.com/736x/c6/a4/64/c6a4645d9f9af45a9c9d7b094c18a47a--portrait-ideas-girl-photos.jpg",
        message: "Yooooo!"
      }
      ]
    }
    this.chatInput = this.chatInput.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  componentWillMount() {
    this.rtm = new RTM("wss://q3in2cm3.api.satori.com", "a8f9eF59A173dC7ddb511EfDEeE0faaf");
    var subscription = this.rtm.subscribe('chats', RTM.SubscriptionMode.SIMPLE);
    
    var context = this;
    subscription.on('rtm/subscription/data', function (pdu) {
        console.log('This is what I received: ', pdu.body.messages);
        var msgs = context.state.chatMessages;
        msgs.push(pdu.body.messages[0])
        context.setState({chatMessages: msgs});
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
      this.refs.a.scrollTop = this.refs.a.scrollHeight;
    }
  }

	render () {
	  return (
	  	<div>
        <div id="live-chat">
          <header class="clearfix">
          </header>
          <div class="chat">
            <div class="chat-history" style={styles.chat} ref = "a">
              {this.state.chatMessages.map(chat => <ChatMessage time={chat.time} sender={chat.sender} avatar={chat.avatar} message={chat.message}/>)}
            </div>
          </div>
          <div> 
            <form>
              <fieldset>
                <input type="text" value={this.state.chatInput} placeholder="Say something.." autofocus onChange={this.chatInput} onKeyPress={this.handleKeyPress}/>
                <input type="hidden"/>
              </fieldset>
            </form>
          </div>
        </div>
	  	</div>
  	)
  }
}

const styles = {
  chat: {
    height: 180,
    overflow: "scroll"
  }
}

export default Chat;