import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
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
        <div className="login_signup">
          <div className="header_container_login">
            <Link to="/Login">Login</Link>
          </div>
        </div>
        <div className="header_container_signup">
          <Link to="/Sign_Up">Sign Up</Link>
        </div>
      </div>
    )
  };

export default Header;
