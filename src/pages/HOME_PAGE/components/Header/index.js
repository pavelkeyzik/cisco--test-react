import React, { Component } from "react";
import styles from "./index.scss";
import { AppContext } from "../../../../contexts/app-context";

export default class Header extends Component {
  render() {
    return (
      <AppContext.Consumer>
        {context => (
          <header className={styles.header}>
            <div>
              Hello, {context.authorizedUserName}
            </div>
          </header>
        )}
      </AppContext.Consumer>
    );
  }
}
