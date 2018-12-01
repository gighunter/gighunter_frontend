import React, { Component } from 'react';

export default class App extends React.Component {
  constructor(props){
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
