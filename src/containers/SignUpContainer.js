import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { requestLoginInformation } from '../actions/index';

class SignUpContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      city: ""
    }
  }

  handleFormInput = (e) => {
    debugger
    this.setState({
      [e.target.name]: e.target.value
    }, () => console.log(this.state))
  }

  handleFormSubmit = () => {
    console.log("you are trying to submit")
  }

  render() {
    return (
      <div>
        <form action="index.html" method="post">
            <input type="txt" name="first_name" placeholder="first name" onChange={this.handleFormInput} value={this.state.first_name} required></input>
            <input type="txt" name="last_name" placeholder="last name" onChange={this.handleFormInput} value={this.state.last_name} required></input>
            <input type="email" name="email" placeholder="email" onChange={this.handleFormInput} value={this.state.email} required></input>
            <input type="password" name="password" placeholder="password" onChange={this.handleFormInput} value={this.state.password} required></input>
            <input type="txt" name="city" placeholder="city" onChange={this.handleFormInput} value={this.state.city}></input>
            <input type="submit" onClick={this.handleFormSubmit}></input>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({ requestLoginInformation }, dispatch);

export default connect(null, mapDispatchToProps)(SignUpContainer);
