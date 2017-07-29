import React from 'react';
import ReactDOM from 'react-dom';
import Login from './components/Login/Login.jsx';
import Register from './components/Register/Register.jsx';
import Profile from './components/Profile/Profile.jsx';
import Event from './components/Event/Event.jsx';
import Home from './components/Home/home.jsx';
import Satori from './components/Satori/Satori.jsx';
import CharityProfile from './components/CharityProfile/CharityProfile.jsx';
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { browserHistory } from 'react-router';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render () {
    return (
      <div>
        <Router history={browserHistory}>
            <Switch>
              <Route exact path="/" component={Home}></Route>
              <Route exact path="/login" component={Login}></Route>
              <Route exact path="/register" component={Register}></Route>
              <Route exact path="/profile" component={Profile}></Route>
              <Route exact path="/event" component={Event}></Route>
              <Route exact path="/satori" component={Satori}></Route>
              <Route exact path="/charityprofile" component={CharityProfile}></Route>
            </Switch>
        </Router>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));