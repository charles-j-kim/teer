import React from 'react';
import { withRouter} from 'react-router';
import axios from 'axios';
import About from './About.jsx';
import Reviews from './Reviews.jsx';
import UpcomingEvents from './UpcomingEvents.jsx';
import PastEvents from './PastEvents.jsx';

class CharityProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      charityId: 1,
      org_name: '',
      description: '',
      cover_img_url: '',
      small_img_url: '',
    };
  }

  componentDidMount() {
    axios.get(`/view/charity/${this.state.charityId}`)
    .then(response => {
      console.log(response.data);
      let resData = response.data;
      this.setState({
        org_name: resData.org_name,
        description: resData.description,
        cover_img_url: resData.cover_img_url,
        small_img_url: resData.small_img_url,
      });
    })
    .catch(error => {
      console.error(error);
    });

    axios.get(`/reviews/charity/${this.state.charityId}`)
    .then(response => {
      console.log('SECOND', response.data.rows);
    })
    .catch(error => {
      console.error(error);
    });
  }

  render() {
    return (
      <div>
        <img src={this.state.cover_img_url} />
        <img src={this.state.small_img_url} />
        <div>
          <span>{this.state.org_name}</span>
          <span>San Francisco, CA, United States</span>
        </div>
        <div>
          <span>About</span>
          <span>Reviews</span>
          <span>Upcoming Events</span>
          <span>Past Events</span>
          <span>Location</span>
        </div>
        <div>
          <About description={this.state.description} />
          <Reviews />
          <UpcomingEvents />
          <PastEvents />
        </div>
      </div>
    );
  }
}

export default withRouter(CharityProfile);
