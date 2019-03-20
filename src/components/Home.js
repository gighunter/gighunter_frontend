import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';

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
        <div className="landing-container__profile-picture">
          <Card style={{ maxWidth: '400px', maxHeight: '400px', margin: ' 50px 75px' }}>
            <Card.Img
              variant="top"
              style={{ maxWidth: '400px', maxHeight: '400px' }}
              src={this.state.user.img_url}
            />
            <Card.Body>
              <Card.Title style={{ textAlign: 'center', fontSize: '2.50rem', padding: '5px' }}>
                { this.state.user.first_name }
                {' '}
                { this.state.user.last_name }
              </Card.Title>
            </Card.Body>
          </Card>
        </div>
      </div>
    )
  }
}

export default Home;
