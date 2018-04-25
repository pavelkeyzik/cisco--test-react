import React, { Component } from "react";
import styles from "./index.scss";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Content from "./components/Content";

export default class HomePage extends Component {
  render() {
    return (
      <React.Fragment>
        <div className={styles.home}>
          <div className={styles.home__sidebar}>
            <Sidebar />
          </div>
          <div className={styles.home__content}>
            <Header />
            <Content />
          </div>
        </div>
      </React.Fragment>
    );
  }
}
