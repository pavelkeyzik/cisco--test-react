import React, { Component } from "react";
import styles from "./index.scss";
import ListOfUsers from '../ListOfUsers';


export default class Content extends Component {
  render() {
    return (
      <main className={styles.content}>
        <h1>List Of Users:</h1>
        <ListOfUsers />
      </main>
    );
  }
}
