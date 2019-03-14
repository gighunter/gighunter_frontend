import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from '../containers/Header';
import LoginContainer from '../containers/LoginContainer';
import SignUpContainer from '../containers/SignUpContainer';
import NotFound from './NotFound';
import Home from './Home';
import UsersPage from './UsersPage'
import UserPage from './UserPage'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { user: {} };
  }

// // AS SOON AS USER LOGS IN WITH THEIR EMAIL AND PASSWORD, AN AUTH TOKEN IS RETURNED
// // WE WILL SET THIS IN THE LOCAL STORAGE FOR ALL FUTURE REQUESTS
//   componentDidMount = () => {
//     fetch('http://localhost:3000/authenticate?email=rick@rick.com&password=rick', {
//       method: "POST",
//       headers:{
//       'Content-Type': 'application/json',
//   }
// }).then(resp => resp.json()).then(json => this.setAuthToken(json)).then(() => this.getUserData())
//   }
//
// // SETTING THE AUTH TOKEN IN LOCAL STORAGE
//   setAuthToken = (json) => {
//     localStorage.setItem('authToken', json.auth_token);
//     this.setState({
//       user: {
//         user_id: json.user_id
//       }
//     });
//   }

// EXAMPLE OF HOW TO USE THE AUTH TOKEN TO GET DATA.
  getUserData = () => {
    const jwt = localStorage.getItem('authToken');
    fetch(`http://localhost:3000/api/v1/users/${this.state.user.user_id}`, {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        "Authorization": `Bearer ${jwt}`
      }
    }).then(resp => resp.json())
    .then(json => this.setState({
      user: json
    }, () => console.log(this.state)))
  }

  logOut = () => {
    localStorage.clear();
  };

  render() {
    return (
      <Router>
        <div className="app">
          <Header logOut={this.logOut}/>
          <div className="page-body">
            <Switch>
              <Route exact component={Home} props={this.state} path="/" />
              <Route exact component={LoginContainer}  path="/login" />
              <Route exact component={SignUpContainer} path="/sign-up" />
              <Route exact component={UsersPage} path="/users" />
              <Route exact component={UserPage} path="/users/:id"/>
              <Route       component={NotFound} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}
