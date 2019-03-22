import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import util from '../utils/custom_loggers';

const BASE_URL = 'http://localhost:3000/api/v1/';

class Home extends React.Component {
  state = {
    user: {}
  }

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  componentDidMount = () => {
    const jwt = localStorage.getItem('authToken');
    if(!jwt || jwt === 'undefined' ){
      this.props.history.push('/login')
    }
    const userId = localStorage.getItem('user_id')
    fetch(BASE_URL + `users/${userId}`  , {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        "Authorization": `Bearer ${jwt}`
      }
    })
    .then(response => response.json())
    .then(json => this.setState({
      user: json
    }))
  }

  render() {
    return (
      <div className="landing_container">
        <div className="landing_container__profile-picture">
          <div className="card">
            <img src={this.state.user.img_url} />
            <div className="card-information">
              <div>
                { this.state.user.first_name }
                {' '}
                { this.state.user.last_name }
              </div>
              <div>
                { this.state.user.bio }
                {' '}
                { this.state.user.city }
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;
