import React from 'react';
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

