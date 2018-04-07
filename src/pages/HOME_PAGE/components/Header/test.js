import React from "react";
import ReactDOM from "react-dom";
import HomePage from ".";
import Header from ".";

describe("Header Component", () => {
  it("Header component loaded without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Header />, div);
  });
});
