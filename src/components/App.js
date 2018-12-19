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
    this.state = { hello: '' };
  }

  render() {
    return (
      <Router>
        <div>
          <Header />
          <div className="page-body">
            <Switch>
              <Route exact component={Home}            path="/" />
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
