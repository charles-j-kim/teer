import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter} from 'react-router';
import Userinfo from './Userinfo.jsx';
import Eventstream from './Eventstream.jsx';
import Filter from './Filter.jsx';
import axios from 'axios';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: 'Joe',
      lastName: 'Doe',
      profilePic: 'https://content-static.upwork.com/uploads/2014/10/02123010/profile-photo_friendly.jpg',
      events: [
        {
          ID:"3",
          eventImage:"https://www.quickenloans.com/blog/wp-content/uploads/2015/09/building-a-house.jpg",
          eventTitle:"Come build a house",
          date: "Wednesday, July 26, 2017",
          organisation: "Red Cross"
        },
        {
          ID:"4",
          eventImage:"https://www.quickenloans.com/blog/wp-content/uploads/2015/09/building-a-house.jpg",
          eventTitle:"Come a house",
          date: "Wednesday, october 26, 2017",
          organisation: "coding  Cross"
        },
        {
          ID:"4",
          eventImage:"https://www.quickenloans.com/blog/wp-content/uploads/2015/09/building-a-house.jpg",
          eventTitle:"Come a house",
          date: "Wednesday, october 26, 2017",
          organisation: "coding  Cross"
        }
      ]
    }
  }

  componentWillMount() {
    if (window.localStorage.loggedIn !== "true") {
      this.props.history.push('/login');
    }
  }

  componentDidMount() {
    axios.get('/events')
    .then(response => {
      console.log(response)
      this.setState({events: response.data.rows});
    })
    .catch(error => {
      console.error(error);
    });
  }

  render () {
    return (
      <div>
      <div className="toolbar">
        <img className="logo-image" src="./assets/teer_logo.png"></img>
          <div className="userinfo">
            <Userinfo profilePic={this.state.profilePic} firstName={this.state.firstName} lastName={this.state.lastName} />
          <div>
          </div>
      </div>
      <div className="city-image-box">
      </div>
      <div className="filter-box">
      <Filter />
      </div>
      <div className="home-body">
      <h1 className="leftmargin">This week</h1>
      <Eventstream events={this.state.events}/>
      </div>
      </div>
      </div>
    )
  }
}

export default withRouter(Home);