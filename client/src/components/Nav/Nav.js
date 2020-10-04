import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ logout }) => {
  return (
    <nav className="navbar  navbar-info bg-info logo">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarColor03"
        aria-controls="navbarColor03"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <span className=" navbar-toggler-icon"></span>
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
          <li className="nav-item">
            <Link
              to="#"
              onClick={logout}
              className="nav-link nav-item navbar-brand">
              UGLY BTN
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
