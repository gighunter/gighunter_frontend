import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { requestLoginInformation } from '../actions/index';

const BASE_URL = "http://localhost:3000/api/v1/"

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

  handleFormSubmit = (e) => {
    e.preventDefault()
    fetch(BASE_URL + "users", {
      method: 'POST',
      body: JSON.stringify(this.state),
      headers: {'Content-Type': 'application/json'}
    })
    .then(response => response.json())
    .then(json => console.log(json))
  }

  render() {
    return (
      <div>
        <form>
            <input type="txt" name="first_name" placeholder="first name" onChange={this.handleFormInput} value={this.state.first_name} required/>
            <br/>
            <input type="txt" name="last_name" placeholder="last name" onChange={this.handleFormInput} value={this.state.last_name} required/>
            <br/>
            <input type="email" name="email" placeholder="email" onChange={this.handleFormInput} value={this.state.email} required/>
            <br/>
            <input type="password" name="password" placeholder="password" onChange={this.handleFormInput} value={this.state.password} required/>
            <br/>
            <input type="txt" name="city" placeholder="city" onChange={this.handleFormInput} value={this.state.city}/>
            <br/>
            <input type="submit" onClick={this.handleFormSubmit}/>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({ requestLoginInformation }, dispatch);

export default connect(null, mapDispatchToProps)(SignUpContainer);
