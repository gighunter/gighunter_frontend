import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Header from '../containers/Header';
import LoginContainer from '../containers/LoginContainer';
import SignUpContainer from '../containers/SignUpContainer';
import NotFound from './NotFound';
import Home from './Home';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hello: '' };
  }

  render() {
    return (
      <Router>
        <Switch>
          <Header/>
          <Route exact component={Home}            path="/home" />
          <Route exact component={LoginContainer}  path="/Login" />
          <Route exact component={SignUpContainer} path="/Sign_Up" />
          <Route       component={NotFound} />
        </Switch>
      </Router>
    );
  }
}
