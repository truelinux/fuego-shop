import React, { Component } from "react";
import Logo from "../fuego.png";
import { Link } from "react-router-dom";

export class Nav extends Component {
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-fixed-top header">
          <ul className="nav navbar-nav float-left mx-auto col-3 col-md-2">
            <li className="nav-item mx-auto">
              <Link to="/cart">
                <div href="#" className="text-click">
                  CART
                </div>
              </Link>
            </li>
          </ul>
          <div className="logo-container col-5 col-md-3">
            <a href="/">
              <img src={Logo} alt="Fuego LTD" />
            </a>
          </div>

          <ul className="nav navbar-nav float-left mx-auto col-3 col-md-2">
            <li className="nav-item mx-auto">
              <Link to="/about">
                <div href="#" className="text-click">
                  ABOUT
                </div>
              </Link>
            </li>
          </ul>
        </nav>
      </React.Fragment>
    );
  }
}

export default Nav;
