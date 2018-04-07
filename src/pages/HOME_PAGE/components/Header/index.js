import React, { Component } from "react";
import "./index.css";
import { AppContext } from "../../../../contexts/app-context";

export default class Header extends Component {
  render() {
    return (
      <AppContext.Consumer>
        {context => (
          <header className="header">
            <div className="header__greeting">
              Hello, {context.authorizedUserName}
            </div>
          </header>
        )}
      </AppContext.Consumer>
    );
  }
}
