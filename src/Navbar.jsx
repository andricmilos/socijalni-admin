import React from 'react';
import {BrowserRouter,Route,Link} from 'react-router-dom'; 
import Navbarcss from './Navbar.css';

function Navbar() {
  return (<nav>
    <div class="navbar">
        <button><Link to='/'>Pocetna</Link></button>
        <button class="dropdown">
          <button class="dropbtn">Post
            <i class="fa fa-caret-down"></i>
          </button>
          <div class="dropdown-content">
            <button><Link to='/post/napravi'>Napravi</Link></button>
            <button><Link to='/post/izmeni'>Izmeni&nbsp;&nbsp;</Link></button>
            <button><Link to='/post/obrisi'>Obrisi&nbsp;&nbsp;&nbsp;</Link></button>
          </div>
        </button> 
        <button class="dropdown">
          <button class="dropbtn">User
            <i class="fa fa-caret-down"></i>
          </button>
          <div class="dropdown-content">
            <button><Link to='/user/napravi'>Napravi</Link></button>
            <button><Link to='/user/izmeni'>Izmeni&nbsp;&nbsp;</Link></button>
            <button><Link to='/user/obrisi'>Obrisi&nbsp;&nbsp;&nbsp;</Link></button>
          </div>
        </button>
        <button class="logout-right"><Link to='/'>Logout</Link></button> 
    </div>

    </nav>);
}

export default Navbar;
