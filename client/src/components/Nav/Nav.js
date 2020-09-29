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
        data-target="#navbarColor01"
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
            <Link to="/hang" className="nav-link nav-item navbar-brand">
              About
            </Link>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="text"
            placeholder="Search"
          />
          <button className="btn btn-secondary my-2 my-sm-0" type="submit">
            Search
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
