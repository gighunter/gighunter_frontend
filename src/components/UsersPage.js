import React, {Component} from 'react';

const BASE_URL = 'http://localhost:3000/api/v1/'
class UsersPage extends Component {
  state = {
    users: []
  }
  componentDidMount = () => {
    if(localStorage.getItem('authToken')){
      this.getUserData()
    } else{
      console.log('u fagg')
    }
  }

  getUserData = () => {
    const jwt = localStorage.getItem('authToken');
    fetch(BASE_URL + 'users', {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        "Authorization": `Bearer ${jwt}`
      }
    }).then(resp => resp.json())
    .then(json => this.setState({
      users: json
    }, () => console.log(this.state)))
  }
  render(){
    return(
      <div>{this.state.users && this.state.users.map(user => (
        <div>
          <img width="200px" src={user.img_url} alt='user_img'/>
          <p>{user.first_name}</p>
          <p>{user.last_name}</p>
          <p>{user.city}</p>
        </div>
      ))}</div>
    )
  }
}

export default UsersPage
