import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  state = {
    navBarLinks: [
      { id: 1, name: "Movies", path: "/" },
      { id: 2, name: "Customers", path: "/customers" },
      { id: 3, name: "Rental", path: "/rental" },
    ],
  };

  render() {
    const { navBarLinks } = this.state;
    return (
      <nav className="navbar navbar-expand-md navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          HDLibrary
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {navBarLinks.map((link) => (
              <li key={link.id} className="nav-item">
                <Link className="nav-link" to={link.path}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    );
  }
}
export default Navbar;
