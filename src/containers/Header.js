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
        <Link to="/users">Users</Link>
      </div>
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <Link to="/login">Login</Link>
      </div>
      <div>
        <Link to="/sign-up">Sign Up</Link>
      </div>
      <div>
      <button onClick={props.logOut}>Log Out</button>
      </div>
    </div>
  </div>
);


export default Header;
