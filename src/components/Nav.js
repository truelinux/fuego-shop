import React, { Component } from "react";
import Logo from "../fuego.png";

export class Nav extends Component {
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-fixed-top header">
          <ul className="nav navbar-nav float-xs-left">
            <li className="nav-item">
              <a href="#" className="text-click">
                CART
              </a>
            </li>
          </ul>
          <img src={Logo} />

          <ul className="nav navbar-nav float-xs-right">
            <li className="nav-item">
              <a href="#" className="text-click">
                ABOUT
              </a>
            </li>
          </ul>
        </nav>
      </React.Fragment>
    );
  }
}

export default Nav;
