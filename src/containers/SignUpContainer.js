import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { sendSignUpInformation } from '../actions/index';

class SignUpContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = { hi: '' }
  }

  render() {
    return (
      <div>
        <br />
        <br />
        <br />
        <br />
        <p>
          Sign Up Container
        </p>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({ requestLoginInformation }, dispatch);

export default connect(null, mapDispatchToProps)(SignUpContainer);
