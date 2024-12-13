<<<<<<< HEAD
import React from 'react';
=======
>>>>>>> 3a459cbdde10529c926823e1d826d17ed2f35f21
import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  return (
    <div className="navbar">
      <Link to="/"> Home </Link> |
      <Link to="/about"> About </Link>
    </div>
  );
}

export default NavBar;

