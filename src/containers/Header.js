import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => (
  <div className="header">
    <div className="header__left">
      <div className="logo--white">
        <Link to="/"><img src="/logo-white.png" alt="Gighunter" /></Link>
      </div>
    </div>
    <div className="header__right">
    <div>
    {localStorage.getItem('authToken') ? <Link to="/">Home</Link> : ""}
    </div>
      <div>
        {localStorage.getItem('authToken') ? <Link to="/users">Users</Link> : ""}
      </div>
      <div>
        {localStorage.getItem('authToken') == 'undefined' || !localStorage.getItem('authToken')? <Link to="/login">Login</Link> : ""}
      </div>
      <div>
        {localStorage.getItem('authToken') == 'undefined' || !localStorage.getItem('authToken')? <Link to="/sign-up">Sign Up</Link> : ""}
      </div>
      <div>
      {localStorage.getItem('authToken') ? <Link to="/login" onClick={props.logOut}>Log Out</Link> : ""}
      </div>
    </div>
  </div>
);


export default Header;
