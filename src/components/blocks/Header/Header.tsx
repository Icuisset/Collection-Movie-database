import React from 'react';
import { Link } from "react-router-dom";

import './Header.css';


  
function Header(): JSX.Element {
    return (
      <div className="headerNavBar">
        <Link className="headerLink" to='/'>MyMovies</Link>
        </div>
    )
  };

export default Header;