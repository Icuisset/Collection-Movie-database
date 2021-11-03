import React from 'react';
import { Link } from "react-router-dom";

import './Header.css';
import useStyles from './HeaderStyle';


  
function Header(): JSX.Element {
  const classes = useStyles();
    return (
      <div className={classes.headerNavBar}>
        <Link className={classes.headerLink} to='/'>MyMovies</Link>
        </div>
    )
  };

export default Header;