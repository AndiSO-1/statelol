import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";



export default class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light">
        <Link className="navbar-brand mx-5" to={"/"}>State LoL</Link>

        <div className="navbar-collapse mx-5">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to={"/home"}>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/about"}>About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/contact"}>Contact</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/login"}>Log in</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
