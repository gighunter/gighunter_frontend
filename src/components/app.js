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
        <div>
          <Switch>
            <Header />
            <Route exact path="/" component={Home} />
            <Route exact path="/Login" component={LoginContainer} />
            <Route exact path="/Sign_Up" component={SignUpContainer} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}
