import React from 'react';
import ReactDOM from 'react-dom';
// var RTM = require("satori-rtm-sdk");



class Satori extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount() {
    // var endpoint = "wss://open-data.api.satori.com";
    // var appKey = "e9d525eDa77B9c5EAD22D6D8742e0620";
    // var channel = "teer-events";
    // var client = new RTM(endpoint, appKey);

    // client.on('enter-connected', function () {
    //   console.log('Connected to Satori RTM!');
    // });

    // var subscription = client.subscribe(channel, RTM.SubscriptionMode.SIMPLE);

    // subscription.on('rtm/subscription/data', function (pdu) {
    //   pdu.body.messages.forEach(function (msg) {
    //     console.log('Got message:', msg);
    //   });
    // });
    // client.start();

  }

  render () {
    return (
      <div>
        <h1> Satori Component </h1>
      </div>
    )
  }
}

export default Satori;












