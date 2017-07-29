import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { withRouter} from 'react-router'

class Loginform extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
    this.email = this.email.bind(this);
    this.password = this.password.bind(this);
  }

  onClick() {
    axios.post('/login', {
      email: this.state.email,
      password: this.state.password
    })
    .then(response => {
      window.localStorage.loggedIn = "true";
      this.props.history.push('/');
    })
    .catch(error => {
      console.error('Error from server ', error);
      alert('You typed in the wrong email and/or password!');
    });
  }

  email(e) {
    this.setState({email: e.target.value});
  }

  password(e) {
    this.setState({password: e.target.value});
  }

  render () {
    return (
      <div className="box">
        <form className="register-form">
          <input type="text" className="input" placeholder="Enter your Email" onChange={this.email}/>
          <br/>
          <input type="password" className="input" placeholder="password" placeholder="Enter your Password" onChange={this.password}/>
          <br/>
          <button className="register" type="submit" onClick={this.onClick}> Register </button>
        </form>
      </div>
    )
  }
}

export default withRouter(Loginform);