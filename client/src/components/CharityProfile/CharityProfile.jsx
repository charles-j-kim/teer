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
      charityId: 1
    };
  }

  componentDidMount() {
    // axios.get('/charity')
    // .then(response => {
    //   this.setState({
    //     charity: response
    //   });
    // })
    // .catch(error => {
    //   console.error(error);
    // });
  }

  render() {
    return (
      <div>
        <img src="https://targetcareers.co.uk/sites/targetcareers.co.uk/files/public/field/image/Types-of-jobs-and-employers-in-charity-work.jpg" />
        <img src="http://www.retail-merchandiser.com/images/AMERICANRED.jpg" />
        <div>
          <span>American Red Cross</span>
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
          <About />
          <Reviews />
          <UpcomingEvents />
          <PastEvents />
        </div>
      </div>
    );
  }
}

export default withRouter(CharityProfile);
