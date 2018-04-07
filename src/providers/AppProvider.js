import React, { Component } from "react";
import { AppContext } from "../contexts/app-context";
import users from "../utils/users-list";

export default class AppProvider extends Component {
  state = {
    authorizedUserName: "Pavel",
    users
  };

  render() {
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}
