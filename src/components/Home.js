import React from 'react';

const BASE_URL = 'http://localhost:3000/api/v1/';

class Home extends React.Component {
  state = {
    user: {}
  }

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
  render(){
    return (
      <div className="landing_container">
        <img width="300px" src={this.state.user.img_url} alt="user_img"/>
        <p>{this.state.user.first_name} {this.state.user.last_name}</p>
      </div>
    );
  }
};

export default Home;
