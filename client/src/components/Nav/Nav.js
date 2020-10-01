import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-info bg-info">
      <Link to="/">
        <a className="navbar-brand">Puppy Love</a>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarColor03"
        aria-controls="navbarColor03"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarColor03">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
          <Link to="/hang" className="nav-link nav-item navbar-brand">
              Preferences
            </Link>
          </li>
          <li className="nav-item">
          <Link to="/hang" className="nav-link nav-item navbar-brand">
              Play Date
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link nav-item navbar-brand">
              About
            </Link>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
