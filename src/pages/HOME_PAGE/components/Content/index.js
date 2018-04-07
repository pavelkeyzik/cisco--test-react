import React, { Component } from "react";
import "./index.css";
import ListOfUsers from '../ListOfUsers';


export default class Content extends Component {
  render() {
    return (
      <main className="content">
        <h1>List Of Users:</h1>
        <ListOfUsers />
      </main>
    );
  }
}
