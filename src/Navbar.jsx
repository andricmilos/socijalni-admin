import React from 'react';
import {Link, useLocation  } from 'react-router-dom';
import Navbarcss from './Navbar.css';
import validateLogin from './LoginValidate';

function Navbar() {
  const location = useLocation();
  if (location.pathname != '/login') {
    validateLogin();
  }
    

  return (<nav>
    <div class="navbar">
      <button><Link to='/'>Pocetna</Link></button>
      <button class="dropdown">
        <button class="dropbtn">Post
          <i class="fa fa-caret-down"></i>
        </button>
        <div class="dropdown-content">
          <button><Link to='/post/napravi'>Napravi</Link></button>
        </div>
      </button>
      <button class="dropdown">
        <button class="dropbtn">User
          <i class="fa fa-caret-down"></i>
        </button>
        <div class="dropdown-content">
          <button><Link to='/user/napravi'>Napravi</Link></button>
        </div>
      </button>
      <button class="logout-right"><Link to='/logout'>Logout</Link></button>
    </div>

  </nav>);
}

export default Navbar;
