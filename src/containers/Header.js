import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


class Header extends React.Component {

  constructor(props) {
    super(props);

    this.state = { h: '' }
  }

  render() {

    return(
      <div className="header_container">
        <div className="header_container_logo">
          <Link to="/">GigHunter Logo</Link>
        </div>
        <div className="header_container_links">
          <div><Link to="/route1">Link_One</Link></div>
          <div><Link to="/route2">Link_Two</Link></div>
          <div><Link to="/route3">Link_Three</Link></div>
        </div>
        <button className="login" type="button"> Log In </button>
        <button className="signUp" type="button"> Sign Up </button>
      </div>
    )
  }
}


// const mapDispatchToProps = (dispatch) => {
//   return bindActionCreators();
// };

export default Header;
