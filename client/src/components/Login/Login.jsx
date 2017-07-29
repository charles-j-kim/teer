import React from 'react';
import ReactDOM from 'react-dom';
import LoginForm from './Loginform.jsx';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render () {



    return (
      <div id="login-page">
        <div className="RegisterBox">
          <img className="TEERwh" src="./assets/TEERwh.png"/>
          <LoginForm />
        </div>
      </div>
    )
  }
}

export default Login