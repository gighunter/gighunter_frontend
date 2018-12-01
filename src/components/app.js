import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom'
import Header from '../containers/Header';
import LoginContainer from '../containers/LoginContainer';
import SignUpContainer from '../containers/SignUpContainer';

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hello: '' }
  }

  render() {
    return (
      <Router>
        <div>
          <Header />
          <Route exact path="/Login" component={LoginContainer} />
          <Route exact path="/Sign_Up" component={SignUpContainer} />
        </div>
      </Router>
    );
  }
}
