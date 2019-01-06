import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { requestLoginInformation } from '../actions/index';

class SignUpContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = { hi: '' }
  }

  render() {
    return (
      <div>
        <form action="index.html" method="post">
            <input type="txt" name="fname" placeholder="first name" required></input>
            <input type="txt" name="lname" placeholder="last name" required></input>
            <input type="email" name="email" placeholder="email" required></input>
            <input type="password" name="pwd" placeholder="password" required></input>
            <input type="txt" name="location" placeholder="location"></input>
            <input type="submit"></input> 
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({ requestLoginInformation }, dispatch);

export default connect(null, mapDispatchToProps)(SignUpContainer);
