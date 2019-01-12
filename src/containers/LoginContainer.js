import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { requestLoginInformation } from '../actions/index';

const BASE_URL = "http://localhost:3000/api/v1/"


class LoginContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = { email: "", password: "" }
  }

  // AS SOON AS USER LOGS IN WITH THEIR EMAIL AND PASSWORD, AN AUTH TOKEN IS RETURNED
  // WE WILL SET THIS IN THE LOCAL STORAGE FOR ALL FUTURE REQUESTS
  // http://localhost:3000/authenticate?email=${this.state.email}&password=${this.state.password}
  handleFormSubmit = (e) => {
    e.preventDefault()
      fetch(BASE_URL + `authenticate?email=${this.state.email}&password=${this.state.password}`, {
        method: "POST",
        headers:{
        'Content-Type': 'application/json',
    }
  }).then(resp => resp.json()).then(json => this.setAuthToken(json)).then(() => this.getUserData())
    }

  // SETTING THE AUTH TOKEN IN LOCAL STORAGE
    setAuthToken = (json) => {
      localStorage.setItem('authToken', json.auth_token);
      this.setState({
        user: {
          user_id: json.user_id
        }
      });
    }


  handleFormInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    }, () => console.log(this.state))
  }

  render() {
    return (
      <div>
        <form>
          <input type="email" name="email" placeholder="email" onChange={this.handleFormInput} value={this.state.email}/>
          <input type="password" name="password" placeholder="password" onChange={this.handleFormInput} value={this.state.password}/>
          <input type='submit' onClick={this.handleFormSubmit} />
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({ requestLoginInformation }, dispatch);

export default connect(null, mapDispatchToProps)(LoginContainer);
