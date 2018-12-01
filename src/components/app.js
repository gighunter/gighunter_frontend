import React, { Component } from 'react';
import Header from '../containers/Header';
import { Link } from 'react-router-dom';


export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hello: '' }
  }

  render() {
    return (
      <div>
       App
      </div>
    );
  }
}
