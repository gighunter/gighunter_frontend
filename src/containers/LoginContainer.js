import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { requestLoginInformation } from '../actions/index';

class LoginContainer extends React.Component{

  constructor(props) {
    super(props);
    this.state = { hi: '' }
  }

  render(){
    return(
      <div>

      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ requestLoginInformation }, dispatch);
};

export default LoginContainer;
