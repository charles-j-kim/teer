import React from 'react';
import ReactDOM from 'react-dom';

class RegisterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render () {
    return (
      <div className="box">
        <form className="register-form">
          <input type="text" placeholder="First Name"/>
          <input type="text" placeholder="Last Name"/>
          <br/>
          <input type="text" placeholder="Enter your Email"/>
          <br/>
          <input type="password" placeholder="password" placeholder="Enter your Password"/>
          <br/>
          <input type="text" placeholder="Tell us about yourself!"/>
          <br/>
          <button className="" type="submit"> Register </button>
        </form>
      </div>
    )
  }
}

export default RegisterForm