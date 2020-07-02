import React, { Component } from "react";
import Logo from "../fuego.png";
import { Link } from "react-router-dom";

export class Nav extends Component {
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-fixed-top header">
          <ul className="nav navbar-nav float-xs-left">
            <li className="nav-item">
              <Link to="/cart">
                <div href="#" className="text-click">
                  CART
                </div>
              </Link>
            </li>
          </ul>
          <div className="logo-container">
            <a href="/">
              <img src={Logo} alt="Fuego LTD" />
            </a>
          </div>

          <ul className="nav navbar-nav float-xs-right">
            <li className="nav-item">
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
