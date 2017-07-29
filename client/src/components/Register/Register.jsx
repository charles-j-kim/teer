import React from 'react';
import ReactDOM from 'react-dom';
import RegisterForm from './RegisterForm.jsx'

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render () {
    return (
      <div id="register-page">
          <div className="">
            <div className="RegisterBox">
              <img className="TEERwh" src="./assets/TEERwh.png"/>
              <RegisterForm />
            </div>
        </div>
      </div>
    )
  }
}

export default Register