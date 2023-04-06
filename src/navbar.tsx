import React from 'react';
import { Link } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';

//This is the navbar so that the user can switch between pages.
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Podcasts">Podcasts</Link>
        </li>
        <li>
          <Link to="/MovieList">MovieList</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
