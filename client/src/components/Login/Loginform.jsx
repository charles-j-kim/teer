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
    this.onClick = this.onClick.bind(this);
    this.handleRegister = this.handleRegister.bind(this);
  }

  onClick() {
    axios.post('/login', {
      email: this.state.email,
      password: this.state.password
    })
    .then(response => {
      window.localStorage.loggedIn = "true";
      window.localStorage.email = response.data.email;
      window.localStorage.first_name = response.data.first_name;
      window.localStorage.last_name = response.data.last_name;
      window.localStorage.id = response.data.id;
      window.localStorage.img_url = response.data.img_url;
      window.localStorage.total_teer_points = response.data.total_teer_points;
      window.localStorage.introduction = response.data.introduction;
      window.localStorage.created_at = response.data.created_at;
      this.props.history.push('/');
    })
    .catch(error => {
      console.error('Error from server ', error);
      alert('You typed in the wrong email and/or password!');
    });
  }

  handleRegister() {
    this.props.history.push('/register');
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
          <button className="register" type="submit" onClick={this.onClick}> Login </button>
          <button className="register" type="submit" onClick={this.handleRegister}> Register </button>
        </form>
      </div>
    )
  }
}

export default withRouter(Loginform);