import React, { Component } from "react";
import "./index.css";

export default class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="header__greeting">Hello, username</div>
      </header>
    );
  }
}
