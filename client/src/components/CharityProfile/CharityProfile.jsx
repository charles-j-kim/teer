import React from 'react';
import { withRouter} from 'react-router';
import axios from 'axios';
import About from './About.jsx';
import Reviews from './Reviews.jsx';
import UpcomingEvents from './UpcomingEvents.jsx';
import PastEvents from './PastEvents.jsx';
import Userinfo from './Userinfo.jsx';


class CharityProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: 'Joe',
      lastName: 'Doe',
      profilePic: 'https://content-static.upwork.com/uploads/2014/10/02123010/profile-photo_friendly.jpg',
      charityId: 1,
      org_name: '',
      description: '',
      cover_img_url: '',
      small_img_url: '',
      location: '',
      reviews: [],
      pastEvents: [],
      upcomingEvents: []
    };
    this.clickProfile = this.clickProfile.bind(this);
    this.clickLogo = this.clickLogo.bind(this);
  }

  componentDidMount() {
    if (window.localStorage.loggedIn !== "true") {
      this.props.history.push('/login');
    }
    axios.get(`/view/charity/${this.props.location.state.charityID}`)
    .then(response => {
      console.log(response.data);
      let resData = response.data;
      this.setState({
        org_name: resData.org_name,
        description: resData.description,
        cover_img_url: resData.cover_img_url,
        small_img_url: resData.small_img_url,
        location: resData.location
      });
    })
    .catch(error => {
      console.error(error);
    });
    axios.get(`/reviews/charity/${this.props.location.state.charityID}`)
    .then(response => {
      console.log('SECOND', response.data.rows);
      this.setState({
        reviews: response.data.rows
      });
    })
    .catch(error => {
      console.error(error);
    });

    axios.get(`/events/charity/${this.props.location.state.charityID}`)
    .then(response => {
      console.log('THIRD', response);
      let pastEvents = [];
      let upcomingEvents = [];
      response.data.rows.forEach(event => {
        let endTime = new Date(event.end_date_hr);
        endTime < new Date() ? pastEvents.push(event) : upcomingEvents.push(event); 
      });
      this.setState({
        pastEvents: pastEvents,
        upcomingEvents: upcomingEvents
      });
    })
    .catch(error => {
      console.error(error);
    });
  }

  clickProfile() {
    this.props.history.push('/profile'); 
  }

  clickLogo() {
    this.props.history.push('/'); 
  }

  render() {
    window.scrollTo(0,0);
    return (
      <div>
        <div className="toolbar">
          <img className="logo-image" src="./assets/teer_logo.png" onClick={this.clickLogo}></img>
          <div className="userinfo">
            <Userinfo profilePic={this.state.profilePic} firstName={this.state.firstName} lastName={this.state.lastName} onClick={this.clickProfile}/>
          </div>
        </div>
        <div className="charity-cover-container">
          <img className="charity-cover" src={this.state.cover_img_url} />
        </div>
        <div className="charityprofile-body">
          <div className="charityprofile-header">
            <img className="charity-profile" src={this.state.small_img_url} />
            <div className="charityprofile-header-right">
              <div className="charity-name">{this.state.org_name}</div>
              <h3>{this.state.location}</h3>
            </div>
          </div>
          <div className="charity-row2">
            <div className="charity-nav">
              <span className="button">About</span><br/>
              <span className="button">Reviews</span><br/>
              <span className="button">Upcoming Events</span><br/>
              <span className="button">Past Events</span><br/>
              <span className="button">Location</span>
            </div>
             <div className="charity-mainbody">
              <About description={this.state.description} />
              <hr/>
              <Reviews reviews={this.state.reviews} />
              <hr/>
              <UpcomingEvents upcomingEvents={this.state.upcomingEvents} />
              <hr/>
              <PastEvents pastEvents={this.state.pastEvents} />
            </div>
          </div>
      </div>
      </div>
    );
  }
}

export default withRouter(CharityProfile);
