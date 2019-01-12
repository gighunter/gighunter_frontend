import React, {Component} from 'react';
import { Link } from 'react-router-dom';

const BASE_URL = 'http://localhost:3000/api/v1/'
class UsersPage extends Component {
  state = {
    users: []
  }
  componentDidMount = () => {
    const jwt = localStorage.getItem('authToken');
    if(!jwt || jwt == "undefined"){
      this.props.history.push('/login')
    } else {
      this.getUserData(jwt)
    }
  }

  getUserData = (jwt) => {
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
        <Link to={`users/${user.id}`}>
        <div>
          <img width="200px" src={user.img_url} alt='user_img'/>
          <p>{user.first_name} {user.last_name}</p>
          <p>{user.city}</p>
        </div>
        </Link>
      ))}</div>
    )
  }
}

export default UsersPage
