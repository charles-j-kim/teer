import React from 'react';
import ReactDOM from 'react-dom';
import RTM from 'satori-rtm-sdk';

class Satori extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount() {
    var endpoint = "wss://jqzzb37s.api.satori.com";
    var appKey = "1fB713A35c8C7D7dE3DBc5Ad1A09fd8e";
    var channel = "teer-events";
    var client = new RTM(endpoint, appKey);

    client.on('enter-connected', function () {
      console.log('Connected to Satori RTM!', this);
    });

    var subscription = client.subscribe(channel, RTM.SubscriptionMode.SIMPLE);

    subscription.on('rtm/subscription/data', function (pdu) {
      pdu.body.messages.forEach(function (msg) {
        console.log('Got message:', msg);
      });
    });
    client.start();
  }

  publishMessage(){
    var message= {"body": "testing satori message posting"}

    client.publish(channel, message , function (pdu) {
      if (pdu.action === 'rtm/publish/ok') {
        console.log('Publish confirmed');
      } else {
        console.log('Failed to publish. RTM replied with the error  ' +
            pdu.body.error + ': ' + pdu.body.reason);
      }
    });

  }

  render () {
    return (
      <div>
        <h1> Satori Component </h1>
        <button> Publish message </button>
      </div>
    )
  }
}

export default Satori;












