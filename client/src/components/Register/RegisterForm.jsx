import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { withRouter} from 'react-router'

class RegisterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      description: ''
    }
    this.onClick = this.onClick.bind(this);
    this.firstName = this.firstName.bind(this);
    this.lastName = this.lastName.bind(this);
    this.email = this.email.bind(this);
    this.password = this.password.bind(this);
    this.description = this.description.bind(this);
  }

  onClick(e) {
    e.preventDefault();
    axios.post('/register', {
      first_name: this.state.firstName,
      last_name: this.state.lastName,
      email: this.state.email,
      password: this.state.password,
      introduction: this.state.description
    })
    .then(response => {
      console.log('Success from server');
      this.props.history.push('/login');
    })
    .catch(error => {
      console.error('Error from server ', error);
    });
  }

  firstName(e) {
    this.setState({firstName: e.target.value});
  }

  lastName(e) {
    this.setState({lastName: e.target.value});
  }

  email(e) {
    this.setState({email: e.target.value});
  }

  password(e) {
    this.setState({password: e.target.value});
  }

  description(e) {
    this.setState({description: e.target.value});
  }

  render () {
    return (
      <div className="box">
        <form className="register-form">
          <input type="text" className="inputFirstName" placeholder="First Name" onChange={this.firstName}/>
          <input type="text" className="inputLastName" placeholder="Last Name" onChange={this.lastName}/>
          <br/>
          <input type="text" className="input" placeholder="Enter your Email" onChange={this.email}/>
          <br/>
          <input type="password" className="input" placeholder="password" placeholder="Enter your Password" onChange={this.password}/>
          <br/>
          <textarea type="text" className="inputBio" placeholder="Tell us about yourself!" onChange={this.description}/>
          <br/>
          <button className="register" type="submit" onClick={this.onClick}> Register </button>
        </form>
      </div>
    )
  }
}

export default withRouter(RegisterForm);
