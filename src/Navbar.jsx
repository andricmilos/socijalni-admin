import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Navbarcss from './Navbar.css';
import validateLogin from './LoginValidate';

function Navbar() {
  const location = useLocation();
  if (location.pathname != '/login') {
    validateLogin();
  }


  return (<nav>
    <div className="navbar">
      <button><Link to='/'>Pocetna</Link></button>
      <div className="dropdown perica ilija">
        <button className="dropbtn">Post
          <i className="fa fa-caret-down"></i>
        </button>
        <div className="dropdown-content">
          <button><Link to='/post/napravi'>Napravi</Link></button>
        </div>
      </div>
      <div className="dropdown perica ilija">
        <button className="dropbtn">User
          <i className="fa fa-caret-down"></i>
        </button>
        <div className="dropdown-content">
          <button><Link to='/user/napravi'>Napravi</Link></button>
        </div>
      </div>
      <button className="logout-right"><Link to='/logout'>Logout</Link></button>
    </div>

  </nav>);
}

export default Navbar;
