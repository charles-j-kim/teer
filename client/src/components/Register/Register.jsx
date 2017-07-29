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
            <h3>Teer page</h3>
            <h2>Teer</h2>
            <img className="banner-image" src="./assets/teer_volunteers_aspect_ratio_16_9.jpg"></img>

            <RegisterForm />

        </div>
      </div>
    )
  }
}

export default Register