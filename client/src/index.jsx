import React from 'react';
import ReactDOM from 'react-dom';
import Login from './components/Login.jsx'
import Register from './components/Register/Register.jsx'
import Profile from './components/Profile.jsx'
import Event from './components/Event.jsx'
import Home from './components/home.jsx'
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { browserHistory } from 'react-router'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
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
            </Switch>
        </Router>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));