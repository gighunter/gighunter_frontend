import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from '../containers/Header';
import LoginContainer from '../containers/LoginContainer';
import SignUpContainer from '../containers/SignUpContainer';
import NotFound from './NotFound';
import Home from './Home';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hello: '', user: {} };
  }

// AS SOON AS USER LOGS IN WITH THEIR EMAIL AND PASSWORD, AN AUTH TOKEN IS RETURNED
// WE WILL SET THIS IN THE LOCAL STORAGE FOR ALL FUTURE REQUESTS
  componentDidMount = () => {
    fetch('http://localhost:3000/authenticate?email=rick@rick.com&password=rick', {
      method: "POST",
      headers:{
      'Content-Type': 'application/json',
  }
}).then(resp => resp.json()).then(json => this.setAuthToken(json)).then(() => this.getUserData())
  }

// SETTING THE AUTH TOKEN IN LOCAL STORAGE
  setAuthToken = (json) => {
    localStorage.setItem('authToken', json.auth_token)
  }

// EXAMPLE OF HOW TO USE THE AUTH TOKEN TO GET DATA.
  getUserData = () => {
    fetch('http://localhost:3000/users/1', {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJleHAiOjE1NDUwNzQ4MzJ9.QZpCtc9tigJap5ZvnZaZPukr69jxotIzPuWYxjyIbR0"
      }
    }).then(resp => resp.json())
    .then(json => this.setState({
      user: {name: json.name, email: json.email, id: json.id}
    }, () => console.log(this.state)))
  }

  render() {
    return (
      <Router>
        <div>
          <Header />
          <div className="page-body">
            <Switch>
              <Route exact component={Home} props={this.state} path="/" />
              <Route exact component={LoginContainer}  path="/login" />
              <Route exact component={SignUpContainer} path="/sign-up" />
              <Route       component={NotFound} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}
