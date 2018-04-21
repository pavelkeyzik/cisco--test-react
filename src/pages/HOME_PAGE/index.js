import React, { Component } from "react";
import "./index.scss";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Content from "./components/Content";

export default class HomePage extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="home-page">
          <div className="home-page__sidebar">
            <Sidebar />
          </div>
          <div className="home-page__content">
            <Header />
            <Content />
          </div>
        </div>
      </React.Fragment>
    );
  }
}
