import React from 'react';
import {BrowserRouter,Route,Link} from 'react-router-dom'; 
import Navbarcss from './Navbar.css';

function Navbar() {
  return (<nav>
    <div class="navbar">
        <a class='active'><Link to='/'>Pocetna</Link></a>
        <a class="dropdown">
          <button class="dropbtn">Post
            <i class="fa fa-caret-down"></i>
          </button>
          <div class="dropdown-content">
            <a><Link to='/post/napravi'>Napravi</Link></a>
            <a><Link to='/post/izmeni'>Izmeni</Link></a>
            <a><Link to='/post/obrisi'>Obrisi</Link></a>
          </div>
        </a> 
        <a class="dropdown">
          <button class="dropbtn">User
            <i class="fa fa-caret-down"></i>
          </button>
          <div class="dropdown-content">
            <a><Link to='/user/napravi'>Napravi</Link></a>
            <a><Link to='/user/izmeni'>Izmeni</Link></a>
            <a><Link to='/user/obrisi'>Obrisi</Link></a>
          </div>
        </a> 
    </div>

    </nav>);
}

export default Navbar;
