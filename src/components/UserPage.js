import React from 'react';

const BASE_URL = 'http://localhost:3000/api/v1/'
class UserPage extends React.Component {
  state = {
    user: {}
  }

  componentDidMount = () => {
    const jwt = localStorage.getItem('authToken');
    fetch(BASE_URL + `users/${this.props.match.params.id}`, {
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
  // componentDidMount = () => {
  //   const jwt = localStorage.getItem('authToken');
  //   fetch(BASE_URL + `users/${userId}`  , {
  //     method: "GET",
  //     headers: {
  //       'Content-Type': 'application/json',
  //       "Authorization": `Bearer ${jwt}`
  //     }
  //   })
  //   .then(response => response.json())
  //   .then(json => this.setState({
  //     user: json
  //   }))
  // }
  render(){
    return (
      <div className="landing_container">
      <p>this is a user page. stop it.</p>
      <img width="200px" src={this.state.user.img_url} alt="user_img"/>
      <h3>{this.state.user.first_name} {this.state.user.last_name}</h3>
      <p>{this.state.user.city}</p>
      <p>{this.state.user.bio}</p>
      </div>
    );
  }
};

export default UserPage;
